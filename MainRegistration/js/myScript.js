var RID = "";
var barcodeinp = "";

$(document).ready(function () {
    $("#nextButton").hide();
    $("#updateButton").hide();
    barcodeinp = "#ragamID";
});



function changeSelection(id) {
    var amt = 0;
    var tmoney;
    switch (id){
        case "MainEventRegistration":
            amt = 350;
            break;
        case "WID01":
            amt = 700;
            break;
        case "WID02":
            amt = 600;
            break;
        case "WID03":
            amt = 250;
            break;
        case "WID04":
            amt = 1200;
            break;
        case "WID05":
            amt = 1200;
            break;
        case "WID07":
            amt = 800;
            break;
        case "EID026":
            amt = 100;
            break;
        case "EID027":
            amt = 100;
            break;
        case "EID028":
            amt = 100;
            break;
        case "EID029":
            amt = 100;
            break;
        case "EID030":
            amt = 100;
            break;
        case "EID031":
            amt = 100;
            break;
        case "EID032":
            amt = 100;
            break;
        case "C01":
            amt = 500;
            break;
        case "C02":
            amt = 1400;
            break;
        case "C03":
            amt = 900;
            break;
        case "C04":
            amt = 1200;
            break;
        case "C05":
            amt = 1750;
            break;
        case "C06":
            amt = 1500;
            break;
        case "C07":
            amt = 2300;
            break;
    }
    if($("#"+id).val() == 0) {
        $("#" + id).css("background", "#ccff00");
        $("#" + id).val("1");
        tmoney = parseInt($("#totalMoney").val());
        tmoney = tmoney + amt;
        $("#totalMoney").val(tmoney);
    }
    else{
        $("#"+id).css("background","white");
        $("#"+id).val("0");
        tmoney = parseInt($("#totalMoney").val());
        tmoney = tmoney - amt;
        $("#totalMoney").val(tmoney);
    }

}

function getParticipant(){
	$("#searchButton").hide();
    var email = $("#email").val();
    var ragamID = $("#ragamID").val();
    var phone = "";
    //alert(phone);
    //alert(email);
    //alert(ragamID);
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
            //console.log(data);
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
                RID = res.ragamID;
                $("#searchButton").hide();
                $("#nextButton").show();
                $("#ragamID").attr('readonly', true);
                $("#email").attr('readonly', true);
            }
        });

}


function getEventsList() {
    $("#nextButton").hide();
    $.post("php/getEventsList.php",
        {
            ragamID : RID
        },
        function (data,status) {
            //console.log(data);
            if(data == "ERROR"){
                alert("Error.... Please report");
                $("#nextButton").show();
            }
            else{
                var res = JSON.parse(data);
                var str = "";
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'MainEventRegistration\' onclick=\'changeSelection(\"MainEventRegistration\")\' ><b>Main Event Registration</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'MainEventRegistration\' style='background: #A9A9A9;' ><b>Main Event Registration</b></div>";
                    str = str + '</ul>';
                }
                if(res.WID01 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID01\' onclick=\'changeSelection(\"WID01\")\' ><b>Logophilia Vocabulary Workshop</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID01\' style='background: #A9A9A9;' ><b>Logophilia Vocabulary Workshop</b></div>";
                    str = str + '</ul>';
                }
                if(res.WID02 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID02\' onclick=\'changeSelection(\"WID02\")\' ><b>Photography Workshop</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID02\' style='background: #A9A9A9;' ><b>Photography Workshop</b></div>";
                    str = str + '</ul>';
                }
                if(res.WID04 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID04\' onclick=\'changeSelection(\"WID04\")\' ><b>Social Entrepreneurship Workshop</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID04\' style='background: #A9A9A9;' ><b>Social Entrepreneurship Workshop</b></div>";
                    str = str + '</ul>';
                }
                if(res.WID07 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID07\' onclick=\'changeSelection(\"WID07\")\' ><b>Film Workshop</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'WID07\' style='background: #A9A9A9;' ><b>Film Workshop</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID026 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID026\' onclick=\'changeSelection(\"EID026\")\' ><b>Classical Dance</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID026\' style='background: #A9A9A9;' ><b>Classical Dance</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID027 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID027\' onclick=\'changeSelection(\"EID027\")\' ><b>Classical Music Solo</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID027\' style='background: #A9A9A9;' ><b>Classical Music Solo</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID028 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID028\' onclick=\'changeSelection(\"EID028\")\' ><b>Mimicry</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID028\' style='background: #A9A9A9;' ><b>Mimicry</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID029 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID029\' onclick=\'changeSelection(\"EID029\")\' ><b>Monoact</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID029\' style='background: #A9A9A9;' ><b>Monoact</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID030 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID030\' onclick=\'changeSelection(\"EID030\")\' ><b>Kolukali</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID030\' style='background: #A9A9A9;' ><b>Kolukali</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID031 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID031\' onclick=\'changeSelection(\"EID031\")\' ><b>Daffumuttu</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID031\' style='background: #A9A9A9;' ><b>Daffumuttu</b></div>";
                    str = str + '</ul>';
                }
                if(res.EID032 == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID032\' onclick=\'changeSelection(\"EID032\")\' ><b>Mappilappattu</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'EID032\' style='background: #A9A9A9;' ><b>Mappilappattu</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C01\' onclick=\'changeSelection(\"C01\")\' ><b>Main Event Registration + Ragam TShirt</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C01\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C02\' onclick=\'changeSelection(\"C02\")\' ><b>Main Event Registration + Ragam TShirt + Proshow Day 1</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C02\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt + Proshow Day 1</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C03\' onclick=\'changeSelection(\"C03\")\' ><b>Main Event Registration + Ragam TShirt + Proshow Day 2</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C03\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt + Proshow Day 2</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C04\' onclick=\'changeSelection(\"C04\")\' ><b>Main Event Registration + Ragam TShirt + Proshow Day 3</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C04\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt + Proshow Day 3</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C05\' onclick=\'changeSelection(\"C05\")\' ><b>Main Event Registration + Ragam TShirt + Proshow Day 1 + Proshow Day 2</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C05\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt + Proshow Day 1 + Proshow Day 2</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C06\' onclick=\'changeSelection(\"C06\")\' ><b>Main Event Registration + Ragam TShirt + Proshow Day 2 + Proshow Day 3</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C06\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt + Proshow Day 2 + Proshow Day 3</b></div>";
                    str = str + '</ul>';
                }
                if(res.MainRegistration == 0){
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C07\' onclick=\'changeSelection(\"C07\")\' ><b>Main Event Registration + Ragam TShirt + Proshow Day 1 + Proshow Day 2 + Proshow Day 3</b></div>";
                    str = str + '</ul>';
                }
                else{
                    str = str + '<ul class=\"collapsible\" data-collapsible=\"accordion\">';
                    str = str + "<div class=\'collapsible-header\' id=\'C07\' style='background: #A9A9A9;' ><b>Main Event Registration + Ragam TShirt + Proshow Day 1 + Proshow Day 2 + Proshow Day 3</b></div>";
                    str = str + '</ul>';
                }



                str = str + "<b>Total :</b> <input id=\"totalMoney\" value=\"0\" style='width: 100px' readonly='readonly'>";
                str = str + "<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--primary\" onclick=\"finalPayment()\"   style=\"position: absolute; right: 200px;\" id=\"payButton\"> Pay </button>";
                $("#div1").html(str);
                $("#MainEventRegistration").val("0");
                $("#WID01").val("0");
                $("#WID02").val("0");
                $("#WID04").val("0");
                $("#WID07").val("0");
                $("#EID026").val("0");
                $("#EID027").val("0");
                $("#EID028").val("0");
                $("#EID029").val("0");
                $("#EID030").val("0");
                $("#EID031").val("0");
                $("#EID032").val("0");
                $("#C01").val("0");
                $("#C02").val("0");
                $("#C03").val("0");
                $("#C04").val("0");
                $("#C05").val("0");
                $("#C06").val("0");
                $("#C07").val("0");

            }
        });
}


function backToStart() {
    var str = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Ragam ID <input class="mdl-textfield__input" type="text" id="ragamID" name="ragamID" value=""> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Email <input class="mdl-textfield__input" type="text" id="email" name="email" value=""> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Name <input class="mdl-textfield__input" type="text" id="studentName" name="studentName" value="" readonly="readonly" onchange="showUpdateButton()"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> Phone <input class="mdl-textfield__input" type="text" id="phone" name="phone" value="" readonly="readonly" onchange="showUpdateButton()"> </div> <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"> College <input class="mdl-textfield__input" type="text" id="college" name="college" value="" readonly="readonly" onchange="showUpdateButton()"> </div> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="getParticipant()"   style="position: absolute; right: 200px;" id="searchButton"> Search </button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="getEventsList()"   style="position: absolute; right: 200px;" id="nextButton"> Next </button> <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="updateInfo()"   style="position: absolute; right: 200px;" id="updateButton"> Update </button> ';
    $("#div1").html(str);
    $("#nextButton").hide();
    $("#updateButton").hide();
    barcodeinp = "#ragamID";

}


function finalPayment() {
    $("#payButton").hide();
    var mr = $("#MainEventRegistration").val();
    var w1 = $("#WID01").val();
    var w2 = $("#WID02").val();
    var w3 = "";
    var w4 = $("#WID04").val();
    var w5 = "";
    var w7 = $("#WID07").val();
    var e26 = $("#EID026").val();
    var e27 = $("#EID027").val();
    var e28 = $("#EID028").val();
    var e29 = $("#EID029").val();
    var e30 = $("#EID030").val();
    var e31 = $("#EID031").val();
    var e32 = $("#EID032").val();
    var c1 = $("#C01").val();
    var c2 = $("#C02").val();
    var c3 = $("#C03").val();
    var c4 = $("#C04").val();
    var c5 = $("#C05").val();
    var c6 = $("#C06").val();
    var c7 = $("#C07").val();
    var amt = parseInt($("#totalMoney").val());

    $("#payButton").hide();

    if(mr==0 && w1==0 && w2==0 && w3==0 && w4==0&&w5==0&&w7==0&&e26==0&&e27==0&&e28==0&&e29==0&&e30==0&&e31==0&&e32==0 && c1==0&& c2==0&& c3==0&& c4==0&& c5==0&& c6==0&& c7==0){
        showSummary();
        return;
    }

    //console.log(mr+w1+w2+w3+w4+w5+w7+c1+c2+c3+c4+c5+c6+c7+RID);

    $.post("php/finalPayment.php",
        {
            mr : mr,
            w1 : w1,
            w2 : w2,
            w3 : w3,
            w4 : w4,
            w5 : w5,
            w7 : w7,
            e26 : e26,
            e27 : e27,
            e28 : e28,
            e29 : e29,
            e30 : e30,
            e31 : e31,
            e32 : e32,
            c1 : c1,
            c2 : c2,
            c3 : c3,
            c4 : c4,
            c5 : c5,
            c6 : c6,
            c7 : c7,
            amt : amt,
            ragamID : RID
        },
        function (data,status) {
            //console.log(data);
            if(data == "SUCCESS"){
                showSummary();
            }
            else{
                alert("Error in payment..... Contact respective person and don't proceed with further registration");
            }
        });
}

function showSummary(){
    var str = "<h4 class=\"mdl-cell mdl-cell--12-col\"><b>Registration Summary</b></h4>";
    $.post("php/getEventsList.php",
        {
            ragamID : RID
        },
        function (data,status) {
            //console.log(data);
            if(data == "ERROR"){
                alert("Error.... Please report");
            }
            else{
                var res = JSON.parse(data);
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><b>Name : </b>' + res.Name + ' </div>';
                str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><b>Items Bought</b></div>';
                if(res.MainRegistration == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Main Event Registraion</div>';
                }
                if(res.WID01 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Logophilia Vocabulary Workshop</div>';
                }
                if(res.WID02 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Photography Workshop</div>';
                }
                if(res.WID03 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Hip Hop International Dance Workshop</div>';
                }
                if(res.WID04 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Social Entrepreneurship Workshop</div>';
                }
                if(res.WID05 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Ethical Hacking Workshop</div>';
                }
                if(res.WID06 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Robotics Workshop</div>';
                }
                if(res.WID07 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Film Workshop</b></div>';
                }
                if(res.EID026 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Classical Dance</b></div>';
                }
                if(res.EID027 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Classical Music Solo</b></div>';
                }
                if(res.EID028 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Mimicry</b></div>';
                }
                if(res.EID029 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Monoact</b></div>';
                }
                if(res.EID030 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Kolukali</b></div>';
                }
                if(res.EID031 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Daffumuttu</b></div>';
                }
                if(res.EID032 == 1){
                    str = str + '</br><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Mappilappattu</b></div>';
                }
                $("#div1").html(str);
            }

        });

}


function registerParticipant(){
    $("#registerButton").hide();
    var email = $("#email1").val();
    var phone = $("#phone1").val();
    var ragamID = $("#ragamID1").val();
    var name = $("#studentName1").val();
    var college = $("#college1").val();
    //alert(phone);
    //alert(email);
    //alert(ragamID);
    if(ragamID == "" || phone == "" || email == "" || name == "" || college == ""){
        alert("Full Details Required");
        return;
    }
    $.post("php/registerParticipant.php",
        {
            email : email,
            phone : phone,
            ragamID : ragamID,
            name: name,
            college : college
        },
        function (data,status) {
            console.log(data);
            if(data == "PRESENT"){
                alert("Barcode is already allotted.....");
                return;
            }
            if(data == "SUCCESS"){
                alert("Participant Added");
                window.location.reload();
            }
            else{
                alert("Participant Not Added..... Please report!!!!");
            }
        });

}


function checkEmail() {
    var email = $("#email1").val();
    //alert(phone);
    //alert(email);
    //alert(ragamID);
    if(email == ""){
        return;
    }
    $.post("php/checkEmail.php",
        {
            email : email,
        },
        function (data,status) {
            //console.log(data);
            if(data == "SUCCESS"){
                alert("Email Already Present....Try Another one");
                $("#email1").val("");
            }
        });
}

function updateInfo() {
    var ragamID = $("#ragamID2").val();
    var name = $("#studentName2").val();
    var phone = $("#phone2").val();
    var college = $("#college2").val();
    var newID = $("#newBarcode").val();

    if(name == "" || phone == "" || college == "" || newID == ""){
        alert("Enter full data");
        return;
    }
    $.post("php/updateInfo.php",
        {
            ragamID : ragamID,
            name : name,
            phone : phone,
            newID : newID,
            college : college
        },
        function (data,status) {
            console.log(data);
            if(data == "PRESENT"){
                alert("Barcode is already allotted.....");
                return;
            }
            if(data == "SUCCESS"){
                alert("Updated Successfully....");
                window.location.reload();
            }
            else{
                alert("Error in updating.... Contact the corresponding person... Don't Proceed");
            }
        });
    
}


function searchParticipant() {
    var ragamID = $("#searchKey").val();
    var phone = "";
    var email = $("#searchKey").val();

    if(ragamID == ""){
        alert("Enter Data");
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
                return;
            }
            else{
                var res = JSON.parse(data);
                var str = '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Ragam ID';
                str = str + '<input class="mdl-textfield__input" type="text" id="ragamID2" value="'+res.ragamID+'" readonly="readonly"></div>';
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Email';
                str = str + '<input class="mdl-textfield__input" type="email" id="email2" value="'+res.email+'" readonly="readonly"></div>';
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Name';
                str = str + '<input class="mdl-textfield__input" type="text" id="studentName2" value="'+ res.name+'"></div>';
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">Phone';
                str = str + '<input class="mdl-textfield__input" type="text" id="phone2" value="'+res.phone+'"> </div>';
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">College';
                str = str  + '<input class="mdl-textfield__input" type="text" id="college2" value="'+res.college +'"></div>';
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"></div>';
                str = str + '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">New Barcode';
                str = str  + '<input class="mdl-textfield__input" type="text" id="newBarcode" value=""></div>';
                str = str + '<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="updateInfo()"   style="position: absolute; right: 200px;">Update</button>';
                $("#div3").html(str);
                changeBarcodeInput('#newBarcode');
            }
        });
}

function changeBarcodeInput(x) {
    barcodeinp = x;
}

function sendBarcode(b) {
    //alert(b);
    //alert("Scanned");
    $(barcodeinp).val(b);
    if(barcodeinp == "#ragamID"){
        getParticipant();
    }
}