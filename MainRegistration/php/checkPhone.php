<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $phone = $_POST['phone'];

    //mysqli_report(MYSQLI_REPORT_ALL);


    $stmt = $connection->prepare("SELECT `RagamID` FROM `Participants` WHERE `PhoneNumber` LIKE ?");
    $stmt->bind_param("s",$phone);
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