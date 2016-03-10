<?php
	if(isset($_POST["username"])){
		//TODO: make this query the database and if username isn't found return true else false
		echo json_encode(array("name" => $_POST["username"]));
	}
	else echo json_encode(array("name" => "test"));
?>