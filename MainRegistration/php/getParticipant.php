<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $ragamID = $_POST['ragamID'];
    if($email==""){
    	$email = "j";
    }
    if($ragamID==""){
    	$ragamID = "j";
    }
    if($phone==""){
    	$phone = "j";
    }
    

    //mysqli_report(MYSQLI_REPORT_ALL);


    $stmt = $connection->prepare("SELECT `RagamID`,`Name`,`College`,`Email`,`PhoneNumber` FROM `Participants` WHERE `RagamID` LIKE ? OR `Email` LIKE ? OR `PhoneNumber` LIKE ?");
    $stmt->bind_param("sss",$ragamID,$email,$phone);
    $stmt->execute();
    $stmt->bind_result($ragamID,$name,$college,$email,$phone);

    if($stmt->fetch()){
        $res = array("ragamID" => $ragamID, "name" => $name, "college" => $college, "email" => $email, "phone" => $phone);
        echo json_encode($res);
    }
    else{
        echo "NOT FOUND";
    }
    $stmt->close();
    $connection->close();