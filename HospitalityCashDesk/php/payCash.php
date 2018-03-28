<?php
    require 'checkLoginStatus.php';
    include 'connectDatabase.php';

    //mysqli_report(MYSQLI_REPORT_ALL);

    $rid = $_POST['ragamID'];
    $amt = $_POST['amount'];

    $stmt = $connection->prepare("UPDATE `Participants` SET `HospitalityRegistration` = 1, `AmountPaid` = `AmountPaid` + ? WHERE `RagamID` LIKE ?");
    $stmt->bind_param("is",$amt,$rid);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        echo "ERROR";
    }
    else{
        echo "SUCCESS";
    }

    $stmt->close();
    $connection->close();
