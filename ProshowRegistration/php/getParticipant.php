<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $email = $_POST['searchKey'];
    $phone = "";
    $ragamID = $_POST['searchKey'];

    //mysqli_report(MYSQLI_REPORT_ALL);

    $res = array("ragamID" => "",
        "name" => "",
        "products" => array());


    $stmt = $connection->prepare("SELECT `RagamID`,`Name` FROM `Participants` WHERE `RagamID` LIKE ? OR `Email` LIKE ? OR `PhoneNumber` LIKE ?");
    $stmt->bind_param("sss",$ragamID,$email,$phone);
    $stmt->execute();
    $stmt->bind_result($ragamID,$name);

    if($stmt->fetch()){
        $res["ragamID"] = $ragamID;
        $res["name"] = $name;
    }
    else{
        echo "NOT FOUND";
        exit();
    }
    $stmt->close();

    $stmt = $connection->prepare("SELECT `SlNo`,`ProshowID`,`ProshowGiven` FROM `ProshowRegistration` WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("s",$ragamID);
    $stmt->execute();
    $stmt->bind_result($slno,$mid,$mgiven);

    while ($stmt->fetch()){
        $p = array("SlNo" => $slno,
            "ProshowID" => $mid,
            "ProshowGiven" => $mgiven);

        array_push($res["products"],$p);
    }
    $stmt->close();



    echo json_encode($res);
    $connection->close();