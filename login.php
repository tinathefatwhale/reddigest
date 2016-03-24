
<?php

session_start();
//(backend) login for reddigest
	if(!empty($_POST["uname"])){
		
		// $servername = '192.185.225.118';
		$sn = 'localhost';
		// $username = 'huntermi_rddgst';
		$u = 'redditviewer';
		// $password = 'testaroo123';
		$p = 'reddit4Ever';
		
		$db = 'redditviewer';
		$conn = new mysqli($sn, $u, $p, $db);
	
		$username = $_POST["uname"];
		$password = $_POST["pword"];
		//TODO: Change this to 2 queries
		$qu = "SELECT * FROM users WHERE username = '{$username}' AND password = '{$password}'";
		$res = $conn->query($qu);
                if($res->num_rows == 1) {
                   $_SESSION["username"] = $username;
                   $_SESSION["uid"] = $conn->insert_id;
                   echo json_encode(array("status" => "ACCEPT"));
                }
		/*if($res->num_rows > 0){
			$row = $res->fetch_assoc();
			$uid = intval($row["ID"]);
			$_SESSION["uid"] = $uid;

			$sql = "SELECT * FROM links WHERE userID = '{$uid}'";

			$res = $conn->query($sql);
			
			$ret = array();
			if($res->num_rows > 0){
				//$row = $res->fetch_assoc();
				// echo(json_encode(array("status" => "ACCEPT", "user" => $u, "pass" => $p, "data" => $row)));
				while($row = $res->fetch_assoc()){
					//$ret[$row["ID"]] = $row["url"];
					array_push($ret, $row["url"]);
				}

				echo(json_encode(array("status" => "ACCEPT", "links" => json_encode($ret), "uid" => $uid)));
			}
			else echo(json_encode(array("status" => "DENY")));	
		}*/		
		else {
                   echo(json_encode(array("status" => "DENY")));
                }
		
	}
	else echo(json_encode(array("status" => "DENY")));
?>
