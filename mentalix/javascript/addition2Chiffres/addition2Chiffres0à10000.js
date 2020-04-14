var nombre = document.getElementById('check');
nombre.addEventListener("click", function () {
    nb1 = Number(document.getElementById("nb1").textContent); // On lui dit d'afficher nb1 dans la zone nb1
    nb2 = Number(document.getElementById("nb2").textContent); // On lui dit d'afficher nb2 dans la zone nb2
    if (nb1 + nb2 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
    {
        document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
        calculScore(); // On appelle la fonction score
        document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
        //calculSuivant();
    } else //sinon
    {
        document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
        document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
        //calculSuivant();
    }

});

/*
var calculSuivant = document.getElementById('invisible');
calculSuivant.addEventListener("click", function () {
    document.getElementById('invisible').style.display = 'none'; //Le bouton devient invisible quand on clique sur le bouton calcul suivant
    document.getElementById("reponse").innerHTML = "<br />"; // On lui dit de ne plus afficher le vrai ou faux
    document.getElementById("texte").value = ""; //On lui dit de ne pas garder la réponse précédente que l'utilisateur a tapé
    document.getElementById('check').style.display = 'block' //On fait disparaître le bouton check
    var nb1 = Math.floor(Math.random() * 8); //On lui dit que nombre 1 est un nombre à tirer aléatoirement de 1 à 9
    var signe = "+"; // On lui dit de mettre le signe + entre nb1et nb2
    var nb2 = Math.floor(Math.random() * 8); //On lui dit que nombre 1 est un nombre à tirer aléatoirement de 1 à 9
    //document.getElementById("calcul").textContent = nb1 + signe + nb2; // On lui dit de nous afficher nb1 tiré aléatoirement + le signe+ et enfin nb2 tiré aléatoirement
    document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
    document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
    document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2*/

/*	do function random()&function nombre(event) //refait les fonctions de calculs aléatoires et de vérification de la réponse
			
			while onclick calculSuivant() // tant que le bouton calcul suivant est cliqué
            */

//});


function calculSuivant() { //La fonction calcul suivant
    document.getElementById('invisible').style.display = 'none'; //Le bouton devient invisible quand on clique sur le bouton calcul suivant
    document.getElementById("reponse").innerHTML = "<br />"; // On lui dit de ne plus afficher le vrai ou faux
    document.getElementById("texte").value = ""; //On lui dit de ne pas garder la réponse précédente que l'utilisateur a tapé
    document.getElementById('check').style.display = 'block' //On fait disparaître le bouton check
    var nb1 = Math.floor(Math.random() * 10001); //On lui dit que nombre 1 est un nombre à tirer aléatoirement de 1 à 10
    var signe = "+"; // On lui dit de mettre le signe + entre nb1et nb2
    var nb2 = Math.floor(Math.random() * 10001); //On lui dit que nombre 1 est un nombre à tirer aléatoirement de 1 à 10
    //document.getElementById("calcul").textContent=nb1 + signe + nb2; // On lui dit de nous afficher nb1 tiré aléatoirement + le signe+ et enfin nb2 tiré aléatoirement
    document.getElementById("nb1").textContent = nb1; // On lui dit d'afficher le nouveau nb1 dans la zone nb1
    document.getElementById("op").textContent = signe; // On lui dit d'afficher le signe d'opération + dans la zone op
    document.getElementById("nb2").textContent = nb2; // On lui dit d'afficher le nouveau nb2 dans la zone nb2

    /*			do function random()&function nombre(event) //refait les fonctions de calculs aléatoires et de vérification de la réponse
    			
    			while onclick calculSuivant() // tant que le bouton calcul suivant est cliqué
    */
}





// On passe au calcul suivant en cliquant sur le bouton calcul suivant


function calculScore() { //La fonction de calcul du score
    scoreCalcul = scoreCalcul + 1 //On ajoute 1 au score
    document.getElementById("score").textContent = scoreCalcul; //On balance la valeur de score dans la zone score

    //console.log("calculScore "+scoreCalcul);
};




//calculSuivant.addEventListener(function (){});


calculSuivant(); //On appelle la fonction calcul suivant

var boutonAntitriche = document.getElementById("check"); //On définit la variable bouton Antitriche qui ne s'active que quand le bouton check a été cliqué
boutonAntitriche.addEventListener("click", function vaEtVient() { //Quand on clique sur le bouton check on affiche clic on déclenche la variable boutonAntitriche ce qui déclenche la fonction vaEtVient. Flash spécial, click est un évènement!
        console.log("click + vaEtVient"); //On affiche le click dans la console
        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
            //document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
        } else { //Sinon
            //document.getElementById('invisible').style.display = 'none'; //Le bouton devient invisible quand on clique sur le bouton calcul suivant
        }
    } // Quand bouton check a été cliqué alors on fait apparaître le bouton sinon on le fait disparaître
    //console.log("clic");// Afficher clic à la console
);

var nbEnter = 0;

function entreeToCheck() {
    nbEnter = nbEnter + 1;
    if (nbEnter == 1) {
        nb1 = Number(document.getElementById("nb1").textContent); // On lui dit d'afficher nb1 dans la zone nb1
        nb2 = Number(document.getElementById("nb2").textContent); // On lui dit d'afficher nb2 dans la zone nb2
        if (nb1 + nb2 == document.getElementById("texte").value) // Si nb1+nb2 est bien le bon résultat
        {
            document.getElementById("reponse").textContent = "vrai"; //On lui affiche vrai
            calculScore(); // On appelle la fonction score
            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
            //calculSuivant();
        } else //sinon
        {
            document.getElementById("reponse").textContent = "faux"; //On lui affiche faux
            document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
            //calculSuivant();
        }

        if (document.getElementById('invisible').style.display == 'none') { //Si le bouton caché est invisible 
            //document.getElementById('check').style.display = 'none' //On fait disparaître le bouton check
            document.getElementById('invisible').style.display = 'block'; //Alors on le fait apparaître
        } else { //Sinon
            //document.getElementById('invisible').style.display = 'none'; //Le bouton devient invisible quand on clique sur le bouton calcul suivant
        }
    }
    
    if (nbEnter>1) {
            calculSuivant();
            nbEnter=0;
    }

    /*if (event.keyCode == 13)
        {
            calculSuivant();
        }*/

    //calculSuivant(); //On appelle la fonction calcul suivant

}; // Quand bouton check a été cliqué alors on fait apparaître le bouton sinon on le fait disparaître



//console.log("clic");// Afficher clic à la console




/*
      $(document).on("keypress", "texte", function(e){
        if(e.which == 13){
          var val = $(this).val();
          alert("Vous avez entré: " + val);
        }
      });
*/
