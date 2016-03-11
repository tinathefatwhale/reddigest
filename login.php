
<?php

session_start();
//(backend) login for reddigest
	if(!empty($_POST["uname"])){
		
		// $servername = '192.185.225.118';
		$servername = 'localhost';
		// $username = 'huntermi_rddgst';
		$username = 'root';
		// $password = 'testaroo123';
		$password = 'root';
		
		$db = 'huntermi_reddigest';
		$conn = new mysqli($servername, $username, $password, $db);
	
		$u = $_POST["uname"];
		$p = $_POST["pword"];

		$sql = "SELECT * FROM links JOIN users ON users.ID=Links.userID WHERE users.username='{$u}' AND users.password='{$p}'";

		$res = $conn->query($sql);
		
		$ret = array();
		if($res->num_rows > 0){
			$row = $res->fetch_assoc();
			// echo(json_encode(array("status" => "ACCEPT", "user" => $u, "pass" => $p, "data" => $row)));
			while($row = $res->fetch_assoc()){
				$ret[$row["ID"]] = $row["url"];
				//array_push($ret, $row["url"]);
				$_SESSION["userid"] = $row["userID"];
			}

			echo(json_encode(array("status" => "ACCEPT", "links" => json_encode($ret), "userid" => $_SESSION["userid"])));
		}
		else echo(json_encode(array("status" => "DENY")));
		
	}
	else echo(json_encode(array("status" => "DENY")));
?>