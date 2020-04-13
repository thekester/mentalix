function musicStore(idElement) { //Déclenchement de la fonction Confirmer lors du clic des bouton Confirmer
console.log("musicStore :"+idElement);
	var musicAlert = document.getElementById(idElement);
    localStorage.setItem(idElement, musicAlert.value);
    console.log("musicalert :"+musicAlert);
   console.log("musicAlert.value :"+musicAlert.value);
//   alert("Vous avez entrés la musique: " + musicAlert.value + " Veuillez cliquer sur le bouton ok pour confirmer");
    }

		function playAudio() {
								document.getElementById('ambiance').style.display = 'none' //Faire disparaître la div ambiance
								document.getElementById('CompteOuPas').style.display = 'none' //Faire disparaître la div CompteOuPas
								document.getElementById('OuiCompte').style.display = 'none' //Faire disparaître la div OuiCompte
								document.getElementById('PasCompte').style.display = 'none' //Faire disparaître la div PasCompte
								x.play();  //On joue la musique
		}
		
		function pauseAudio(){
			x.pause(); //On met sur pause la musique
		}
		
		function ActiverMesMusiques() {
			document.getElementById('ambiance').style.display = 'none' //Faire disparaître la div ambiance
			document.getElementById('CompteOuPas').style.display = 'flex' //Faire disparaître la div CompteOuPas

			//Faire apparaitre dans la div deux boutons: un bouton compte et l'auttre pas de compte. Créer aussi un bouton annuler.
			// Si on clique sur le bouton pas de compte alors on fait apparaitre la div pas de compte qui propose d'en créer un ou non puis après on propose la div pas de compte musique où l'utilisateur donne les liens des musiques qu'il veut!
		}


function RetourMusique() {
								document.getElementById('ambiance').style.display = 'flex' //Faire disparaître la div ambiance
								document.getElementById('CompteOuPas').style.display = 'none' //Faire disparaître la div CompteOuPas
								document.getElementById('OuiCompte').style.display = 'none' //Faire disparaître la div OuiCompte
								document.getElementById('PasCompte').style.display = 'none' //Faire disparaître la div PasCompte
}



var musicid =  document.getElementById("Confirmer");

musicid.addEventListener("click", function () { //Déclenchement de la fonction Confirmer lors du clic des bouton Confirmer
musicStore("zonesaisiemusique1"); // On stocke la musique
    });

