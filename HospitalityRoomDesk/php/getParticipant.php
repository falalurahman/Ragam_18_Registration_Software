<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $email = $_POST['searchKey'];
    $phone = $_POST['searchKey'];
    $ragamID = $_POST['searchKey'];

    //mysqli_report(MYSQLI_REPORT_ALL);

    $res = array("ragamID" => "",
        "name" => "",
        "college" => "",
        "email" => "",
        "phone" => "",
        "mainRegistration" => 0,
        "workshopRegistration" => 0,
        "hospiRegistration" => 0,
        "roomGiven" => 0,
        "refundGiven" => 0);


    $stmt = $connection->prepare("SELECT `RagamID`,`Name`,`College`,`Email`,`PhoneNumber`, `MainRegistration`, `HospitalityRegistration` FROM `Participants` WHERE `RagamID` LIKE ? OR `Email` LIKE ? OR `PhoneNumber` LIKE ?");
    $stmt->bind_param("sss",$ragamID,$email,$phone);
    $stmt->execute();
    $stmt->bind_result($ragamID,$name,$college,$email,$phone,$mr,$hr);

    if($stmt->fetch()){
        $res["ragamID"] = $ragamID;
        $res["name"] = $name;
        $res["college"] = $college;
        $res["email"] = $email;
        $res["phone"] = $phone;
        $res["mainRegistration"] = $mr;
        $res["hospiRegistration"] = $hr;
    }
    else{
        echo "NOT FOUND";
        exit();
    }
    $stmt->close();

    $stmt = $connection->prepare("SELECT `WorkshopID` FROM `WorkshopRegistration` WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("s",$ragamID);
    $stmt->execute();
    $stmt->bind_result($workshopID);

    if($stmt->fetch()){
        $res["workshopRegistration"]=1;
    }
    $stmt->close();

    $stmt = $connection->prepare("SELECT `RefundGiven` FROM `HospitalityRegistration` WHERE `RagamID` LIKE ? ");
    $stmt->bind_param("s",$ragamID);
    $stmt->execute();
    $stmt->bind_result($refundGiven);

    if($stmt->fetch()){
        $res["roomGiven"] = 1;
        $res["refundGiven"] = $refundGiven;
    }
    else{
        $res["roomGiven"] = 0;
    }
    $stmt->close();

    echo json_encode($res);
    $connection->close();