<?php

    if($_SERVER["REQUEST_METHOD"] === "POST"){
       session_start();
       $url = ($_POST["link"]);
       $uid = $_SESSION["uid"];
       $sql = "INSERT INTO links (url,userID) VALUES ('{$url}','{$uid}')";
       echo json_encode($url);
       $sn = 'localhost';
       $u = 'redditviewer';
       $p = 'reddit4Ever';
       $db = 'redditviewer';
    
       $conn = new mysqli($sn, $u, $p, $db);
       $conn->query($sql);
        
    }
    else {
      echo json_encode("error!");
    }
?>
