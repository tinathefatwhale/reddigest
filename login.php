
<?php
//(backend) login for reddigest
	if($_SERVER["REQUEST_METHOD"] === "POST"){
		$servername = '192.185.225.118';
		// $servername = 'localhost';
		$username = 'huntermi_rddgst';
		// $username = 'root';
		$password = 'testaroo123';
		// $password = 'root';
		
		$db = 'huntermi_reddigest';
		$conn = new mysqli($servername, $username, $password, $db);
		if(isset($_POST["uname"])){
			$u = $_POST["uname"];
			$p = $_POST["pword"];


			$sql = "SELECT * FROM Links JOIN Users ON Users.ID=Links.userID WHERE Users.username='{$u}' AND Users.password='{$p}'";
			$res = $conn->query($sql);
			$ret = "";
			if($res->num_rows > 0){
				while($row = $res->fetch_assoc()){
					$ret = $ret."<tr><td>".$row["url"]."</td><td".$row["username"]."</tr>";

				}
				echo $ret;
			}
			else echo "DENY";
		}
		else echo "DENY";
	}
	else echo "DENY";

?>