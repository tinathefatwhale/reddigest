<?php
// session_destroy();
// echo json_encode(array('status' => "DENY" ));

session_start();
if($_SESSION["uid"] !== ""){
	$uid = intval($_SESSION["uid"]);
	$uname = $_SESSION["uname"];

	$sn = 'dias12.cs.trinity.edu';
	// $u = 'huntermi_rddgst';
	$u = 'redditviewer';
	// $p = 'testaroo123';
	$p = 'reddit4Ever';
	$db = 'redditviewer';
	$conn = new mysqli($sn, $u, $p, $db);

	$sql = "SELECT * FROM links WHERE userID='{$uid}'";

	$res = $conn->query($sql);
	
	$ret = array();
	while($row = $res->fetch_assoc()){
		$link = $row["url"];
		array_push($ret, $link);
	}
	$arr = json_encode($ret);
	echo json_encode( array('status' =>"ACCEPT", 'links' => $arr, 'uid'=>$uid));

}
else echo json_encode(array('status' => "DENY" ));

?>
