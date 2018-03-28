<?php
    session_start();
    if(isset($_SESSION['LoginApproved']) && $_SESSION['LoginApproved'] == true){
        if(isset($_SESSION['Usertype'])) {
            if ($_SESSION['Usertype'] == "MR") {
                echo "<script>window.location.replace('../MainRegistration')</script>";
            }
            if ($_SESSION['Usertype'] == "HCD") {
                echo "<script>window.location.replace('../HospitalityCashDesk')</script>";
            }
            if ($_SESSION['Usertype'] == "HRD") {
                echo "<script>window.location.replace('../HospitalityRoomDesk')</script>";
            }
        }
    }
?>
<html lang="en">
<head>

    <!------------------------------------->
    <!--        Meta Information         -->
    <!------------------------------------->

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="NITC Student Registration Portal.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <title>Ragam Registration</title>

    <!------------------------------------->
    <!--        Style Information        -->
    <!------------------------------------->

    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="css/material.min.css">
    <link rel="stylesheet" href="css/style.css">

    <!------------------------------------->
    <!--          Script Files           -->
    <!------------------------------------->
    <script src="js/jquery-3.2.1.slim.min.js"></script>
    <script src="js/script.js"></script>

</head>

<body>

<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <main class="mdl-layout__content">
        <div class="page-content">

            <div class="mdl-grid mdl-grid--no-spacing">



                <div class="mdl-cell mdl-cell--4-col right_panel">
                    <form action="php/checkLogin.php" method="POST" id="loginForm">

                        <div class="heading-font">Login</div>

                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="usertype_dom">
                            <select id="usertype"  name="usertype" class="mdl-textfield__input">
                                <option value="MR">Main Registration</option>
                                <option value="HCD">Hospitality Cash Desk</option>
                                <option value="HRD">Hospitality Room Allotment Desk</option>
                                <option value="TR">Merchandise Registration</option>
                                <option value="PR">Proshow Registration</option>
                                <option value="CA">CA Desk</option>
                            </select>
                        </div>

                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" id="password_dom">
                            <input class="mdl-textfield__input" type="password" id="password" name="password">
                            <label class="mdl-textfield__label" for="password">Password</label>
                            <span class="mdl-textfield__error" id="password_error">Invalid Username Or Password</span>
                        </div>


                        <div class="mdl-form-component">
                            <input type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" name="Submit">
                        </div>
                    </form>
                </div>
                <div class="mdl-cell mdl-cell--8-col-desktop left_panel">
                    <div class="left_panel_inner">

                    </div>
                </div>

            </div>

        </div>
    </main>
</div>

<?php

if( isset($_GET['Error']) || isset($_GET['error']) )
{
    echo "<script>setUsernameError('Invalid Username / Password');</script>";
    echo "<script>setPasswordError('Invalid Username / Password');</script>";
    $fileUrl = $_SERVER['PHP_SELF'];
    echo "<script>RemoveGetParameter('".$fileUrl."');</script>";
}

if( isset($_GET['ProfileError']))
{
    echo "<script>alert('Profile has been DeActivated..... Contact the PR');</script>";
}

if( isset($_GET['AlreadyPlaced']))
{
    echo "<script>alert('You are placed.... Congrats....');</script>";
}
?>

<script src="js/material.min.js"></script>
</body>
</html>
