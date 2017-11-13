$(window).on("load", start);

function start() {
    $("#start_knap").on("click", begyndSpil);
}

function begyndSpil() {
    location.href = "https://www.google.dk/";
}


function StartStory() {
    console.log("Historien er startet");
    $("#mrpickle_sprite").addClass("mrpickle_sprite");

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
    /* $("#upassende_sprite").css("background-position", -(mitRandomTal * 100) + "% -200%");*/
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
}





/*function Del() {
    console.log("Del billede");
    /* $("#knap_del").off("click", Del);
     $("#knap_del_ikke").off("click", Del_ikke);


    var mitRandomTal = Math.floor(Math.random() * 18);
    console.log("mitRandomTal", mitRandomTal);

    $("#upassende_sprite").css("background-position", -(mitRandomTal * 100) + "% -200%");
}

function Del_ikke() {
    console.log("Del Ikke");
    $("#knap_del").off("click", Del);
    $("#knap_del_ikke").off("click", Del_ikke);

    var mitRandomTal = Math.floor(Math.random() * 18);
    console.log("mitRandomTal", mitRandomTal);

    $("#upassende_sprite").css("background-position", -(mitRandomTal * 100) + "% -200%");
} */
