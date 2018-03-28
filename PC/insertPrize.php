<?php
    include "connectDatabase.php";

    $eid = $_POST['eventId'];
    $prizenum = $_POST['prizenumber'];
    $teamnum = $_POST['teamnumber'];
    $prizemoney = $_POST['prizemoney'];

    $stmt = $connection->prepare("INSERT INTO `Prize` VALUES(NULL,?,?,?,?)");
    $stmt->bind_param("siii",$eid,$prizenum,$teamnum,$prizemoney);
    $stmt->execute();

    if($stmt->affected_rows <0){
        echo "ERROR";
    }
    else{
        echo "SUCCESS";
    }

    $connection->close();

