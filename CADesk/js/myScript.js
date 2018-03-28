var RID = new Array();
var count;

$(document).ready(function () {
    count = 0;
    $("#checkoutButton").hide();
    //alert("hii");
});

function addParticipant(){
    var searchKey = $("#searchKey").val();

    if(searchKey == ""){
        alert("Enter Data");
        return;
    }
    if(count == 0){
        var str = "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b>" + searchKey + "</b></div>";
        str = str + '</ul>';
        str = str + $("#div2").html();
        $("#div2").html(str);
        $("#checkoutButton").show();
        RID[count] = searchKey;
        count ++;
        var i;
        for(i=0;i<count;i++){
            console.log(RID);
        }
        var str = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <b>RagamID/Email</b> <input class="mdl-textfield__input" type="text" id="searchKey" value=""> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="addParticipant()"   style="position: absolute; right: 200px;" id="addButton"> Add Participant </button> ';
        $("#div1").html(str);
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
                var res = JSON.parse(data);

                if(res.caName != ""){
                    alert("The participant has already allotted to " + res.caName);
                    return;
                }
                if(res.mainRegistration == 1 || res.workshopRegistration == 1 || res.kalolsavamRegistration == 1){
                    var i;
                    $("#searchKey").val("");
                    for(i=0;i<count;i++){
                        if(RID[i] == res.ragamID){
                            alert("Participant already added");
                            return;
                        }
                    }

                    var str = "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b>" + res.ragamID + "-" + res.name + "</b></div>";
                    str = str + '</ul>';
                    str = str + $("#div2").html();
                    $("#div2").html(str);
                    $("#checkoutButton").show();

                    RID[count] = res.ragamID;
                    count ++;
                    var i;
                    for(i=0;i<count;i++){
                        console.log(RID);
                    }
                }
                else{
                    alert("Participant has not registered for RAGAM");
                    return;
                }
            }
        });

}

function backToStart() {
    var str = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> <b>CA Name</b> <input class="mdl-textfield__input" type="text" id="searchKey" value=""> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="addParticipant()"   style="position: absolute; right: 200px;" id="addButton"> Add Participant </button> '
    $("#div1").html(str);
    $("#div2").html('<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="checkout()"   style="position: absolute; right: 200px;" id="checkoutButton"> Check Out </button>');
    $("#checkoutButton").hide();
    count = 0;
}


function checkout(){
    if(count == 1){
        alert("There is not participant under the CA");
        return;
    }
    var ragamID = JSON.stringify(RID);
    $("#checkoutButton").hide();
    $.post("php/checkout.php",
        {
            ragamID : ragamID,
            count : count
        },
        function (data,status) {
            console.log(data);
            if(data == "SUCCESS"){
                alert("Completed");
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