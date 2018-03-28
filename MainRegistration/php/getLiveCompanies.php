<?php
    require 'checkLoginStatus.php';
    include "connectDatabase.php";


    echo '<ul class="collapsible" data-collapsible="accordion">';
    echo "<div class='collapsible-header' id='MainEventRegistration' onclick='changeSelection(\"MainEventRegistration\")' ><b>Main Event Registration</b></div>";
    echo '</ul>';
    //echo $curTime;
    $connection->close();