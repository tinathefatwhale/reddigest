<?php
// session_destroy();
// echo json_encode(array('status' => "DENY" ));

session_start();

if($_SESSION["uid"] !== ""){
	$uid = intval($_SESSION["uid"]);
	$uname = $_SESSION["username"];

	$sn = 'localhost';
	$u = 'redditviewer';
	$p = 'reddit4Ever';
	$db = 'redditviewer';
	$conn = new mysqli($sn, $u, $p, $db);

	$sql = "SELECT url FROM links WHERE userID='{$uid}'";

	$res = $conn->query($sql);
	
	$ret = array();
	while($row = $res->fetch_assoc()){
		$link = $row["url"];
		array_push($ret, $link);
	}
	echo json_encode(array("links" => $ret));

}
else echo json_encode("error!");
?>
