/* eslint-env browser */
/* eslint no-console: "error" */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* jslint white:true, browser:true, devel:true */

//var PreferencesManager = brackets.getModule("preferences/PreferencesManager");

//prefs = PreferencesManager.getExtensionPrefs("jslint");

//prefs.set("options.es6", true);

var nb1;
var nb2;
var nb3;
var nb4;
var nb5;
var nb6;
var nb7;
var nb8;
var nb9;





var scoreCalcul;
var signe;
var minimumIntervalle = Number(document.getElementById('minimumIntervalle').textContent);
var maximumIntervalle = Number(document.getElementById('maximumIntervalle').textContent);
var combienDeNombres = Number(document.getElementById('nombre').textContent);
console.log("IL faut"+nombre+"pour le calcul");


var op =  document.getElementById('operationCalcul').textContent;
var op2 = document.getElementById('operationCalcul').textContent;
var op3 = document.getElementById('operationCalcul').textContent;
var op4 = document.getElementById('operationCalcul').textContent;
var op5 = document.getElementById('operationCalcul').textContent;
var op6 = document.getElementById('operationCalcul').textContent;
var op7 = document.getElementById('operationCalcul').textContent;
var op8 = document.getElementById('operationCalcul').textContent;








var checkbox = document.querySelector("input[name=checkbox]");

var soustractionPositive = document.getElementById("divisionDecimaleOBTBYPHP").textContent;

//var soustractionPositive =   document.getElementsByName("soustractionPositive");

//var soustractionPositive = document.forms['formObtenirVariable'].elements[0].value;

console.log("soustractionPositive"+soustractionPositive);

var soustractionNegative = document.getElementById('soustractionNegativeOBTBYPHP').textContent;
console.log("soustractionNegative"+soustractionNegative);

var divisionEuclidienne = document.getElementById('divisionEuclidienneOBTBYPHP').textContent;
console.log("divisionEuclidienne"+divisionEuclidienne);

var divisionDecimale = document.getElementById('divisionDecimaleOBTBYPHP').textContent;
console.log("divisionDecimale"+divisionDecimale);

//https://www.developpez.net/forums/d284052/javascript/general-javascript/recuperer-checkbox/

/*


*/


function calculScore() { //La fonction de calcul du score
    "use strict";
    scoreCalcul = scoreCalcul + 1; //On ajoute 1 au score
    document.getElementById("score").textContent = scoreCalcul; //On balance la valeur de score dans la zone score
};



var nombre = document.getElementById('check');
nombre.addEventListener("click", function () {
    "use strict";
    nb1 = Number(document.getElementById("nb1").textContent); // On lui dit d'afficher nb1 dans la zone nb1
    nb2 = Number(document.getElementById("nb2").textContent); // On lui dit d'afficher nb2 dans la zone nb2
    nb3 = Number(document.getElementById("nb3").textContent); // On lui dit d'afficher nb3 dans la zone nb3
    nb4 = Number(document.getElementById("nb4").textContent); // On lui dit d'afficher nb4 dans la zone nb4
    nb5 = Number(document.getElementById("nb5").textContent); // On lui dit d'afficher nb5 dans la zone nb5
    nb6 = Number(document.getElementById("nb6").textContent); // On lui dit d'afficher nb6 dans la zone nb6
    nb7 = Number(document.getElementById("nb7").textContent); // On lui dit d'afficher nb7 dans la zone nb7
    nb8 = Number(document.getElementById("nb8").textContent); // On lui dit d'afficher nb8 dans la zone nb8
    nb9 = Number(document.getElementById("nb9").textContent); // On lui dit d'afficher nb9 dans la zone nb9
    switch(op){
        case"addition":
            switch(combienDeNombres){
                case 2:
                    if (nb1 + nb2 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }
                break;
                case 3:
                    if (nb1 + nb2 + nb3 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
                case 4:
                    if (nb1 + nb2 + nb3 + nb4 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
                case 5:
                    if (nb1 + nb2 + nb3 + nb4 + nb5 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
                case 6:
                    if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
                case 7:
                    if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 + nb7 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
                case 8:
                    if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 + nb7 + nb8  == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
                case 9:
                    if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 + nb7 + nb8 + nb9 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                        //calculSuivant();
                    }

                break;
            }
            
        break;
        case"soustraction":
            switch(combienDeNombres){
                case 2:
                    if (nb1 - nb2 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 3:
                    if (nb1 - nb2 - nb3 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 4:
                    if (nb1 - nb2 - nb3 - nb4 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 5:
                    if (nb1 - nb2 - nb3 - nb4 - nb5 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 6:
                    if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 7:
                    if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 - nb7  == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 8:
                    if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 - nb7 - nb8 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 9:
                    if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 - nb7 - nb8 - nb9 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
            }
            
        break;
        case "multiplication":
            switch(combienDeNombres){
                case 2:
                    if (nb1 * nb2 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }
                break;
                case 3:
                    if (nb1 * nb2 * nb3 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
                case 4:
                    if (nb1 * nb2 * nb3 * nb4 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
                case 5 :
                    if (nb1 * nb2 * nb3 * nb4 * nb5 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
                case 6 :
                    if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
                case 7:
                    if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 * nb7 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
                case 8:
                    if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 * nb7 * nb8 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
                case 9 :
                    if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 * nb7 * nb8 * nb9 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                        calculScore(); // On appelle la fonction score
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                     } else { //sinon
                        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                        document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                    }

                break;
            
            }
            
        break;
        case"division":
            if(divisionEuclidienne != "undefined"){
                if ((nb1 / nb2 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                    document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                    calculScore(); // On appelle la fonction score
                    document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                } else { //sinon
                    document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                    document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                }
            }
            else{
                if (nb1 / nb2 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                    document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                    calculScore(); // On appelle la fonction score
                    document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                } else { //sinon
                    document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                    document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                }
            }


            
        break;
    }
});


function entierAleatoire(min, max)
{
    "use strict";
    return Number((Math.floor(Math.random() * (max - min + 1)) + min));
}


function calculSuivant(minimumIntervalle, maximumIntervalle) { //La fonction calcul suivant
    "use strict";
    console.log("calculSuivant : "+minimumIntervalle+" "+ maximumIntervalle);
    document.getElementById('invisible').style.display = 'none'; //Le bouton devient invisible quand on clique sur le bouton calcul suivant
    document.getElementById("reponse").innerHTML = "<br />"; // On lui dit de ne plus afficher le vrai ou faux
    document.getElementById("texte").value = ""; //On lui dit de ne pas garder la réponse précédente que l'utilisateur a tapé
    document.getElementById('check').style.display = 'block'; //On fait disparaître le bouton check

    switch(op){
        case"addition": signe="+"; break;
        case"soustraction": signe="-"; break;
        case "multiplication": signe="*"; break;
        case"division": signe="/"; break;
    }

    switch(combienDeNombres)
    {
        case 2:
            nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                 nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2

        break;
        case 3 :

            nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2

        break;
        case 4:


            nb4 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb3 = Number(entierAleatoire(minimumIntervalle, nb4));
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));

            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op3").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb4").textContent = nb4; // On lui dit d'afficher le nouveau nb2 dans la zone nb2

        break;
        case 5:


            nb5 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb4 = Number(entierAleatoire(minimumIntervalle, nb5));
                nb3 = Number(entierAleatoire(minimumIntervalle, nb4));
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb4 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));

            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op3").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb4").textContent = nb4; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op4").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb5").textContent = nb5; // On lui dit d'afficher le nouveau nb2 dans la zone nb2

        break;
        case 6:

            nb6 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb5 = Number(entierAleatoire(minimumIntervalle, nb6));
                nb4 = Number(entierAleatoire(minimumIntervalle, nb5));
                nb3 = Number(entierAleatoire(minimumIntervalle, nb4));
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb4 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb5 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));

            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op3").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb4").textContent = nb4; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op4").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb5").textContent = nb5; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op5").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb6").textContent = nb5; // On lui dit d'afficher le nouveau nb2 dans la zone nb2

        break;
        case 7:
            nb7 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb6 = Number(entierAleatoire(minimumIntervalle, nb7));
                nb5 = Number(entierAleatoire(minimumIntervalle, nb6));
                nb4 = Number(entierAleatoire(minimumIntervalle, nb5));
                nb3 = Number(entierAleatoire(minimumIntervalle, nb4));
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb4 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb5 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb6 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));


            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op3").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb4").textContent = nb4; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op4").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb5").textContent = nb5; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op5").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb6").textContent = nb6; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op6").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb7").textContent = nb7; // On lui dit d'afficher le nouveau nb2 dans la zone nb2


        break;
        case 8:
            nb8 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb7 = Number(entierAleatoire(minimumIntervalle, nb8));
                nb6 = Number(entierAleatoire(minimumIntervalle, nb7));
                nb5 = Number(entierAleatoire(minimumIntervalle, nb6));
                nb4 = Number(entierAleatoire(minimumIntervalle, nb5));
                nb3 = Number(entierAleatoire(minimumIntervalle, nb4));
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb4 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb5 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb6 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb7 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));



            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op3").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb4").textContent = nb4; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op4").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb5").textContent = nb5; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op5").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb6").textContent = nb6; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op6").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb7").textContent = nb7; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op7").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb8").textContent = nb8; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
        break;
        case 9:
            nb9 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
            //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/localeCompare
             if((soustractionPositive.localeCompare("undefined") ) == 0)
            {
                nb8 = Number(entierAleatoire(minimumIntervalle, nb9));
                nb7 = Number(entierAleatoire(minimumIntervalle, nb8));
                nb6 = Number(entierAleatoire(minimumIntervalle, nb7));
                nb5 = Number(entierAleatoire(minimumIntervalle, nb6));
                nb4 = Number(entierAleatoire(minimumIntervalle, nb5));
                nb3 = Number(entierAleatoire(minimumIntervalle, nb4));
                nb2 = Number(entierAleatoire(minimumIntervalle, nb3));
                nb1 = Number(entierAleatoire(minimumIntervalle, nb2));
            }
            else{
                nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb3 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb4 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb5 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb6 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb7 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));
                nb8 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));




            }

            document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
            document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op2").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb3").textContent = nb3; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op3").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb4").textContent = nb4; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op4").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb5").textContent = nb5; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op5").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb6").textContent = nb6; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op6").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb7").textContent = nb7; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op7").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb8").textContent = nb8; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
            document.getElementById("op8").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
            document.getElementById("nb9").textContent = nb9; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
        break;
        }
    break;   
};


    



calculSuivant(minimumIntervalle, maximumIntervalle); //On appelle la fonction calcul suivant

var boutonAntitriche = document.getElementById("check"); //On définit la variable bouton Antitriche qui ne s'active que quand le bouton check a été cliqué
boutonAntitriche.addEventListener("click", function vaEtVient() { //Quand on clique sur le bouton check on affiche clic on déclenche la variable boutonAntitriche ce qui déclenche la fonction vaEtVient. Flash spécial, click est un évènement!
        "use strict";
        console.log("click + vaEtVient"); //On affiche le click dans la console
        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
        } else { //Sinon
        }
    } // Quand bouton check a été cliqué alors on fait apparaître le bouton sinon on le fait disparaître
);

var nbEnter = 0;

function entreeToCheck() {
    nbEnter = nbEnter + 1;
    if (nbEnter === 1) {
        nb1 = Number(document.getElementById("nb1").textContent); // On lui dit d'afficher nb1 dans la zone nb1
        nb2 = Number(document.getElementById("nb2").textContent); // On lui dit d'afficher nb2 dans la zone nb2
        nb3 = Number(document.getElementById("nb3").textContent); // On lui dit d'afficher nb3 dans la zone nb3
        nb4 = Number(document.getElementById("nb4").textContent); // On lui dit d'afficher nb4 dans la zone nb4
        nb5 = Number(document.getElementById("nb5").textContent); // On lui dit d'afficher nb5 dans la zone nb5
        nb6 = Number(document.getElementById("nb6").textContent); // On lui dit d'afficher nb6 dans la zone nb6
        nb7 = Number(document.getElementById("nb7").textContent); // On lui dit d'afficher nb7 dans la zone nb7
        nb8 = Number(document.getElementById("nb8").textContent); // On lui dit d'afficher nb8 dans la zone nb8
        nb9 = Number(document.getElementById("nb9").textContent); // On lui dit d'afficher nb9 dans la zone nb9
        console.log("op vaut ici "+op);
        switch(op){
            case"addition":
                switch(combienDeNombres){
                    case 2:
                        if (nb1 + nb2 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }
                    break;
                    case 3:
                        if (nb1 + nb2 + nb3 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }
                    break;
                    case 4:
                        if (nb1 + nb2 + nb3  + nb4 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 5:
                        if (nb1 + nb2 + nb3 + nb4 + nb5 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 6:
                        if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 7:
                        if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 + nb7 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 8:
                        if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 + nb7 + nb8 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 9:
                        if (nb1 + nb2 + nb3 + nb4 + nb5 + nb6 + nb7 + nb8 + nb9 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                }
                
            break;
            case"soustraction":
                switch(combienDeNombres){
                    case 2:

                        if (nb1 - nb2 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 3:

                        if (nb1 - nb2 - nb3 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 4:

                        if (nb1 - nb2 - nb3 - nb4 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 5:

                        if (nb1 - nb2 - nb3 - nb4 - nb5  == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }


                    break;
                    case 6:

                        if (nb1 - nb2 -nb3 - nb4 - nb5 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 7:

                        if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 - nb7 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 8:

                        if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 - nb7 - nb8 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 9:

                        if (nb1 - nb2 - nb3 - nb4 - nb5 - nb6 - nb7 - nb8 - nb9 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                }
               
            break;            
            case "multiplication":
                switch(combienDeNombres){
                    case 2:
                        if (nb1 * nb2 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 3 :

                        if (nb1 * nb2 * nb3 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 4:

                        if (nb1 * nb2 * nb3 * nb4 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 5 :

                        if (nb1 * nb2 *nb3 * nb4 * nb5 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                    case 6 :

                        if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 7:

                        if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 * nb7 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 8:

                        if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 * nb7 * nb8 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;

                    case 9:

                        if (nb1 * nb2 * nb3 * nb4 * nb5 * nb6 * nb7 * nb8 * nb9 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                        {
                            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                            calculScore(); // On appelle la fonction score
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        } else //sinon
                        {
                            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                        }
                        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                        } else { //Sinon
                        }

                    break;
                }
               
            break;   
            case"division":
                switch(combienDeNombres){
                    case 2:
                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 3:

                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 /nb3 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 4:

                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 /nb3 / nb4 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 / nb4 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 5:

                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 /nb3 / nb4 / nb5 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 / nb4 / nb5 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 6:

                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 / nb3 / nb4 / nb5 / nb6 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 / nb4 / nb5 / nb6== document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 7:

                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 / nb3 / nb4 / nb5 / nb6 / nb7 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 / nb4 / nb5 / nb6 / nb7 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 8:

                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 / nb3 / nb4 / nb5 / nb6 / nb7 / nb8 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 / nb4 / nb5 / nb6 / nb7 / nb8 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                    case 9:
                        if(divisionEuclidienne!="undefined"){
                            //https://www.it-swarm.dev/fr/javascript/division-entiere-avec-reste-en-javascript/970450856/
                            if ((nb1 / nb2 / nb3 / nb4 / nb5 / nb6 / nb7 / nb8 / nb9 |0) == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            } else { //sinon
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }
                        else{
                            if (nb1 / nb2 / nb3 / nb4 / nb5 / nb6 / nb7 / nb8 / nb9 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
                            {
                                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                                calculScore(); // On appelle la fonction score
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            } else //sinon
                            {
                                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                                document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
                            }
                            if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
                                document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
                            } else { //Sinon
                            }
                        }

                    break;
                }

                
            break;   
        }
    }

    if (nbEnter > 1) {
        calculSuivant(minimumIntervalle, maximumIntervalle);
        nbEnter = 0;
    }

}
