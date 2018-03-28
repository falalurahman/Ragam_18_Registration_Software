var RID = "";

$(document).ready(function () {
    $("#payButton").hide();
    $("#refundButton").hide();
});


function getParticipant(){
    var email = $("#email").val();
    var phone = $("#phone").val();
    var ragamID = $("#ragamID").val();

    $("#searchButton").hide();
    $("#payButton").hide();
    $("#refundButton").hide();
    if(ragamID == "" && phone == "" && email == ""){
        alert("Enter Data");
        return;
    }
    $.post("php/getParticipant.php",
        {
            email : email,
            phone : phone,
            ragamID : ragamID
        },
        function (data,status) {
            console.log(data);
            if(data == "NOT FOUND"){
                alert("Participant Not Found");
                $("#email").val("");
                $("#phone").val("");
                $("#ragamID").val("");
            }
            else{
                var res = JSON.parse(data);
                $("#ragamID").val(res.ragamID);
                $("#studentName").val(res.name);
                $("#email").val(res.email);
                $("#phone").val(res.phone);
                $("#college").val(res.college);
                if(res.mainRegistration == 0) {
                    $("#mainRegistration").val("Not Paid");
                }
                else{
                    $("#mainRegistration").val("Paid");
                }
                if(res.workshopRegistration == 0) {
                    $("#workshopRegistration").val("Not Paid");
                }
                else{
                    $("#workshopRegistration").val("Paid");
                }
                if(res.kalolsavamRegistration == 0) {
                    $("#kalolsavamRegistration").val("Not Paid");
                }
                else{
                    $("#kalolsavamRegistration").val("Paid");
                }
                if(res.hospiRegistration == 0) {
                    $("#hospitalityRegistration").val("Not Paid");
                }
                else{
                    $("#hospitalityRegistration").val("Paid");
                }

                RID = res.ragamID;
                $("#searchButton").hide();
                $("#ragamID").attr('readonly', true);
                $("#email").attr('readonly', true);
                $("#phone").attr('readonly', true);
                $("#mainRegistration").attr('readonly', true);
                $("#kalolsavamRegistration").attr('readonly', true);
                $("#workshopRegistration").attr('readonly', true);
                $("#hospitalityRegistration").attr('readonly', true);
                if(res.kalolsavamRegistration == 0 && res.mainRegistration == 0 && res.workshopRegistration==0){
                    alert("Participant not eligible for hospitality");
                    return;
                }
                if((res.mainRegistration == 1 || res.workshopRegistration == 1) && res.hospiRegistration == 0 ){
                    $("#payButton").show();
                    $("#payButton").val("300");
                }
                else if(res.kalolsavamRegistration == 1 && res.hospiRegistration == 0 ) {
                    $("#payButton").show();
                    $("#payButton").val("500");
                }
                else if(res.roomGiven == 1 && res.refundGiven == 0){
                    $("#refundButton").show();
                }
                else if(res.hospiRegistration == 1 && res.roomGiven == 0){
                    alert("Money is paid.... Room not allotted");
                }
                else if(res.refundGiven == 1){
                    alert("Refund Given.....");
                }
            }
        });

}

function backToStart() {
    var str = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Ragam ID <input class="mdl-textfield__input" type="text" id="ragamID" name="ragamID" value=""> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Email <input class="mdl-textfield__input" type="text" id="email" name="email" value=""> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Name <input class="mdl-textfield__input" type="text" id="studentName" name="studentName" value="" readonly="readonly"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Phone <input class="mdl-textfield__input" type="text" id="phone" name="phone" value="" readonly="readonly"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> College <input class="mdl-textfield__input" type="text" id="college" name="college" value="" readonly="readonly"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Main Event Registration <input class="mdl-textfield__input" type="text" id="mainRegistration" name="mainRegistration" value="" readonly="readonly"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Workshop Registration <input class="mdl-textfield__input" type="text" id="workshopRegistration" value="" readonly="readonly"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Kalolsavam Registration <input class="mdl-textfield__input" type="text" id="kalolsavamRegistration" value="" readonly="readonly"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Hospitality Registration <input class="mdl-textfield__input" type="text" id="hospitalityRegistration" name="hospitalityRegistration" value="" readonly="readonly"> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="getParticipant()"   style="position: absolute; right: 200px;" id="searchButton"> Search </button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="payCash()"   style="position: absolute; right: 200px;" id="payButton"> Pay </button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="giveRefund()"   style="position: absolute; right: 200px;" id="refundButton"> Refund </button> ';
    $("#div1").html(str);
    $("#refundButton").hide();
    $("#payButton").hide();
}


function payCash(amt) {
    $("#payButton").hide();
    alert("Collect Rs " + amt);
    //console.log(mr+w1+w2+w3+w4+w5+w7+RID);

    $.post("php/payCash.php",
        {
            ragamID : RID,
            amount : amt
        },
        function (data,status) {
            console.log(data);
            if(data == "ERROR"){
                alert("Error in payment..... Contact respective person and dont proceed with further registration");
            }
            else{
                getParticipant();
            }
        });
}


function giveRefund() {

    //console.log(mr+w1+w2+w3+w4+w5+w7+RID);

    $("#refundButton").hide();

    $.post("php/payRefund.php",
        {
            ragamID : RID
        },
        function (data,status) {
            console.log(data);
            if(data == "ERROR"){
                alert("Error in refunding..... Contact respective person and dont proceed with further registration");
            }
            else{
                getParticipant();
            }
        });
}

function sendBarcode(b) {
    //alert(b);
    //alert("Scanned");
    $("#ragamID").val(b);
    getParticipant();
}

