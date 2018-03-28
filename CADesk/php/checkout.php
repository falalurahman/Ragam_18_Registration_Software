<?php
    require 'checkLoginStatus.php';
    include 'connectDatabase.php';

    $ragamID = json_decode($_POST['ragamID']);
    $count = $_POST['count'];

    $caName = $ragamID[0];

    mysqli_report(MYSQLI_REPORT_ALL);

    $flag = 0;
    for($i=1;$i<$count;$i++){
        $stmt = $connection->prepare("INSERT INTO `CARegistration` VALUES(NULL,?,?)");
        $stmt->bind_param("ss",$ragamID[$i],$caName);
        $stmt->execute();

        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($flag == 0){
        echo "SUCCESS";
    }
    else{
        echo "FAILURE";
    }


    $connection->close();