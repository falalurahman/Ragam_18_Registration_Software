<?php
    require 'checkLoginStatus.php';
    include 'connectDatabase.php';

    $res = json_decode($_POST['res']);


    $ragamID = $res->ragamID;
    //mysqli_report(MYSQLI_REPORT_ALL);

    $flag = 0;
    foreach($res->products as $row){
        if($row->MerchandiseGiven == 1) {
            $v = (int)$row->SlNo;
            $stmt = $connection->prepare("UPDATE `MerchandiseRegistration` SET `MerchandiseGiven` = 1 WHERE `ParticipantID` LIKE ? AND `SlNo` = ?");
            $stmt->bind_param("si", $ragamID,$v);
            $stmt->execute();

            if ($stmt->affected_rows < 0) {
                $flag = 1;
            }
            $stmt->close();
        }
    }
    if($flag == 0){
        echo "SUCCESS";
    }
    else{
        echo "FAILURE";
    }


    $connection->close();