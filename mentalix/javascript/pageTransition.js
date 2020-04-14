var closable1 = document.getElementById('closable1');
var closableConcernByClosable1 = document.getElementById('closableConcernByClosable1');
var fleche1 = document.getElementById('fleche1');

var closable2 = document.getElementById('closable2');
var closableConcernByClosable2 = document.getElementById('closableConcernByClosable2');
var fleche2 = document.getElementById('fleche2');

var closable3 = document.getElementById('closable3');
var closableConcernByClosable4 = document.getElementById('closableConcernByClosable3');
var fleche4 = document.getElementById('fleche4');

var closable5 = document.getElementById('closable5');
var closableConcernByClosable5 = document.getElementById('closableConcernByClosable5');
var fleche5 = document.getElementById('fleche5');

var closable6 = document.getElementById('closable6');
var closableConcernByClosable6 = document.getElementById('closableConcernByClosable6');
var fleche6 = document.getElementById('fleche6');

var closable7 = document.getElementById('closable7');
var closableConcernByClosable7 = document.getElementById('closableConcernByClosable7');
var fleche7 = document.getElementById('fleche7');

var closable8 = document.getElementById('closable8');
var closableConcernByClosable8 = document.getElementById('closableConcernByClosable8');
var fleche8 = document.getElementById('fleche8');

var closable9 = document.getElementById('closable9');
var closableConcernByClosable9 = document.getElementById('closableConcernByClosable9');
var fleche9 = document.getElementById('fleche9');




window.onload = function () {
    //closableConcernByClosable1.style.display = "none";
    //document.getElementById("fleche1").className = "fas fa-angle-right fa-rotate-90";

};



//console.log(closable1);
//sconsole.log(closableConcernByClosable1);

closable1.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable1.style.display == "block") {
        closableConcernByClosable1.style.display = "none";
        document.getElementById("fleche1").className = "fas fa-angle-right fa-rotate-90";
    } else if (closableConcernByClosable1.style.display == "none") {
        closableConcernByClosable1.style.display = "block";
        document.getElementById("fleche1").className = "fas fa-angle-right";
    } else if (closableConcernByClosable1.style.display == "") {
        closableConcernByClosable1.style.display = "block";
        document.getElementById("fleche1").className = "fas fa-angle-right fa-rotate-90";

    } else {
    }
});

closable2.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable2.style.display == "none") {
        closableConcernByClosable2.style.display = "block";
        document.getElementById("fleche2").className = "fas fa-angle-right";
    } else {
        closableConcernByClosable2.style.display = "none";
        document.getElementById("fleche2").className = "fas fa-angle-right fa-rotate-90";

    }
});

closable3.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable3.style.display == "block") {
        closableConcernByClosable3.style.display = "none";
        document.getElementById("fleche3").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable3.style.display = "block";
        document.getElementById("fleche3").className = "fas fa-angle-right";

    }
});

closable4.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable4.style.display == "block") {
        closableConcernByClosable4.style.display = "none";
        document.getElementById("fleche4").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable4.style.display = "block";
        document.getElementById("fleche4").className = "fas fa-angle-right";

    }
});

closable5.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable5.style.display == "block") {
        closableConcernByClosable5.style.display = "none";
        document.getElementById("fleche5").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable5.style.display = "block";
        document.getElementById("fleche5").className = "fas fa-angle-right";

    }
});

closable6.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable6.style.display == "block") {
        closableConcernByClosable6.style.display = "none";
        document.getElementById("fleche6").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable6.style.display = "block";
        document.getElementById("fleche6").className = "fas fa-angle-right";

    }
});

closable7.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable7.style.display == "block") {
        closableConcernByClosable7.style.display = "none";
        document.getElementById("fleche7").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable7.style.display = "block";
        document.getElementById("fleche7").className = "fas fa-angle-right";

    }
});

closable8.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable8.style.display == "block") {
        closableConcernByClosable8.style.display = "none";
        document.getElementById("fleche8").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable8.style.display = "block";
        document.getElementById("fleche8").className = "fas fa-angle-right";

    }
});

closable9.addEventListener('click', function () {
    //console.log("closable1.addEventListener "+closableConcernByClosable1.style.display);
    if (closableConcernByClosable9.style.display == "block") {
        closableConcernByClosable9.style.display = "none";
        document.getElementById("fleche9").className = "fas fa-angle-right fa-rotate-90";
    } else {
        closableConcernByClosable9.style.display = "block";
        document.getElementById("fleche9").className = "fas fa-angle-right";

    }
});
