var row_color_flag = true;
var row_count = 0;

function remove_link() {
	var thing = document.getElementById("thing");
	thing.innerHTML = "REMOVE ME PLEASE";
	return;
}

function add_row() {
	/*
	 * NOTE(Evan): Clean up this eventually, so it only returns the string and HTML insertion done elsewhere
	 */
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
	
	//
	
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
	ret+='http://www.google.com';//link to article.
	ret+='\">';
	ret+= 'Search The Internet With This';//Title of article.
	ret+='</a>';
	ret+='&nbsp';
	ret+='<a href=\"';
	ret+='http://www.google.com';//Full site link.
	ret+='\" style=\"font-size: 12px;\">[';
	ret+= 'google.com'; //abreviated name.
	ret+=']</a>';
	ret+='</div>';
	ret+='</div><div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+= ';\"><div class=\"col-sm-8 col-xs-offset-1\">';
	ret+='by ';
	ret+='<a href=\"';
	ret+='https://www.reddit.com/user/Chris_Hansen_AMA';//link to article.
	ret+='\">';
	ret+= 'Chris_Hansen_AMA';//poster of article
	ret+='</a>';
	ret+='&nbsp';
	ret+='5 hours ago';//Time information
	ret+= ' @ ';
	ret+='<a href=\"';
	ret+='https://www.reddit.com/r/programmingcirclejerk/';//link to subreddit
	ret+='\">';
	ret+= '/r/programmingcirclejerk';//name of subreddit
	ret+='</a>';
	ret+='</div></div>';
	ret+='</div>'
	ret+='</div>';
	tableBody.innerHTML =  tableBody.innerHTML + ret;
	return;
}

/*

	Format with second row as more distinct columns
	ret+='<div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+=';\">';
	ret+='<div class=\"col-sm-4\">'
	ret+='Title link goes here';
	ret+='</div><div class=\"col-sm-push-4\">';
	ret+='Shortened url';
	ret+='</div></div><div class = \"row\" style=\"background-color: ';
	ret+= row_color_style;
	ret+= ';\"><div class=\"col-sm-4\">';
	ret+='by someone X hours ago';
	ret+='</div><div class=\"col-sm-push-4\">';
	ret+='Some subreddit'
	ret+='</div></div>';

*/