/* eslint-env browser */
/* eslint no-console: "error" */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* jslint white:true, browser:true, devel:true */

//var PreferencesManager = brackets.getModule("preferences/PreferencesManager");

//prefs = PreferencesManager.getExtensionPrefs("jslint");

//prefs.set("options.es6", true);

var go = document.getElementById("Go");
var nbListe = document.getElementById("nbID");

var opListe = document.getElementById("opID");
var op  = opListe.selectedIndex;

console.log("op :"+op);

var caseEntier = document.getElementById("divOPtNbEntier");
var caseDecimale =  document.getElementById("divOPtNbDecimale");


var divPositive = document.getElementById("divPositiveIDDIV");
var divNegative = document.getElementById("divNegativeIDDIV");
var divEuclidienne = document.getElementById("divEuclidienneIDDIV");
var divDecimale = document.getElementById("divDecimaleIDDIV");

var optionSoustraction = document.getElementById("divOptSoustractionIDDIV");
var optionDivision = document.getElementById("divOptDivisonIDDIV");

var message1 = document.getElementById("messageRougeNb");
var message2 = document.getElementById("messageRougeOp");
var message3 = document.getElementById("messageRougeNb1EtNb2");
var message4 = document.getElementById("messageRougeNb1");
var message5 = document.getElementById("messageRougeNb2");
var message6 = document.getElementById("messageRougeComparaisonEntreNb1EtNb2");


switch(op){
    case 0:
        optionSoustraction.style.display = 'none';
        optionDivision.style.display = 'none';
    break;
    case 1:
        optionSoustraction.style.display = 'none';
        optionDivision.style.display = 'none';
    break;
    case 2:
        optionSoustraction.style.display = 'flex';
        optionSoustraction.style.marginTop = '3%';
        optionDivision.style.display = 'none';

    break;
    case 3:
        optionSoustraction.style.display = 'none';
        optionDivision.style.display = 'none';

    break;
    case 4:
        optionSoustraction.style.display= 'none';
        optionDivision.style.display='flex';
        optionDivision.style.marginTop = '3%';
    break;
}
opListe.addEventListener("change", function () {
    var op  = opListe.selectedIndex;

    console.log("op :"+op);
    switch(op){
        case 0:
            optionSoustraction.style.display = 'none';
            optionDivision.style.display = 'none';
        break;
        case 1:
            optionSoustraction.style.display = 'none';
            optionDivision.style.display = 'none';
        break;
        case 2:
            optionSoustraction.style.display = 'flex';
            optionSoustraction.style.marginTop = '3%';
            optionDivision.style.display = 'none';

        break;
        case 3:
            optionSoustraction.style.display = 'none';
            optionDivision.style.display = 'none';

        break;
        case 4:
            optionSoustraction.style.display= 'none';
            optionDivision.style.display='flex';
            optionDivision.style.marginTop = '3%';
        break;
    }


});

go.addEventListener("click", function () {
    var nb = nbListe.selectedIndex;
    var op  = opListe.selectedIndex;
    var nb1= Number(document.getElementById("nb1").value);
    var nb2= Number(document.getElementById("nb2").value);
    console.log("."+nb+"."+op+"."+"nb1="+nb1+" nb2="+nb2+" "+(nb1+nb2));
    if (nb == "0") {
        console.log("nb === 0");
        message1.style.display = 'flex';
        message2.style.display = 'none';
        message3.style.display = 'none';
        message4.style.display = 'none';
        message5.style.display = 'none';
        message6.style.display = 'none';

    }
    else if (op == "0") {
        console.log("op === 0");
        message1.style.display = 'none';
        message2.style.display = 'flex';
        message3.style.display = 'none';
        message4.style.display = 'none';
        message5.style.display = 'none';
        message6.style.display = 'none';

    }
    
    else if (nb1 === 0 && nb2 === 0) {
        message1.style.display = 'none';
        message2.style.display = 'none';
        message3.style.display = 'flex';
        message4.style.display = 'none';
        message5.style.display = 'none';
        message6.style.display = 'none';

    }
    
    else if (nb1 === 0){
        message1.style.display = 'none';
        message2.style.display = 'none';
        message3.style.display ='none';
        message4.style.display = 'flex';
        message5.style.display = 'none';
        message6.style.display = 'none';

    }
    
    else if (nb2 === 0){
        message1.style.display = 'none';
        message2.style.display = 'none';
        message3.style.display ='none';
        message4.style.display = 'none';
        message5.style.display = 'flex';
        message6.style.display = 'none';
    }

    else if (nb1 >= nb2) {
        message1.style.display = 'none';
        message2.style.display = 'none';
        message3.style.display ='none';
        message4.style.display = 'none';
        message5.style.display = 'none';
        message6.style.display = 'flex'; 
    }

    else {
        message1.style.display = 'none';
        message2.style.display = 'none';
        message3.style.display = 'none';
        message4.style.display = 'none';
        message5.style.display = 'none';
        message6.style.display = 'none';
        var nb1TransmisATouteLesPages = nb1;
        var nb2TransmisATouteLesPages = nb2;
        //window.location.href="additionGenerique/additionGenerique.php";
    }


    
    
});
