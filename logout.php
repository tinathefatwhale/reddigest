<?php
	session_start();
	$_SESSION["uid"] = "";
	echo json_encode(array("test"=>"testaroo"));
?>