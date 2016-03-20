<?php
	if($_SERVER["REQUEST_METHOD"] === "POST"){
		session_start();
		$username = htmlspecialchars($_POST["username"]);
		$fname = htmlspecialchars($_POST["fname"]);
		$lname = htmlspecialchars($_POST["lname"]);
		$email = htmlspecialchars($_POST["email"]);
		$password = htmlspecialchars($_POST["password"]);

		$state = crypt($username,'a!d@l');
		$sn = 'localhost';
		// $username = 'huntermi_rddgst';
		$u = 'root';
		// $password = 'testaroo123';
		$p = 'root';
		$db = 'huntermi_reddigest';
		$conn = new mysqli($sn, $u, $p, $db);

		$sql = "INSERT INTO users (username,password,state,firstname,lastname) VALUES ('{$username}','{$password}','{$state}','{$fname}','{$lname}')";

		$conn->query($sql);
		$sql = "SELECT ID FROM users WHERE username = '{username}'";

		$res = $conn->query($sql);
		$uid = $res->fetch_assoc()["ID"];

		$_SESSION["userid"] = $uid;
		$_SESSION["state"] = $state;
		$_SESSION["username"] = $username;

		//TOD return this url to get user to allow app
		$url = 'https://www.reddit.com/api/v1/authorize?client_id=VJ-N3jbAJ1fjsQ&response_type=code&'.$state.'&redirect_uri=http://www.johnhuntermiller.com/reddigest&duration=permanent&scope=history';
		echo json_encode(array("uid"=>$uid,"state"=>$state,"username"=>$username,"url"=>$url,));
	}
	else echo json_encode(array("error"=>"error",));
?>