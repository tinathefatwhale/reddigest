


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

function populate_link_table(){
	/**
	 * @fn populate_link_table() 
	 * @brief Adds the maximum number of rows to the current page (typically used on load).
	 */
	var row_count = 0;
	
	var row_color_flag = true;
	
	var table_body = document.getElementById("link_table");
	var new_content = "";
	var row_color_style = "";
	
	//TODO for each in json object.
	while(row_count < max_row_count){
		++row_count;
		if(row_color_flag == true){
			row_color_style = "#848482";
			row_color_flag = false;
		} else {
			row_color_style ="#FOFFFF";
			row_color_flag = true;
		}
		table_body.innerHTML = table_body.innerHTML + create_row(row_count, row_color_style);
	}
	return;
}

function create_row(cur_row, row_color_style) {
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
	current_row+= fetch_row(row_color_style);
	current_row+='</div>';
	return current_row;
}

function fetch_row(row_color_style){
	/**
	 * @fn fetch_row(row_color_style)
	 * @param row_color_style Color for the current row.
	 * @brief Fetches new link information from the database and returns a formatted link entry.
	 */
	var article_link = 'http://www.google.com';
	var article_title = 'Search The Internet With This';
	var article_site_link = 'http://www.google.com'
	var article_site_name = 'google.com';
	var poster_link = 'https://www.reddit.com/user/Chris_Hansen_AMA';
	var poster_name = 'Chris_Hansen_AMA';
	var post_age = '5 hours ago';
	var subreddit_link = 'https://www.reddit.com/r/programmingcirclejerk/';
	var subreddit_name = '/r/programmingcirclejerk';
	return create_link(row_color_style, article_link, article_title, article_site_link, article_site_name, poster_link, poster_name, post_age, subreddit_link, subreddit_name);
}

	
function create_link(l_c, a_l, a_t, a_s_l, a_s_n, p_l, p_n, p_a, s_l, s_n){
	/**
	*	@fn	create_entry(l_c, a_l, a_t, a_s_l, a_s_n, p_l, p_n, p_a, s_l, s_n) 
	*	@param l_c 		row_color_style
	*	@param a_l 		article_link
	*	@param a_t 		article_title
	*	@param a_s_l	article_site_link
	*	@param a_s_n 	article_site_name
	*	@param p_l		poster_link
	*	@param p_n		poster_name
	*	@param p_a		post_age
	*	@param s_l		subreddit_link
	*	@param s_n		subreddit_name
	*	@brief Creates and returns a new link entry from link data and color info. 	
	*/
	var ret = "";
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div class= \"col-md-8\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+=';\">';
	ret+='<div class=\"col-sm-8\" style= \"font-size: 16px; vertical-align: middle;\">';
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
	ret+='<a href=\"';
	ret+= a_s_l;//Full site link.
	ret+='\" style=\"font-size: 12px;\">[';
	ret+= a_s_n; //abreviated name.
	ret+=']</a>';
	ret+='</div>';
	ret+='</div><div class = \"row\" style=\"background-color: ';
	ret+= l_c;
	ret+= ';\"><div class=\"col-sm-8 col-xs-offset-1\">';
	ret+='by ';
	ret+='<a href=\"';
	ret+= p_l;//link to article.
	ret+='\">';
	ret+= p_n;//poster of article
	ret+='</a>';
	ret+='&nbsp';
	ret+= p_a;//Time information
	ret+= ' @ ';
	ret+='<a href=\"';
	ret+= s_l;//link to subreddit
	ret+='\">';
	ret+= s_l;//name of subreddit
	ret+='</a>';
	ret+='</div></div>';
	ret+='</div>';
	ret+='</div>';
	return ret;
}


/*




$.ajax({
			url:"get_links.php",
			type: "POST",
			dataType: "json",
			data: 
			
		});
			
			{link_counts: get_max_rows()},
			function(responseTxt, statusTxt, xhr){
				if(statusTxt == "success"){
					populate_link_table(responseTxt);
				} else {
					alert("Failed to load links."); //This is shitty, alerts are annoying, just have it straight up 404?
				}
			},
			"json");
	}
	
	$('#link_seen__button').click(function(){
		var this_row = $(this).parents("reddigest_row");
		var row_color = this_row.child("row").css("background-color");
		
		$.post(
			"somephp",
			{args},
			function(responseTxt, statusTxt, xhr){
				if(statusTxt == "success"){
					this_row.html(fetch_row(row_color, responseTxt));
				}
			},
		"html");
	});
	*/