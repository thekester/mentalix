/* eslint-env browser */
/* eslint no-console: "error" */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/* jslint white:true, browser:true, devel:true */

//var PreferencesManager = brackets.getModule("preferences/PreferencesManager");

//prefs = PreferencesManager.getExtensionPrefs("jslint");

//prefs.set("options.es6", true);

var nb1;
var nb2;
var scoreCalcul;
var signe;
var minimumIntervalle = Number(document.getElementById('minimumIntervalle').textContent);
var maximumIntervalle = Number(document.getElementById('maximumIntervalle').textContent);
var op =  document.getElementById('operationCalcul').textContent;
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
    switch(op){
        case"addition":
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
        case"soustraction":

        
            if (nb1 - nb2 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                calculScore(); // On appelle la fonction score
                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
             } else { //sinon
                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
            }
        break;
        case "multiplication":
            if (nb1 * nb2 == Number(document.getElementById("texte").value)) { // Si nb1+nb2 est bien le bon résultat
                document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
                calculScore(); // On appelle la fonction score
                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
             } else { //sinon
                document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
                document.getElementById('check').style.display = 'none'; //On fait disparaître le bouton check
            }
        break;
        case"division":
            if(divisionEuclidienne!="undefined"){
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
    nb1 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));

    switch(op){
        case"addition": signe="+"; break;
        case"soustraction": signe="-"; break;
        case "multiplication": signe="*"; break;
        case"division": signe="/"; break;
    }



    nb2 = Number(entierAleatoire(minimumIntervalle, maximumIntervalle));

    document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
    document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
    document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2
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
        console.log("op vaut ici "+op);
        switch(op){
            case"addition":
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
            case"soustraction":
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
            case "multiplication":
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
            case"division":
            if(divisionEuclidienne!="undefined"){
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
        }
    }

    if (nbEnter > 1) {
        calculSuivant(minimumIntervalle, maximumIntervalle);
        nbEnter = 0;
    }

}
