<?php
    require 'checkLoginStatus.php';
    include 'connectDatabase.php';

    $groupNumber = $_GET['groupNumber'];

    //mysqli_report(MYSQLI_REPORT_ALL);
?>

<html>
    <head>
        <style >
            td{
                text-align: center;
                font-size: 20px;
            }

            table {border-collapse:collapse; table-layout:fixed; width:310px;}
            table td {border:solid 1px #fab; word-wrap:break-word;}
        </style>


        <script type="text/javascript" src="../js/jquery-3.2.1.min.js"></script>

    </head>
    <header>
        <h1 align="center">
            <img src="images/ragamlogo.png" height="100" width="100">
            <span style="display:inline-block; width: 15px;"></span>
            Hospitality Registration
            <span style="display:inline-block; width: 20px;"></span>
            <img src="images/nitclogo.png" height="100" width="100">
        </h1>
    </header>
    <body>
        <b>Group Number: </b><?php echo $groupNumber;?>
        <br><br>
        <table style='border:5px'>
            <tr>
                <td style='width:150px'><b> Name </b></td>
                <td style='width:105px'><b> Phone </b></td>
                <td style='width:200px'><b> College </b></td>
                <td style='width:122px;'><b> Room Name </b></td>
                <td style='width:80px;'><b> Bed No </b></td>
            </tr>
            <?php
                $stmt = $connection->prepare("SELECT `Participants`.`RagamID` , `Name`, `PhoneNumber`, `College` FROM `HospitalityRegistration` , `Participants` WHERE `GroupNumber` LIKE ? AND `Participants`.`RagamID` = `HospitalityRegistration`.`RagamID`");
                $stmt->bind_param("s",$groupNumber);
                $stmt->execute();
                $stmt->bind_result($rid,$name,$phone,$clg);
                while($stmt->fetch()){
                    echo '<tr>';
                    echo "<td style='width:150px'> $name </td>
                            <td style='width:105px'> $phone </td>
                            <td style='width:200px'> $clg </td>
                            <td style='width:122px;'></td>
                            <td style='width:80px;'></td>
                        </tr>";
                }


            ?>
        </table>
        <div style="height: 200px;">

        </div>
        <footer align="center">
            Room Allotted
            <span style="display:inline-block; width: 250px;"></span>
                Refund Given</b>
        </footer>
    </body>
    <script type="text/javascript">
        $(document).ready(function () {
            window.print();
        });
    </script>
</html>
<?php

    $stmt->close();
    $connection->close();

?>