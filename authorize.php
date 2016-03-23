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
		$u = 'redditviewer';
		// $password = 'testaroo123';
		$p = 'reddit4Ever';
		$db = 'redditviewer';
		$conn = new mysqli($sn, $u, $p, $db);
		if ($conn->connect_error) {
                       die('Connect Error (' . $conn->connect_errno . ') '
                            .$conn->connect_error);
                }
                
		$sql = "INSERT INTO users (username,password,firstname,lastname,email,state) VALUES ('{$username}','{$password}','{$fname}','{$lname}','{$email}','{$state}')";

		$query = $conn->query($sql);
                if(!$query) {
                  echo json_encode("error!");  
                }
                $uid = $conn->insert_id;
               
	        $_SESSION["uid"] = $uid;
                $_SESSION["state"] = $state;
		$_SESSION["username"] = $username;

		$url = 'https://www.reddit.com/api/v1/authorize?client_id=VJ-N3jbAJ1fjsQ&response_type=code&'.$state.'&redirect_uri=http://www.johnhuntermiller.com/reddigest&duration=permanent&scope=history';
		echo json_encode(array("uid"=>$uid,"state"=>$state,"username"=>$username,"url"=>$url,));
                
	
        }
	else {
             echo json_encode(array("error"=>"error",));
        }
?>
