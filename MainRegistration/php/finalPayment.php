<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";
    $ragamID = $_POST['ragamID'];
    $mr = $_POST['mr'];
    $w1 = $_POST['w1'];
    $w2 = $_POST['w2'];
    $w3 = $_POST['w3'];
    $w4 = $_POST['w4'];
    $w5 = $_POST['w5'];
    $w7 = $_POST['w7'];
    $e26 = $_POST['e26'];
    $e27 = $_POST['e27'];
    $e28 = $_POST['e28'];
    $e29 = $_POST['e29'];
    $e30 = $_POST['e30'];
    $e31 = $_POST['e31'];
    $e32 = $_POST['e32'];
    $c1 = $_POST['c1'];
    $c2 = $_POST['c2'];
    $c3 = $_POST['c3'];
    $c4 = $_POST['c4'];
    $c5 = $_POST['c5'];
    $c6 = $_POST['c6'];
    $c7 = $_POST['c7'];
    $amt = $_POST['amt'];

    //mysqli_report(MYSQLI_REPORT_ALL);

    $flag = 0;

    if($mr == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($w1 == 1){
        $stmt = $connection->prepare("INSERT INTO `WorkshopRegistration` VALUES ('WID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows <0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($w2 == 1){
        $stmt = $connection->prepare("INSERT INTO `WorkshopRegistration` VALUES ('WID02',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($w3 == 1){
        $stmt = $connection->prepare("INSERT INTO `WorkshopRegistration` VALUES ('WID03',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($w4 == 1){
        $stmt = $connection->prepare("INSERT INTO `WorkshopRegistration` VALUES ('WID04',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($w5 == 1){
        $stmt = $connection->prepare("INSERT INTO `WorkshopRegistration` VALUES ('WID05',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($w7 == 1){
        $stmt = $connection->prepare("INSERT INTO `WorkshopRegistration` VALUES ('WID07',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($e26 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID026',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($e27 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID027',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($e28 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID028',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($e29 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID029',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($e30 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID030',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($e31 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID031',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($e32 == 1){
        $stmt = $connection->prepare("INSERT INTO `EventsRegistration` VALUES ('EID032',?,-1,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($c1 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($c2 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($c3 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID02',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($c4 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID03',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($c5 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID02',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }
    if($c6 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID02',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID03',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();
    }

    if($c7 == 1){
        $stmt = $connection->prepare("UPDATE `Participants` SET `MainRegistration` = 1 WHERE `RagamID` LIKE ?");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `MerchandiseRegistration` VALUES (NULL,'MID01',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

        $stmt = $connection->prepare("INSERT INTO `ProshowRegistration` VALUES (NULL,'PID04',?,0)");
        $stmt->bind_param("s",$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            $flag = 1;
        }
        $stmt->close();

    }
    if($flag == 0){
        $stmt = $connection->prepare("UPDATE `Participants` SET `AmountPaid` = `AmountPaid` + ? WHERE `RagamID` LIKE ?");
        $stmt->bind_param("is",$amt,$ragamID);
        $stmt->execute();
        if($stmt->affected_rows < 0){
            echo "ERROR";
        }
        else{
            echo "SUCCESS";
        }
        $stmt->close();
    }
    else {
        echo "ERROR";
    }


    $connection->close();