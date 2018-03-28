<?php
    require 'checkLoginStatus.php';
    include 'connectDatabase.php';

//mysqli_report(MYSQLI_REPORT_ALL);

    $rid = $_POST['ragamID'];

    $stmt = $connection->prepare("UPDATE `Participants` SET `AmountPaid` = `AmountPaid` - 100 WHERE `RagamID` LIKE ?");
    $stmt->bind_param("s",$rid);
    $stmt->execute();

    if($stmt->affected_rows < 0){
        echo "ERROR";
    }
    else{
        $stmt1 = $connection->prepare("UPDATE `HospitalityRegistration` SET `RefundGiven` = 1 WHERE `RagamID` LIKE ?");
        $stmt1->bind_param("s",$rid);
        $stmt1->execute();
        if($stmt1->affected_rows != 1){
            echo "ERROR";
        }
        else {
            echo "SUCCESS";
        }
        $stmt1->close();
    }

    $stmt->close();
    $connection->close();
