<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $ragamID = $_POST['ragamID'];
    $name = $_POST['name'];
    $clg = $_POST['college'];

    //mysqli_report(MYSQLI_REPORT_ALL);

    $stmt = $connection->prepare("SELECT `RagamID` FROM `Participants` WHERE `RagamID` LIKE ?");
    $stmt->bind_param("s",$ragamID);
    $stmt->execute();
    $stmt->bind_result($t);

    if($stmt->fetch()){
        echo "PRESENT";
        exit();
    }
    $stmt->close();


    $stmt = $connection->prepare("INSERT INTO `Participants` VALUES(NULL,?,?,?,?,?,0,0,0)");
    $stmt->bind_param("sssss",$ragamID,$name,$clg,$email,$phone);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        echo "ERROR";
    }
    else{
        echo "SUCCESS";
    }
    $stmt->close();
    $connection->close();