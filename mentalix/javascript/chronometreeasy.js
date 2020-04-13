
		
		var minute = 0;
		var seconde = 0;
		var intervalID =0;
		var pause=0;
		 window.onload = initChrono; // Quand la fenêtre est chargé, le chrono commence 
		
		
		declencheur1 = document.getElementById("declencheur1");
		declencheur2 = document.getElementById("declencheur2");

	function initChrono()
	{
			var minute = 0;
			var seconde = 0;
			document.getElementById("secondes").textContent=seconde;
			document.getElementById("minutes").textContent=minute;		
	}
	
	function chronoStart(){
			
			console.log("declencheur intervalID : "+intervalID+ " min: "+minute+" sec: "+seconde);
			seconde=seconde+1;
			pause=0;
			if (seconde>59) { //Si seconde est plus grand que 59
				seconde=0; // On remet à 0 seconde
				minute=minute+1; //On ajoute une minute
			}
			document.getElementById("secondes").textContent=seconde;
			document.getElementById("minutes").textContent=minute;
		}
		
        function pauseChrono()
{
	console.log("pauseChrono");
	if(pause==0)
	{
		console.log("je met en pause "+pause);
		clearInterval(intervalID);
		pause=1;
		}
		else
		{
			console.log("je retire la pause "+pause);
			intervalID = setInterval(chronoStart,1000);
            pause=0;
			}
	    
}

		function fin()
		{
			clearInterval(intervalID);
			pause=1;
			
		}




		
		declencheur1.addEventListener("click", function (){
			intervalID = setInterval(chronoStart,1000);
			} );

		declencheur2.addEventListener("click", function (){
			intervalID = setInterval(chronoStart,1000);
			} );


