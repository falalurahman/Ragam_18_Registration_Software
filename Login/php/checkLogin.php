<?php

session_start();

/******************************************************/
/*                                                    */
/*                 Get Login Details                  */
/*                                                    */
/******************************************************/
$password = $_POST['password'];
$usertype = $_POST['usertype'];
//echo $password.$usertype;
if($usertype == "MR") {
    if ($password != "Ragam2k18") {
        echo "<script>window.location.replace('../../Login/index.php?Error')</script>";
        exit();
    }

    $_SESSION['LoginApproved'] = true;
    $_SESSION['Usertype'] = "MR";


    echo "<script>window.location.replace('../../MainRegistration/index.php')</script>";

}

else if($usertype == "HCD") {


    if ($password != "Ragam2k18") {
        echo "<script>window.location.replace('../../Login/index.php?Error')</script>";
        exit();
    }

    $_SESSION['LoginApproved'] = true;
    $_SESSION['Usertype'] = "HCD";


    echo "<script>window.location.replace('../../HospitalityCashDesk/index.php')</script>";

}
else if($usertype == "HRD") {


    if ($password != "Ragam2k18") {
        echo "<script>window.location.replace('../../Login/index.php?Error')</script>";
        exit();
    }

    $_SESSION['LoginApproved'] = true;
    $_SESSION['Usertype'] = "HRD";

    echo "<script>window.location.replace('../../HospitalityRoomDesk/index.php')</script>";

}

else if($usertype == "TR") {


    if ($password != "Ragam2k18") {
        echo "<script>window.location.replace('../../Login/index.php?Error')</script>";
        exit();
    }

    $_SESSION['LoginApproved'] = true;
    $_SESSION['Usertype'] = "TR";

    echo "<script>window.location.replace('../../MerchandiseRegistration/index.php')</script>";

}

else if($usertype == "PR") {


    if ($password != "Ragam2k18") {
        echo "<script>window.location.replace('../../Login/index.php?Error')</script>";
        exit();
    }

    $_SESSION['LoginApproved'] = true;
    $_SESSION['Usertype'] = "PR";

    echo "<script>window.location.replace('../../ProshowRegistration/index.php')</script>";

}

else if($usertype == "CA") {


    if ($password != "Ragam2k18") {
        echo "<script>window.location.replace('../../Login/index.php?Error')</script>";
        exit();
    }

    $_SESSION['LoginApproved'] = true;
    $_SESSION['Usertype'] = "CA";

    echo "<script>window.location.replace('../../CADesk/index.php')</script>";

}

