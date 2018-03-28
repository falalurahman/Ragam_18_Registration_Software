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
                finalResult = data;
                var res = JSON.parse(data);

                var str = '<h4>Name: ' +res.name +'</h4>';
                $("#searchKey").val("");

                var flag = 0;
                //console.log(res.products);
                for(y in res.products) {
                    flag = 1;
                    if (res.products[y].MerchandiseGiven == 1) {
                        str = str + "<div class=\'collapsible-header\' style='background: #A9A9A9;' ><b> TShirt (Given)</b></div>";
                    }
                    else {
                        str = str + "<div class=\'collapsible-header\' id='" + res.products[y].SlNo + "' style='background: white;' onclick='changeSelection(\"" + res.products[y].SlNo + "\")' ><b> TShirt (Quantity : 1)</b></div>";
                    }
                }
                if(flag == 1) {
                    str = str + "</br><button class='mdl-button mdl-js-button mdl-button--raised mdl-button--primary' onclick='giveProducts()'  style='position: absolute; right: 200px;' id='giveButton'> Give </button>";
                }
                $("#div2").html(str);
                for(y in res.products) {
                    $("#" + res.products[y].SlNo).val("0")
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
    var res = JSON.parse(finalResult);
    for(y in res.products) {
        flag = 1;
        if ($("#"+res.products[y].SlNo).val() == 1) {
            res.products[y].MerchandiseGiven = 1;
        }
        else {
            res.products[y].MerchandiseGiven = 0;
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
                alert("Merchandise Given");
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