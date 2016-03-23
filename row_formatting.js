


function get_max_rows(){//NOTE(Evan): This allows us to eventually scale rows with screen size.
	/**
	 * @fn get_max_rows()
	 * @brief Returns the maximum number of rows to display
	 */
	return 25;
}

function flush_link_table() {
	/**
	 * @fn flush_link_table() 
	 * @brief Removes all the current links on the table and replaces them with new ones from the database.
	 */
	row_count = 0;
}

function remove_link(){//TODO
	/**
	 * @fn remove_link() 
	 * @brief Removes the current link and also repopulates it with a link from the database.
	 */
	return;
}

var the_row_color_flag = true;
var row_count = 0;

function populate_link(input_obj){
	/**
	 * @fn populate_link() 
	 * @brief Adds a row to the current page (typically used on load).
	 */
	++row_count;
	var table_body = document.getElementById("link_table");
	var row_color_style = "";
		if(the_row_color_flag == true){
			row_color_style = "#848482";
			the_row_color_flag = false;
		} else {
			row_color_style ="#FOFFFF";
			the_row_color_flag = true;
		}
	table_body.innerHTML = table_body.innerHTML + create_row(row_count, row_color_style, input_obj);
	return;
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
	current_row+= fetch_row(row_color_style, link);
	current_row+='</div>';
	return current_row;
}

function fetch_row(row_color_style, link){
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
	var comment_link = 'https://www.reddit.com/'+link.data.permalink
	
	if(article_title.length > 165){
		article_title.substring(0,160);
		article_title += '...';
	}
	article_link.replace('\/','/');
	comment_link.replace('\/','/');

	
	return create_link(row_color_style, article_link, article_title, article_site_name, poster_link, poster_name, subreddit_link, subreddit_name, comment_count, comment_link);
}

	
function create_link(l_c, a_l, a_t, a_s_n, p_l, p_n, s_l, s_n, c_c, c_l){
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
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div class=\"col-sm-12\" style= \"font-size: 16px; vertical-align: middle;\">';
	ret+='<a id=\"link_seen_button\" href=\"javascript:remove_link();\">';
	ret+='&nbsp<span class=\"glyphicon glyphicon-remove-sign\" style=\"color: white;\"></span>';
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"';
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
	ret+= s_l;//name of subreddit
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

