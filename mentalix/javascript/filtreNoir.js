var musiqueMaestro = document.getElementById('musiqueMaëstro');
musiqueMaestro.addEventListener("click", function () {
    document.getElementById('ambiance').style.display = 'flex'; //Faire disparaître la div ambiance
    document.getElementById('CompteOuPas').style.display = 'none'; //Faire disparaître la div CompteOuPas
    document.getElementById('OuiCompte').style.display = 'none'; //Faire disparaître la div OuiCompte
    document.getElementById('PasCompte').style.display = 'none'; //Faire disparaître la div PasCompte  
    console.log("je met en pause " + pause);
    clearInterval(intervalID);
    pause = 1;

});


var JeNenVeuxPas = document.getElementById('declencheur2');
JeNenVeuxPas.addEventListener("click", function () {
    document.getElementById('ambiance').style.display = 'none'; //Faire disparaître la div ambiance
    document.getElementById('CompteOuPas').style.display = 'none'; //Faire disparaître la div CompteOuPas
    document.getElementById('OuiCompte').style.display = 'none'; //Faire disparaître la div OuiCompte
    document.getElementById('PasCompte').style.display = 'none'; //Faire disparaître la div PasCompte
    document.getElementById('pause').style.display = 'none'; //Faire disparaître la div CompteOuPas
    document.getElementById('boutonVisibleApllicationBasPauseAudio').style.display = 'none'; /*Faire disparaître le boutonVisibleApllicationBasPauseAudio  */
    document.getElementById('boutonVisibleApllicationBasReprendreLaMusique').style.display = 'none'; /*Faire disparaître le boutonVisibleApllicationBasReprendreLaMusique */
    pauseAudio();
});

var compte = document.getElementById('Compte');
compte.addEventListener("click", function () {
    document.getElementById('ambiance').style.display = 'none'; //Faire disparaître la div ambiance
    document.getElementById('CompteOuPas').style.display = 'none'; //Faire disparaître la div CompteOuPas
    document.getElementById('OuiCompte').style.display = 'flex'; //Faire disparaître la div PasCompte
    document.getElementById('PasCompte').style.display = 'none'; //Faire disparaître la div PasCompte
});

var pasDeCompte = document.getElementById('PasDeCompte');
pasDeCompte.addEventListener("click",function(){
    document.getElementById('ambiance').style.display = 'none'; //Faire disparaître la div ambiance
    document.getElementById('CompteOuPas').style.display = 'none'; //Faire disparaître la div CompteOuPas
    document.getElementById('OuiCompte').style.display = 'none'; //Faire disparaître la div PasCompte
    document.getElementById('PasCompte').style.display = 'flex'; //Faire apapraître la div PasCompte 
});


var finalementRevientChrono = document.createElement("button"); // On crée dans le document le bouton finalementRevientChrono
finalementRevientChrono.setAttribute("type", "button"); // On définit les attributs du bouton  finalementRevientChrono
finalementRevientChrono.id = 'finalementRevientChrono'; // Définition de l'identifiant du bouton finalementRevientChrono
finalementRevientChrono.textContent = 'finalementRevientChrono'; // Définition de son contenu textuel
document.getElementById('Yo').appendChild(finalementRevientChrono); /* On fait aparaitre le bouton finalementRevientChrono */

var byebyeChrono = document.getElementById("byebye");
byebyeChrono.addEventListener("click", function () { //Quand on clique sur le bouton byebyeChrono, on déclenche la fonction
    document.getElementById('byebye').style.display = 'none'; /*Cacher le bouton Je ne veux plus te voir chrono */
    document.getElementById('pausebye').style.display = 'none'; /*Faire disparaître le bouton pause chrono */
    document.getElementById('byebyeh2').style.display = 'none'; //Faire disparaître le h2 chronomètre
    document.getElementById('secondes').style.display = 'none'; /* Faire la zone des secondes */
    document.getElementById('minutes').style.display = 'none'; //Faire disparaître la zone des minutes
    document.getElementById('deuxpointsbyebye').style.display = 'none'; /*Faire disparaître les deux points entre les secondes et les minutes */
    document.getElementById('finalementRevientChrono').style.display = 'block';





});




finalementRevientChrono.addEventListener("click", function () {
    /* Quand on clique sur le bouton finalementRevientChrono  */
    document.getElementById('byebye').style.display = 'inline-block'; /*Rendre visible le bouton Je ne veux plus te voir chrono */
    document.getElementById('pausebye').style.display = 'inline-block'; /*Faire apapraître le bouton pause chrono */
    document.getElementById('byebyeh2').style.display = 'block'; //Faire apparaître le h2 chronomètre
    document.getElementById('secondes').style.display = 'inline-block'; /* Faire la zone des secondes */
    document.getElementById('minutes').style.display = 'inline-block'; //Faire disparaître la zone des minutes
    document.getElementById('deuxpointsbyebye').style.display = 'inline-block'; /*Faire disparaître les deux points entre les secondes et les minutes */
    document.getElementById('finalementRevientChrono').style.display = 'none';

});


window.onload = document.getElementById('finalementRevientChrono').style.display = 'none';



//On définit d'abord les variables pour quelles soient des variables globales

var minute = 0; //On initialise à 0 les minutes du chronomètre
var seconde = 0; //On initialise à 0 les secondes du chronomètre
var intervalID = 0; // Variable qui stocke l'identifiant de settimeout pour l'arrêter plus tard avec le cleartimeout
var scoreCalcul = 0; // La variable utilisé pour calculer le score
document.getElementById("score").textContent = scoreCalcul; //On balance la valeur de score dans la zone score
//		window.onload = chronoStart; // Quand la fenêtre est chargé, le chrono commence
var x = document.getElementById("myAudio");




var boutonMusiqueSuivante = document.getElementById("MusiqueSuivante"); //On définit boutonMusiqueSuivante comme étant le fait que l'on clique sur le bouton MusiqueSuivante

var nombreclicMusiqueSuivante = 1; //On définit nombreclicMusiqueSuivante à 1
var boutonMusiqueSuivanteclique = document.getElementById("MusiqueSuivante");




// Ajout d'un gestionnaire pour l'événement click
boutonMusiqueSuivante.addEventListener("click", function () { //Quand on clique sur le bouton musique suivante, on déclenche la fonction MusiqueSuivante
    nombreclicMusiqueSuivante = nombreclicMusiqueSuivante + 1;
    console.log("clic musique suivante " + nombreclicMusiqueSuivante); //On affiche clic pour voir si cela marche

    boutonMusiqueSuivante.id = `musique ` + nombreclicMusiqueSuivante + ``; // Définition de l'identifiant du bouton musique suivante
    boutonMusiqueSuivante.textContent = `MusiqueSuivante`; // Définition de son contenu textuel

    var NouvelMusiqueli = document.createElement("li"); // Création d'un élément li

    NouvelMusiqueli.classList.add("nouvelleMusique"); // Définition de l'identifiant pour avoir musique 1, 2, 3 , etc...


    var NouvelMusiquespan = document.createElement("span"); // Création d'un élément li
    NouvelMusiquespan.textContent = `Entrer la musique ` + nombreclicMusiqueSuivante + ``; // Définition de son contenu textuel

    NouvelMusiqueli.appendChild(NouvelMusiquespan); //On fait apparaitre les nouvelles musiques

    var zonedesaisiedesmusiquessuivantes = document.createElement("input"); //On défini  zonedesaisiedesmusiquessuivantes comme étant la zone où on rentre les musiques suivantes
    zonedesaisiedesmusiquessuivantes.type = "file";
    zonedesaisiedesmusiquessuivantes.name = `zonesaisiemusique` + nombreclicMusiqueSuivante + ``;
    zonedesaisiedesmusiquessuivantes.id = `zonesaisiemusique` + nombreclicMusiqueSuivante + ``;
    zonedesaisiedesmusiquessuivantes.required;

    NouvelMusiqueli.appendChild(zonedesaisiedesmusiquessuivantes);

    var boutonConfirmerMusiqueSuivante = document.createElement("button");
    boutonConfirmerMusiqueSuivante.setAttribute("type", "button");
    boutonConfirmerMusiqueSuivante.id = `ConfirmerMusique` + nombreclicMusiqueSuivante + ``; // Définition de l'identifiant du bouton musique suivante
    boutonConfirmerMusiqueSuivante.textContent = `ConfirmerMusique` + nombreclicMusiqueSuivante + ``; // Définition de son contenu textuel

    boutonConfirmerMusiqueSuivante.addEventListener("click", function (e) { //Quand on clique sur le bouton Musique suivante
        musicStore(`zonesaisiemusique` + nombreclicMusiqueSuivante); //On stocke la zone de saisie des musiques
        //				e.preventDefault();
    });
    console.log("suite boutonConfirmerMusiqueSuivante");
    NouvelMusiqueli.appendChild(boutonConfirmerMusiqueSuivante);

    NouvelMusiqueli.appendChild(boutonMusiqueSuivante);


    document.getElementById("musicList").appendChild(NouvelMusiqueli); // Insertion du nouvel élément



    document.querySelector(`#zonesaisiemusique` + nombreclicMusiqueSuivante + ``).addEventListener('change', function () {

        alert(this.files[0].name);

    });

    NouvelMusiqueli.appendChild(boutonFileUpload);








    /* <button  type="button" name="FileUpload" id="FileUpload" >ChercherMusiqueOrdinateur</button> <!-- Bouton File upload pour chercher une musique oklm -->  */

    //On crée alors une div Musique 2 puis 3 puis 4 puis 5 puis etc

});

window.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('CompteOuPas').style.display = 'none' //Faire disparaître la div CompteOuPas
    document.getElementById('OuiCompte').style.display = 'none' //Faire disparaître la div OuiCompte
    document.getElementById('PasCompte').style.display = 'none' //Faire disparaître la div PasCompte
});

var pauseMentale = document.getElementById("pauseMentale");
var finPauseMentale = document.getElementById("finPause");

pauseMentale.addEventListener("click", function () {
    console.log("pauseMental.click");
    document.getElementById('pauseMentale').style.display = 'none';
    document.getElementById('divPause').style.display = 'flex';
    document.getElementById('divPause').style.fontSize = '2em';
    document.getElementById('finPause').style.width = '20%';
    document.getElementById('finPause').style.marginLeft = '40%';

    console.log("je met en pause " + pause);
    clearInterval(intervalID);
    pause = 1;


    //  pauseMentale.
});
finPauseMentale.addEventListener("click", function () {
    console.log("FinpauseMental.click");
    document.getElementById('pauseMentale').style.display = 'inline';
    document.getElementById('divPause').style.display = 'none';
    console.log("je retire la pause " + pause);
    intervalID = setInterval(chronoStart, 1000);
    pause = 0;







    //  pauseMentale.
});









