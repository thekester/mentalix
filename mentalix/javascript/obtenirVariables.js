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

var message1 = document.getElementById("messageRougeNb");
var message2 = document.getElementById("messageRougeOp");
var message3 = document.getElementById("messageRougeNb1EtNb2");
var message4 = document.getElementById("messageRougeNb1");
var message5 = document.getElementById("messageRougeNb2");
var message6 = document.getElementById("messageRougeComparaisonEntreNb1EtNb2");


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
