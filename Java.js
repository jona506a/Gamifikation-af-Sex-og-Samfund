$(window).on("load", StartStory);
var niveau1_klik = 0;
var er_niveau1_faerdig = false;

$("#payoff1").hide();
$("#payoff2").hide();
$("#payoff_chat").hide();
$("#payoff_brevkasse").hide();
$("#reset_knap").hide();

function StartStory() {
    console.log("Historien er startet");

    $("#mrpickle_sprite").addClass("mrpickle_sprite");
    niveau1();


}


function niveau1() {
    niveau1_klik++;
    console.log("Niveau 1 - start");
    if (niveau1_klik == 4) {
        er_niveau1_faerdig = true;

        niveau2();
    }

    $("#knap_del").on("click", randomValg1);
    $("#knap_del_ikke").on("click", randomValg1);
    // setTimeout(randomValg1, 3000);
}


function randomValg1() {
    console.log("random valg");

    // Vi laver variablen her, fordi
    var random = Math.random();
    // var random = 1;
    if (random > 0.5) {
        upassende();
    } else {
        passende();
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
    niveau1_restart();
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

    niveau1_restart();
}

function niveau1_restart() {
    console.log("neveau1_restart")
    $("#knap_del").off("click", randomValg1);
    $("#knap_del_ikke").off("click", randomValg1);
    setTimeout(niveau1, 2000);
    //niveau1();
}

//---- NIVEAU2 START -----
function niveau2() {

    console.log("Niveau 2 - start");

}


//---- NIVEAU3 START -----
//Når niveau3 slutter og spillet tabes - ref. til random valg
//---- NIVEAU3 SLUT -----

//---- PAYOFF START -----
random_payoff();

function random_payoff() {
    console.log("Random valg payoff");

    if (Math.random() >= 0.5) {
        vis_payoff1();
    } else {
        vis_payoff2();
    }
}

function vis_payoff1() {
    $("#payoff1").show();
    $("#payoff_chat").show();
    $("#payoff_brevkasse").show();
    $("#reset_knap").show();
}

function vis_payoff2() {
    $("#payoff2").show();
    $("#payoff_chat").show();
    $("#payoff_brevkasse").show();
    $("#reset_knap").show();

}
