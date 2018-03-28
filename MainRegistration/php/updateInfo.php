<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $clg = $_POST['college'];
    $ragamID = $_POST['ragamID'];
    $newID = $_POST['newID'];

    //mysqli_report(MYSQLI_REPORT_ALL);
    if($ragamID != $newID) {
        $stmt = $connection->prepare("SELECT `RagamID` FROM `Participants` WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s", $newID);
        $stmt->execute();
        $stmt->bind_result($t);

        if ($stmt->fetch()) {
            echo "PRESENT";
            exit();
        }
        $stmt->close();
    }

    $flag = 0;
    $stmt = $connection->prepare("UPDATE `Participants` SET `RagamID` = ?,`Name` = ?, `PhoneNumber` = ?, `College` = ? WHERE `RagamID` LIKE ?");
    $stmt->bind_param("sssss",$newID,$name,$phone,$clg,$ragamID);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        $flag=1;
    }
    $stmt->close();


    $stmt = $connection->prepare("UPDATE `EventsRegistration` SET `ParticipantID` = ? WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("ss",$newID,$ragamID);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        $flag=1;
    }
    $stmt->close();


    $stmt = $connection->prepare("UPDATE `MerchandiseRegistration` SET `ParticipantID` = ? WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("ss",$newID,$ragamID);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        $flag=1;
    }
    $stmt->close();


    $stmt = $connection->prepare("UPDATE `ProshowRegistration` SET `ParticipantID` = ? WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("ss",$newID,$ragamID);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        $flag=1;
    }
    $stmt->close();


    $stmt = $connection->prepare("UPDATE `WorkshopRegistration` SET `ParticipantID` = ? WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("ss",$newID,$ragamID);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        $flag=1;
    }
    
    $stmt = $connection->prepare("UPDATE `HospitalityRegistration` SET `RagamID` = ? WHERE `RagamID` LIKE ?");
    $stmt->bind_param("ss",$newID,$ragamID);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        $flag=1;
    }

    if($flag == 0){
        echo "SUCCESS";
    }
    else{
        echo "ERROR";
    }
    $stmt->close();
    $connection->close();