<?php
session_start();

if( isset($_SESSION['LoginApproved']) == false || empty($_SESSION['LoginApproved'] || $_SESSION['LoginApproved'] == false))
{

    echo "<script>window.location.replace('../Login/index.php')</script>";
    exit();

}
else{
    if(!isset($_SESSION['Usertype'])){
        unset($_SESSION['LoginApproved']);
        echo "<script>window.location.replace('../Login/index.php')</script>";
        exit();
    }
    else if($_SESSION['Usertype'] != "MR"){
        unset($_SESSION['LoginApproved']);
        unset($_SESSION['Usertype']);
        echo "<script>window.location.replace('../Login/index.php')</script>";
        exit();
    }
}
