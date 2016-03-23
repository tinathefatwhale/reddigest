var row_color_flag = true;
var row_count = 0;

function remove_link(old_link) {
	
	//TODO use ajax to do this.
	console.log(old_link);
	var rem_id = 'REDDIGEST_ROW_NUM_' + old_link;
	console.log(rem_id);
	var tableBody = document.getElementById(old_link);
	
	var article_link = 'http://www.google.com';
	var article_title = 'Get Replaced';
	var article_site_link = 'http://www.google.com'
	var article_site_name = 'google.com';
	var poster_link = 'https://www.reddit.com/user/Chris_Hansen_AMA';
	var poster_name = 'Chris_Hansen_AMA';
	var post_age = '5 hours ago';
	var subreddit_link = 'https://www.reddit.com/r/programmingcirclejerk/';
	var subreddit_name = '/r/programmingcirclejerk';
	
	//TODO implement the create row as a new function
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class= \"col-md-8\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class=\"col-sm-8\" style= \"font-size: 16px; vertical-align: middle;\">';
	ret+='<a href=\"javascript:remove_link();\">';
	ret+='&nbsp<span class=\"glyphicon glyphicon-remove-sign\" style=\"color: white;\"></span>';
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"';
	ret+= article_link;//link to article.
	ret+='\">';
	ret+= article_title;//Title of article.
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"';
	ret+= article_site_link;//Full site link.
	ret+='\" style=\"font-size: 12px;\">[';
	ret+= article_site_name; //abreviated name.
	ret+=']</a>';
	ret+='</div>';
	ret+='</div><div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+= ';\"><div class=\"col-sm-8 col-xs-offset-1\">';
	ret+='by ';
	ret+='<a href=\"';
	ret+= poster_link;//link to article.
	ret+='\">';
	ret+= poster_name;//poster of article
	ret+='</a>';
	ret+='&nbsp';
	ret+= post_age;//Time information
	ret+= ' @ ';
	ret+='<a href=\"';
	ret+= subreddit_link;//link to subreddit
	ret+='\">';
	ret+= subreddit_name;//name of subreddit
	ret+='</a>';
	ret+='</div></div>';
	ret+='</div>';
	ret+='</div>';
	link_to_remove.innerHTML = ret;
	return;
}

function flush_page() {
	row_count = 0;
	
}

function populate_page(){
	while(row_count < 25){
		add_row();
	}
}

function add_row() {
	/*
	 * NOTE(Evan): Have this pull data when it is called.
	 */
	++row_count;
	var tableBody = document.getElementById("link_table");
	
	var ret = "";
	var row_color_style = "";
	if(row_color_flag == true){
		row_color_style = "#848482";
		row_color_flag = false;
	} else {
		row_color_style ="#FOFFFF";
		row_color_flag = true;
	}
	
	var article_link = 'http://www.google.com';
	var article_title = 'Search The Internet With This';
	var article_site_link = 'http://www.google.com'
	var article_site_name = 'google.com';
	var poster_link = 'https://www.reddit.com/user/Chris_Hansen_AMA';
	var poster_name = 'Chris_Hansen_AMA';
	var post_age = '5 hours ago';
	var subreddit_link = 'https://www.reddit.com/r/programmingcirclejerk/';
	var subreddit_name = '/r/programmingcirclejerk';
	//
	
	ret+='<div id=\"REDDIGEST_ROW_NUM_';
	ret+= row_count;
	ret+= '\">';
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class= \"col-md-8\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class=\"col-sm-8\" style= \"font-size: 16px; vertical-align: middle;\">';
	ret+='<a id=\"';
	ret+= row_count;
	ret+='\" href=\"javascript:remove_link();\">';
	ret+='&nbsp<span class=\"glyphicon glyphicon-remove-sign\" style=\"color: white;\"></span>';
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"';
	ret+= article_link;//link to article.
	ret+='\">';
	ret+= article_title;//Title of article.
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"';
	ret+= article_site_link;//Full site link.
	ret+='\" style=\"font-size: 12px;\">[';
	ret+= article_site_name; //abreviated name.
	ret+=']</a>';
	ret+='</div>';
	ret+='</div><div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+= ';\"><div class=\"col-sm-8 col-xs-offset-1\">';
	ret+='by ';
	ret+='<a href=\"';
	ret+= poster_link;//link to article.
	ret+='\">';
	ret+= poster_name;//poster of article
	ret+='</a>';
	ret+='&nbsp';
	ret+= post_age;//Time information
	ret+= ' @ ';
	ret+='<a href=\"';
	ret+= subreddit_link;//link to subreddit
	ret+='\">';
	ret+= subreddit_name;//name of subreddit
	ret+='</a>';
	ret+='</div></div>';
	ret+='</div>';
	ret+='</div>';
	ret+='</div>';
	tableBody.innerHTML =  tableBody.innerHTML + ret;
	return;
}
