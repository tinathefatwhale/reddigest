<?php
	if(!empty($_POST["username"])){
		$u = $_POST["username"];
		$servername = "localhost";
		$username = "redditviewer";
		$password = "reddit4Ever";
		$db = "redditviewer";
		$conn = new mysqli($servername, $username, $password, $db);
		$sql = "SELECT username FROM users WHERE username = '{$u}'";
		$res = $conn->query($sql);
		if($res->num_rows < 1){
			echo json_encode(array('available'=> 'true', 'username'=> $u,));
		}
		else echo json_encode(array('available' =>'false', "name" => "test"));
	}
	else echo json_encode(array('available' =>'false', "name" => "test"));
?>
