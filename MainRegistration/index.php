<?php
    require 'php/checkLoginStatus.php';
?>
<!doctype html>
<html lang="en">
  <head>
    <title>HomePage</title>

    <link rel="stylesheet" href="css/material.deep_purple-pink.min.css">
    <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/myStyle.css">
      <link rel="stylesheet" href="css/materialize.min.css">
      <link rel="stylesheet" href="css/getmdl-select.min.css">

      <style>
    #view-source {
        position: fixed;
        display: block;
        right: 0;
        bottom: 0;
        margin-right: 40px;
        margin-bottom: 40px;
        z-index: 900;
    }
      </style>

      <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
      <script type="text/javascript" src="js/myScript.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>

      <script type="text/javascript" src="js/scanner1.js"></script>
      <script type="text/javascript" src="js/scanner2.js"></script>
  </head>
  <body class="mdl-demo mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
            <a href="#HomePage" class="mdl-layout__tab is-active" onclick="backToStart()">Homepage</a>
            <a href="#NewParticipant" class="mdl-layout__tab" onclick="changeBarcodeInput('#ragamID1')">New Participant</a>
            <a href="#LinkCard" class="mdl-layout__tab" onclick="changeBarcodeInput('#searchKey')">link Card</a>
            <a href="php/logout.php" class="mdl-layout__tab">Logout</a>
        </div>
      </header>
      <main class="mdl-layout__content" >
          <div class="mdl-layout__tab-panel is-active" id="HomePage">
             <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                <div class="mdl-card mdl-cell mdl-cell--12-col">
                    <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                        <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone" id="div1">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                Ragam ID
                                <input class="mdl-textfield__input" type="text" id="ragamID" name="ragamID" value="">

                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                Email
                                <input class="mdl-textfield__input" type="text" id="email" name="email" value="">
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                Name
                                <input class="mdl-textfield__input" type="text" id="studentName" name="studentName" value="" readonly="readonly">
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                Phone
                                <input class="mdl-textfield__input" type="text" id="phone" name="phone" value="" readonly="readonly"">
                            </div>
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                College
                                <input class="mdl-textfield__input" type="text" id="college" name="college" value="" readonly="readonly">
                            </div>
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="getParticipant()"   style="position: absolute; right: 200px;" id="searchButton"> Search </button>
                                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="getEventsList()"   style="position: absolute; right: 200px;" id="nextButton"> Next </button>
                        </div>
                    </div>
                </div>
             </section>

          </div>
          <div class="mdl-layout__tab-panel" id="NewParticipant">
              <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                  <div class="mdl-card mdl-cell mdl-cell--12-col">
                      <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                          <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone" id="div1">
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  Ragam ID
                                  <input class="mdl-textfield__input" type="text" id="ragamID1" name="ragamID1" value="">

                              </div>
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  Email
                                  <input class="mdl-textfield__input" type="email" id="email1" name="email1" value="" onchange="checkEmail()">
                              </div>
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  Name
                                  <input class="mdl-textfield__input" type="text" id="studentName1" name="studentName1" value="">
                              </div>
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  Phone
                                  <input class="mdl-textfield__input" type="text" id="phone1" name="phone1" value="">
                              </div>
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  College
                                  <input class="mdl-textfield__input" type="text" id="college1" name="college1" value="">
                              </div>
                              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" id="registerButton" onclick="registerParticipant()"   style="position: absolute; right: 200px;">Register</button>
                          </div>
                      </div>
                  </div>
              </section>

          </div>
          <div class="mdl-layout__tab-panel" id="LinkCard">
              <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                  <div class="mdl-card mdl-cell mdl-cell--12-col">
                      <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                          <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone" id="div2">
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                  <b>Ragam ID/Email</b>
                                  <input class="mdl-textfield__input" type="text" id="searchKey" name="ragamID2" value="">

                              </div>
                              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--primary" onclick="searchParticipant()"   style="position: absolute; right: 200px;">Search</button>
                          </div>
                      </div>
                  </div>
              </section>
              <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                  <div class="mdl-card mdl-cell mdl-cell--12-col">
                      <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                          <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone" id="div3">
                              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </main>
    </div>
    <script src="js/material.min.js"></script>
    <script type="text/javascript" src="js/getmdl-select.min.js"></script>
  <<script>
      jQuery(document).ready(function($) {

          $(window).scannerDetection();
          $(window).bind('scannerDetectionComplete',function(e,data){
                sendBarcode(data.string);
          })
              .bind('scannerDetectionError',function(e,data){
                  //alert('detection error '+data.string);
              })
              .bind('scannerDetectionReceive',function(e,data){
                  console.log(data);
              })

      });
  </script>
  </body>
</html>
