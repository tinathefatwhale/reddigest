var row_color_flag = true;

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
	ret+= ' @ ';
	ret+= 'Some Subreddit';
	ret+='</div></div>';
	
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