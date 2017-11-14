$(window).on("load", StartStory);
var niveau1_klik = 0;
var er_niveau1_faerdig = false;
var er_den_passende;
var the_score = 0;
var theTimer;
var svar_tid = 10000;
var pickle_score = 4;

function StartStory() {
    //  console.log("Historien er startet");
    $("#mrpickle_sprite").addClass("mrpickle_sprite");
    startSpm();
}

function startSpm() {

    console.log("START SPØrgsmål the_score", the_score);
    knapperOff();
    clearTimeout(theTimer);
    if (niveau1_klik == 9) {
        console.log("Spillet er Slut!");

    } else {
        niveau1();
        theTimer = setTimeout(tidenErGaaet, svar_tid);

    }



}

function tidenErGaaet() {
    console.log("tiden er gået");



    startSpm();





}

function niveau1() {

    niveau1_klik++;
    console.log("niveau1_klik", niveau1_klik);
    if (niveau1_klik == 4) {
        // timertiden skal sættes ned
        svar_tid = 5000;

    } else if (niveau1_klik == 7) {
        svar_tid = 1000;

    }
    console.log("svar_tid", svar_tid);

    randomValg1();
    $("#knap_del").on("click", del_klik);
    $("#knap_del_ikke").on("click", del_ikke_klik);




}

function del_klik() {

    // $("#passende_sprite").addClass("out_left");

    if (er_den_passende == true) {

        the_score++;

    } else {

    }
    styr_mr_pickle();
    startSpm();
}

function del_ikke_klik() {

    // $("#upassende_sprite").addClass("out_right");

    if (er_den_passende == true) {



    } else {
        the_score++;
    }
    styr_mr_pickle();
    startSpm();
}

function styr_mr_pickle() {
    console.log("PICKLE ANIMATION");
    if (pickle_score == 1) {
        $("#mrpickle_sprite").addClass("mrpickle_happy1");


    } else if (pickle_score == 2) {
        $("#mrpickle_sprite").removeClass("mrpickle_happy1");
        $("#mrpickle_sprite").addClass("mrpickle_happy2");

    }
    //Logik til mr Pickles spritesheet
    //    if else if etc.

}

function randomValg1() {
    console.log("random valg");

    // Vi laver variablen her, fordi
    var random = Math.random();
    // var random = 1;
    if (random > 0.5) {
        upassende();
        er_den_passende = false;
    } else {
        passende();
        er_den_passende = true;
    }
}
/* -----------PASSENDE BILLEDER----------- */
function upassende() {
    console.log("Vis Upassende Billeder");
    $("#upassende_sprite").show();
    $("#passende_sprite").hide();

    var mitRandomTalX = Math.floor(Math.random() * 2);
    var mitRandomTalY = Math.floor(Math.random() * 9);
    console.log("mitRandomTalX", mitRandomTalX);
    console.log("mitRandomTalY", mitRandomTalY);
    $("#upassende_sprite").css("background-position", (-mitRandomTalX * 100) + "% " + (-mitRandomTalY * 100) + "%");

    //  niveau1_restart();
}
/* -----------UPASSENDE BILLEDER----------- */

function passende() {
    console.log("Vis passende Billeder");
    $("#passende_sprite").show();
    $("#upassende_sprite").hide();

    var mitRandomTalX = Math.floor(Math.random() * 2);
    var mitRandomTalY = Math.floor(Math.random() * 4);
    console.log("mitRandomTalX", mitRandomTalX);
    console.log("mitRandomTalY", mitRandomTalY);
    $("#passende_sprite").css("background-position", (-mitRandomTalX * 100) + "% " + (-mitRandomTalY * 100) + "%");

    //  niveau1_restart();
}

//function niveau1_restart() {
//    console.log("neveau1_restart")
//    $("#knap_del").off("click", randomValg1);
//    $("#knap_del_ikke").off("click", randomValg1);
//    setTimeout(niveau1, 2000);
//    //niveau1();
//}

function knapperOff() {
    $("#knap_del").off("click");
    $("#knap_del_ikke").off("click");

}

//---- NIVEAU2 START -----
/*
function niveau2() {

    console.log("Niveau 2 - start");

}
*/
