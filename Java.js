$(window).on("load", StartStory);
var niveau1_klik = 0;
var er_niveau1_faerdig = false;
var er_den_passende;
var er_den_upassende;
var the_score = 0;
var theTimer;
var svar_tid = 10000;
var pickle_score = 8;

function StartStory() {
    //  console.log("Historien er startet");
    $("#mrpickle_sprite").addClass("mrpickle_happy4");
    startSpm();
}

function startSpm() {

    //$("#billede_container").removeClass();
    //$("#billede_container").addClass(billed_postn);
    console.log("START spørgsmål the_score", the_score);
    knapperOff();
    clearTimeout(theTimer);
    if (niveau1_klik == 40) {
        console.log("Spillet er Slut!");


    } else {
        niveau1();
        theTimer = setTimeout(tidenErGaaet, svar_tid);

    }



}

function tidenErGaaet() {
    console.log("tiden er gået");

    if (er_den_passende == true) {
        console.log("passende delt");
        $("#fail").removeClass();
        $("#fail")[0].play();
        pickle_score--;
        $("#passende_sprite").removeClass();
        $("#passende_sprite").addClass("out_left");
        console.log("out_left");
        $("#passende_sprite").on("animationend", startPositon);

    } else {
        pickle_score--;
        $("#fail").removeClass();
        $("#fail")[0].play();
        $("#upassende_sprite").removeClass();
        $("#upassende_sprite").addClass("out_left");
        console.log("out_right");
        $("#upassende_sprite").on("animationend", startPositon);
    }
    styr_mr_pickle();
    setTimeout(startSpm, 500);


}

/*************** SPIL LEVELS HÉR ******************/
function niveau1() {

    niveau1_klik++;
    console.log("niveau1_klik", niveau1_klik);
    if (niveau1_klik == 5) {

        // timertiden skal sættes ned
        svar_tid = 8000;
        clearTimeout();

    } else if (niveau1_klik == 9) {
        svar_tid = 6000;
        $("#fade-text_level2").removeClass("invisible");
        $("#fade-text_level2").addClass("fill");
        $("#fade-text_level2").addClass("stroke");
        clearTimeout();
    }
    if (niveau1_klik == 12) {
        // timertiden skal sættes ned
        svar_tid = 4000;
        $("#fade-text_level3").removeClass("invisible");
        $("#fade-text_level3").addClass("fill");
        $("#fade-text_level3").addClass("stroke");
        clearTimeout();

    } else if (niveau1_klik == 16) {
        svar_tid = 2000;
        clearTimeout();

    }
    if (niveau1_klik == 20) {
        // timertiden skal sættes ned
        svar_tid = 400;
        clearTimeout();

    }



    clearTimeout(theTimer);
    console.log("svar_tid", svar_tid);

    randomValg1();
    $("#knap_del").on("click", del_klik);
    $("#knap_del_ikke").on("click", del_ikke_klik);




}

function del_klik() {

    if (er_den_passende == true) {
        console.log("passende delt");
        $("#success")[0].play();
        pickle_score++;
        $("#passende_sprite").removeClass("billed_postn");
        $("#passende_sprite").addClass("out_left");
        console.log("out_left");
        $("#passende_sprite").on("animationend", startPositon);

    } else {
        pickle_score--;

        $("#fail").removeClass();
        $("#fail")[0].play();
        $("#upassende_sprite").removeClass("billed_postn");
        $("#upassende_sprite").addClass("out_left");
        console.log("out_right");
        $("#upassende_sprite").on("animationend", startPositon);
    }

    styr_mr_pickle();
    setTimeout(startSpm, 500);


}

function del_ikke_klik() {

    if (er_den_passende == true) {
        console.log("passende ikke delt");

        $("#passende_sprite").removeClass("billed_postn");
        $("#passende_sprite").addClass("out_right");
        console.log("out_right");
        $("#passende_sprite").on("animationend", startPositon);
    } else {
        pickle_score++;

        $("#success").removeClass();
        $("#success")[0].play();
        $("#upassende_sprite").removeClass("billed_postn");
        $("#upassende_sprite").addClass("out_right");
        console.log("out_left");
        $("#upassende_sprite").on("animationend", startPositon);
    }
    styr_mr_pickle();
    setTimeout(startSpm, 500);

}

function startPositon() {
    console.log("startPositon");

    $("#passende_sprite").removeClass("out_left");
    $("#passende_sprite").removeClass("out_right");
    $("#upassende_sprite").removeClass("out_left");
    $("#upassende_sprite").removeClass("out_right");
    $("#passende_sprite").addClass("billed_postn");
    $("#upassende_sprite").addClass("billed_postn");
}



function styr_mr_pickle() {
    console.log("PICKLE ANIMATION");
    if (pickle_score == 14) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy1");


    }
    if (pickle_score == 12) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy2");


    }
    if (pickle_score == 10) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy3");

    }

    if (pickle_score == 8) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy4");

    }

    if (pickle_score == 6) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy5");

    }

    if (pickle_score == 4) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy6");

    }


    if (pickle_score == 1) {
        $("#mrpickle_sprite").removeClass();
        $("#mrpickle_sprite").addClass("mrpickle_happy7");

    }
}

//Logik til mr Pickles spritesheet
//    if else if etc.



function randomValg1() {
    console.log("random valg");

    // Vi laver variablen her, fordi
    var random = Math.random();
    // var random = 1;
    if (random > 0.3) {
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

    var er_den_upassende = true;
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

    var er_den_passende = true;
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
