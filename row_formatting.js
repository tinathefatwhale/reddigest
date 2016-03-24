
/**
 * @Author Evan Cofer
 * @Brief https://github.com/evancofer
 */

var the_row_color_flag = true;

var unseen = [];
// var cur_max_links = 100;
var local_seen_list = [];

function get_new_links(){
	/**
	 * @fn get_links()
	 * @brief Fetches a batch of links from reddit as JSON to be processed.
	 */
	get_seen();
	$.ajax({
		url:"http://www.reddit.com/r/all.json",
		type: "GET",
		dataType: "json",
		header: {'Access-Control-Allow-Origin':'http://www.reddit.com'},
		data: {t: "day", limit: 1000},
		success: function(obj){
			populate_batch(obj);
		}
	});

}

function populate_batch(input_obj){
	/**
	 * @fn populate_batch(input_obj) 
	 * @brief Adds a bunch of new links.
	 * @param input_obj JSON object from reddit.
	 */
	var row_count = 0;
	input_obj.data.children.forEach(function(link){
		if(!(row_count < get_max_rows())){
			return;
		}
		if( populate_link(row_count,link) == true){
			console.log(row_count);
			++row_count;
		}
	});
}

function get_max_rows(){//NOTE(Evan): This allows us to eventually scale rows with screen size.
	/**
	 * @fn get_max_rows()
	 * @brief Returns the maximum number of rows to display
	 */
	return 25;
}


function get_max_links(){//NOTE(Evan): This allows us to eventually scale rows with screen size.
	/**
	 * @fn get_max_links()
	 * @brief Largest request to make to reddit.
	 */
	// cur_max_links += inc; //TODO this is not sustainable.
	return 1000;
}


function populate_link(row_count, link){
	/**
	 * @fn populate_link() 
	 * @param A link JSON object from Reddit.
	 * @brief Adds a row to the current page (typically used on load).
	 */
	if(unseen.indexOf(link.data.url) > -1){
		return false;
	} else {
		var table_body = document.getElementById("link_table");
		var row_color_style = "";
			if(the_row_color_flag == true){
				row_color_style = "#848482";
				the_row_color_flag = false;
			} else {
				row_color_style ="#FOFFFF";
				the_row_color_flag = true;
			}
		table_body.innerHTML = table_body.innerHTML + create_row(row_count, row_color_style, link);
		return true;
	}
}

function create_row(cur_row, row_color_style, link) {
	/**
	 * @fn add_row(cur_row, row_color_style) 
	 * @param cur_row Integer for placement of this row.
	 * @param row_color_style Color to be used for this row.
	 * @brief Creates and returns a new row with the desired color and id number.
	 */
	
	var current_row = "";
	current_row+='<div id=\"REDDIGEST_ROW_NUM_';
	current_row+= cur_row;
	current_row+= '\" class=\"reddigest_row\">';
	current_row+= fetch_row(cur_row, row_color_style, link);
	current_row+='</div>';
	return current_row;
}

function fetch_row(cur_row, row_color_style, link){
	/**
	 * @fn fetch_row(row_color_style)
	 * @param row_color_style Color for the current row.
	 * @brief Fetches new link information from the database and returns a formatted link entry.
	 */

	var article_link = link.data.url
	var article_title = link.data.title;
	var article_site_name = link.data.domain;
	var poster_name = link.data.author;
	var poster_link = 'https://www.reddit.com/user/'+ poster_name;
	var subreddit_name = '/r/' + link.data.subreddit;
	var subreddit_link = 'https://www.reddit.com' + subreddit_name;
	var comment_count = link.data.num_comments
	var comment_link = 'https://www.reddit.com'+link.data.permalink
	
	if(article_title.length > 165){
		article_title.substring(0,160);
		article_title += '...';
	}
	article_link.replace('\/','/');
	comment_link.replace('\/','/');

	unseen[cur_row] = article_link;
	
	return create_link(cur_row, row_color_style, article_link, article_title, article_site_name, poster_link, poster_name, subreddit_link, subreddit_name, comment_count, comment_link);
}

	
function create_link(cur_row, l_c, a_l, a_t, a_s_n, p_l, p_n, s_l, s_n, c_c, c_l){
	/**
	*	@fn	create_entry(l_c, a_l, a_t, a_s_n, p_l, p_n, s_l, s_n) 
	*	@param l_c 		row_color_style
	*	@param a_l 		article_link
	*	@param a_t 		article_title
	*	@param a_s_n 	article_site_name
	*	@param p_l		poster_link
	*	@param p_n		poster_name
	*	@param s_l		subreddit_link
	*	@param s_n		subreddit_name
	*	@param c_c		comment_count
	*	@param c_l		comment_link
	*	@brief Creates and returns a new link entry from link data and color info. 	
	*/
	var ret = "";
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div class= \"col-md-12\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div id=\"the_sub_row\" class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div class=\"col-sm-12\" style= \"font-size: 16px; vertical-align: middle;\">';
	ret+='<a id=\"link_seen_button\" href=\"javascript:remove_row(';
	ret+= cur_row;
	ret+=')\">';
	ret+='&nbsp<span class=\"glyphicon glyphicon-remove-sign\" style=\"color: white;\"></span>';
	ret+='</button>';
	ret+='&nbsp';
	ret+='<a id= \"the_link\" href=\"';
	ret+= a_l;//link to article.
	ret+='\">';
	ret+= a_t;//Title of article.
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"http://';
	ret+= a_s_n; //site link
	ret+='\" style=\"font-size: 12px;\">[';
	ret+= a_s_n; //abreviated name.
	ret+=']</a>';
	ret+='</div>';
	ret+='</div><div class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+= ';\"><div class=\"col-sm-12 col-xs-offset-1\">';
	ret+='by ';
	ret+='<a href=\"';
	ret+= p_l;//link to article.
	ret+='\">';
	ret+= p_n;//poster of article
	ret+='</a>';
	ret+= ' @ ';
	ret+='<a href=\"';
	ret+= s_l;//link to subreddit
	ret+='\">';
	ret+= s_n;//name of subreddit
	ret+='</a>';
	ret+=' | ';
	ret+='<a href=\"';
	ret+= c_l;//link to article.
	ret+='\">';
	ret+= c_c;//Title of article.
	ret+=' comments';
	ret+='</a>';
	ret+='</div></div>';
	ret+='</div>';
	ret+='</div>';
	return ret;
}


var increase_query = 20;
function remove_row(row_num){
	/**
	 * @fn remove_row(row_num)
	 * @brief Removes a row from the table and replaces it with a new one.
	 * @param row_num Index of row being removed.
	 */
	var this_row = document.getElementById("REDDIGEST_ROW_NUM_"+row_num);
	var link = this_row.querySelector("#the_link");
	if(row_num%2 == 1){
		row_color_style ="#FOFFFF";
	} else {
		row_color_style = "#848482";
	}		
	
	console.log(row_color_style);
        console.log(link.href);	
	seen_link(link.href);
	
	var new_flag = false;
	
	unseen[row_num] = "";
	
	var seen_flag = false;
	var preserve_obj;
		$.ajax({
				url:"http://www.reddit.com/r/all.json",
				type: "GET",
				dataType: "json",
				header: {'Access-Control-Allow-Origin':'http://www.reddit.com'},
				data: {t: "day", limit: get_max_links()},
				success: function(link_list){
					link_list.data.children.forEach(function(obj) {
						obj.data.url = obj.data.url.replace("\/","/");
						console.log(obj.data.url);
							if(try_link(obj.data.url) === true && seen_flag === false){
							this_row.innerHTML = fetch_row(row_num, row_color_style, obj);
							seen_flag = true;
						}
					});
				}
		});
}

function try_link(link){
	/**
	 * @fn try_link(link)
	 * @brief Lets us know if we've seen a link
	 * @param link A link that we're unsure if we've seen.
	 * @returns true iff we've never seen this link.
	 */
	if(unseen.indexOf(link) > -1){
		return false;
	} else if (local_seen_list.indexOf(link) > -1){
                //console.log("hello!"+link);
		return false;
	} else {
		return true;
	}
}

function seen_link(old_link){
	/**
	 * @fn seen_link()
	 * @brief Stores a seen link in the database and on local store.
	 */
	local_seen_list.push(old_link);
        console.log(old_link);
	$.ajax({
		url:"store_links.php",
		type: "POST",
		datatype: "json",
		data: {link: old_link},
                success: function(data) {
                  //console.log(data);
                },
                error: function(data) {
                  //console.log("bad");
                }
	});
}

function get_seen(){
	/**
	 * @fn get_seen()
	 * @brief Fetches all the links we've seen from the database.
	 */
	$.ajax({
		url:"get_links.php",
		type: "POST",
		datatype: "json",
		success: function(obj){
			console.log(obj);
                        var parsed = JSON.parse(obj);
                        console.log(parsed);
                        jQuery.each(parsed.links,function(i,link){
                                console.log(link);
				local_seen_list.push(link);
			});
		}
	});
}



	
