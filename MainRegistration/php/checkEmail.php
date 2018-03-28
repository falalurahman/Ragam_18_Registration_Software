<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $email = $_POST['email'];

    //mysqli_report(MYSQLI_REPORT_ALL);


    $stmt = $connection->prepare("SELECT `RagamID` FROM `Participants` WHERE `Email` LIKE ?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->bind_result($ragamID);

    if($stmt->fetch()){
        echo "SUCCESS";
    }
    else{
        echo "FAILURE";
    }
    $stmt->close();
    $connection->close();