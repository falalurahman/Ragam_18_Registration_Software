var finalResult;

$(document).ready(function () {
    count = 0;
});

function changeSelection(id) {
    //alert(id);
    if($("#"+id).val() == 0) {
        $("#" + id).css("background", "#ccff00");
        $("#" + id).val("1");
    }
    else{
        $("#"+id).css("background","white");
        $("#"+id).val("0");
    }

}

function addParticipant(){
    var searchKey = $("#searchKey").val();

    if(searchKey == ""){
        alert("Enter Data");
        return;
    }
    $.post("php/getParticipant.php",
        {
            searchKey : searchKey
        },
        function (data,status) {
            console.log(data);
            if(data == "NOT FOUND"){
                alert("Participant Not Found");
                $("#searchKey").val("");
            }
            else {
                finalResult = null;
                finalResult = data;
                var res = JSON.parse(data);

                var str = '<h4>Name: ' +res.name +'</h4>';
                $("#searchKey").val("");

                var flag = 0;
                //console.log(res.products);
                for(y in res.products) {
                    flag = 1;
                    if (res.products[y].ProshowGiven == 1) {
                        if(res.products[y].ProshowID == "PID01") {
                            str = str + "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b> Proshow Day 1 (Given)</b></div>";
                        }
                        else if(res.products[y].ProshowID == "PID02"){
                            str = str + "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b> Proshow Day 2 (Given)</b></div>";
                        }
                        else if(res.products[y].ProshowID == "PID03"){
                            str = str + "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b> Proshow Day 3 (Given)</b></div>";
                        }
                        else if(res.products[y].ProshowID == "PID04"){
                            str = str + "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b> Proshow Combo (Given)</b></div>";
                        }
                    }
                    else {

                        if(res.products[y].ProshowID == "PID01") {
                            str = str + "<div class=\'collapsible-header\' id='" + res.products[y].SlNo + "' style='background: white;' onclick='changeSelection(\"" + res.products[y].SlNo + "\")' ><b> Proshow Day 1 (Quantity : 1)</b></div>";
                        }
                        else if(res.products[y].ProshowID == "PID02"){
                            str = str + "<div class=\'collapsible-header\' id='" + res.products[y].SlNo + "' style='background: white;' onclick='changeSelection(\"" + res.products[y].SlNo + "\")' ><b> Proshow Day 2 (Quantity : 1)</b></div>";
                        }
                        else if(res.products[y].ProshowID == "PID03"){
                            str = str + "<div class=\'collapsible-header\' id='" + res.products[y].SlNo + "' style='background: white;' onclick='changeSelection(\"" + res.products[y].SlNo + "\")' ><b> Proshow Day 3 (Quantity : 1)</b></div>";
                        }
                        else if(res.products[y].ProshowID == "PID04"){
                            str = str + "<div class=\'collapsible-header\' id='" + res.products[y].SlNo + "' style='background: white;' onclick='changeSelection(\"" + res.products[y].SlNo + "\")' ><b> Proshow Combo (Quantity : 1)</b></div>";
                        }
                    }
                }
                if(flag == 1) {
                    str = str + "</br><button class='mdl-button mdl-js-button mdl-button--raised mdl-button--primary' onclick='giveProducts()'  style='position: absolute; right: 200px;' id='giveButton'> Give </button>";
                }
                $("#div2").html(str);
                for(y in res.products) {
                    if(res.products[y].ProshowGiven == 0) {
                        $("#" + res.products[y].SlNo).val("0");
                    }
                    else{
                        $("#" + res.products[y].SlNo).val("-1");
                    }
                }
            }
        });

}

function backToStart() {
    var str = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <b>RagamID/Email</b> <input class="mdl-textfield__input" type="text" id="searchKey" value=""> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="addParticipant()"   style="position: absolute; right: 200px;" id="addButton"> Add Participant </button> '
    $("#div1").html(str);
    $("#div2").html('');
    count = 0;
}


function giveProducts(){
    //console.log(finalResult);
    $("#giveButton").hide();
    var res = JSON.parse(finalResult);
    for(y in res.products) {
        flag = 1;
        if ($("#"+res.products[y].SlNo).val() == 1) {
            res.products[y].ProshowGiven = 1;
        }
        else {
            res.products[y].ProshowGiven = 0;
        }
    }
    var f = JSON.stringify(res);
    console.log(f);
    $.post("php/checkout.php",
        {
            res: f
        },
        function (data,status) {
            console.log(data);
            if(data == "SUCCESS"){
                alert("Tickets Given");
                window.location.reload();
            }
            else{
                alert("There has been a problem..... Report this to corresponding person.... Don't proceed");
            }
        });

}

function sendBarcode(b) {
    //alert(b);
    alert("Scanned");
    $("#searchKey").val(b);
    addParticipant();
}