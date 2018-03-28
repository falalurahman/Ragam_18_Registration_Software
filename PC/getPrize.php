<?php
include "connectDatabase.php";
//mysqli_report(MYSQLI_REPORT_ALL);


    $res = array();
    $stmt = $connection->prepare("SELECT B.EventID, A.PrizeNumber, A.TeamNumber, C.Name, A.PrizeMoney FROM Prize A, EventsRegistration B, Participants C WHERE A.EventID=B.EventID AND A.TeamNumber=B.TeamNumber AND C.RagamID=B.ParticipantID");
    $stmt->execute();
    $stmt->bind_result($event_id,$prize_number,$team_number,$name,$pmoney);

    $final_result = array();
    while($stmt->fetch()){
        if(array_key_exists($event_id.$team_number, $final_result)){
            array_push($final_result[$event_id.$team_number]["Participants"],$name);
        }else{
            $final_result[$event_id.$team_number] = array(
                "EventName" => $event_id, "PrizeNumber" => $prize_number, "TeamNumber" => $team_number, "PrizeMoney" => $pmoney, "Participants" => array($name));
        }
    }

    $final_result = array_values($final_result);
    $stmt->close();
    echo json_encode($final_result);

$connection->close();


