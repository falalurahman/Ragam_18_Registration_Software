<?php
    session_start();
    unset($_SESSION['LoginApproved']);
    unset($_SESSION['Username']);
    unset($_SESSION['Usertype']);
    echo "<script>window.location.replace('../../Login')</script>";