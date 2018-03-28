<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";
    $ragamID = $_POST['ragamID'];

    //$ragamID = "RID00001";

    //mysqli_report(MYSQLI_REPORT_ALL);

    $mr = 0;
    $result = array("Name" => "EMPTY",
        "MainRegistration" => 0,
        "WID01" => 0,
        "WID02" => 0,
        "WID03" => 0,
        "WID04" => 0,
        "WID05" => 0,
        "WID06" => 0,
        "WID07" => 0,
        "EID026" => 0,
        "EID027" => 0,
        "EID028" => 0,
        "EID029" => 0,
        "EID030" => 0,
        "EID031" => 0,
        "EID032" => 0);



    $stmt = $connection->prepare("SELECT `MainRegistration`,`Name` FROM `Participants` WHERE `RagamID` LIKE ?");
    $stmt->bind_param("s",$ragamID);
    $stmt->execute();
    $stmt->bind_result($v1,$v3);

    if($stmt->fetch()){
        $result["MainRegistration"] = $v1;
        $result["Name"] = $v3;
    }
    else{
        echo "ERROR";
        $stmt->close();
        $connection->close();
        exit();
    }
    $stmt->close();

    $stmt = $connection->prepare("SELECT `WorkshopID` FROM `WorkshopRegistration` WHERE `ParticipantID` LIKE ?");
    $stmt->bind_param("s",$ragamID);
    $stmt->execute();
    $stmt->bind_result($v2);

    while($stmt->fetch()){
        $result[$v2] = 1;
    }
    $stmt->close();

    $query = "SELECT `EventID` FROM `EventsRegistration` WHERE `ParticipantID` LIKE '$ragamID' AND `EventID` IN ('EID026','EID027','EID028','EID029','EID030','EID031','EID032')";
    $res = $connection->query($query);

    while($row = $res->fetch_assoc()){
        $result[$row['EventID']]=1;
    }

    echo json_encode($result);

    $connection->close();