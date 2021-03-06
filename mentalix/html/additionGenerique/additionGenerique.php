<html lang="fr">
<!-- On dit à l'ordinateur que notre page web est en français -->

<head>
    <!-- Début du code de l'entête -->
    <title> Aplication Mentalix</title>
    <meta charset="UTF-8"> <!-- On dit à l'ordinateur qu'il sait comment interpréter les caractères spéciaux-->
    <link rel="stylesheet" href="../../style/page_jeumathematrix.css" type="text/css"> <!-- Le lien vers le css -->
    <script src="../../javascript/jQuery.js"></script>
    <link rel="stylesheet" href="../../style/petiteResolution.css" type="text/css">
    <link rel="stylesheet" href="../../style/petiteResolution2.css" type="text/css">
</head> <!-- Fin du code de l'en tête -->

<body>
    <?php
        var_dump($_POST);
        ?>


    <!-- Le corps du site -->
    <section>
        <!-- Début du code de la partie du site excepté la bordure, ce qu'il y a en haut et en bas -->

        <article>
            <!-- Début du code de la partie du site excepté la bordure, ce qu'il y a en haut et en bas-->


           
            <div id="ambiance" class="filtrenoir">
                <h2> Ambiance Mathématique</h2> <!-- Le titre de la div ambiance -->
                <p>Ce site web propose une ambiance musicale pendant les calculs, souhaitez vous l'activer? Vous pouvez également proposer vos musiques.</p> <!-- Le paragraphe de la div ambiance -->
                <button class="petitbouton Activer" id="declencheur1" type="button" name="Activer" onclick="playAudio()">Activer</button> <!-- Bouton Activer quand on clique dessus déclenche l'évènement Activer et sur le bouton est écrit Activer -->
                <button class="petitbouton" type="button" name="ActiverMesMusiques" id="ActiverMesMusiques" onclick="ActiverMesMusiques()">Activer mes musiques</button> <!-- Bouton ActiverMesMusiques quand on clique dessus déclénche l'évènement ActiverMesMusiques et sur le bouton est écrit Activer Mes Musiques -->
                <button class="petitbouton" type="button" id="declencheur2" name="JeNenVeuxPas">Je N'en Veux Pas</button> <!-- Bouton JeN'enVeuxPas quand on clique dessus déclénche l'évènement JeN'enVeuxPas et sur le bouton est écrit JeN'enVeuxPas -->
            </div>


            <div id="CompteOuPas" class="filtrenoir">
                <p>Avez vous un compte?</p>
                <button class="petitbouton" type="button" name="Compte" id="Compte">Oui, j'ai un compte</button> <!-- Bouton Activer quand on clique dessus déclénche l'évènement Activer et sur le bouton est écrit Activer -->
                <button class="petitbouton" type="button" name="PasDeompte" id="PasDeCompte">Non, je n'ai pas de compte</button> <!-- Bouton Activer quand on clique dessus déclénche l'évènement Activer et sur le bouton est écrit Activer -->
            </div>

            <div id="OuiCompte" class="filtrenoir">
                <p>Si vous avez un compte alors les musiques seront joués dans l'ordre affiché de la playlist du compte. Si vous voulez modifier les musiques de la playlist connecter vous à votre compte </p>
            </div>


            <div id="PasCompte" class="filtrenoir">
                <p>C'est votre choix. Nous vous prévenons juste que vous pouvez afficher vos playlist sur le compte mais c'est vous qui décider si oui ou non vous voulez vous créer un compte.</p>
                <p>Donner ci-dessous le lien internet de vos musiques dans l'ordre que vous voulez: La première musique dans le premier champ sera la première à être joué et ainsi de suite</p>
                <form action="#" method="get" class="form-example">
                    <!-- On envoie le formulaire dans la page web elle même -->

                    <ul id="musicList">
                        <!-- Début de la zone des musiques -->


                        <li class="Musique1">
                            <!-- La ligne concernant la musique 1 -->
                            <span> Entrer la musique1 </span>
                            <input type="file" name="PremiereMusique" id="zonesaisiemusique1" multiple required>
                            <button type="button" name="Confirmer1" id="Confirmer">ConfirmerMusique1</button> <!-- Bouton Confirmer1 quand on clique dessus on confirme la première musique -->
                            <button type="button" name="MusiqueSuivante" id="MusiqueSuivante">MusiqueSuivante</button> <!-- Bouton Muisque suivante quand on clique dessus on passe à la première musique suivante -->


                        </li>



                    </ul> <!-- Fin de la zone des musiques -->


                    <div class="Envoyer">
                        <!-- Début de la zone Envoyer -->
                        <input type="submit" value="Envoyer!">
                    </div>
                </form>
                <button id="confirmerTout" type="button" name="Confirmer" onclick="Confirmer()">Confirmer</button> <!-- Bouton Activer quand on clique dessus déclénche l'évènement Activer et sur le bouton est écrit Activer -->
                <button class="petitbouton" type="button" name="RetourMusique" id="RetourMusique" onclick="RetourMusique()">Retour vers ambiance mathématique</button> <!-- Bouton Activer quand on clique dessus déclénche l'évènement Activer et sur le bouton est écrit Activer -->


            </div> <!-- Fin de la zone Envoyer -->

            <header>
                <!-- <a href="page_web.html"><img class="tourne" src="../Images/fleche_bleu.png" alt="" /></a> <!-- On lui dnne le lien du site vers où on veut aller ainsi que le lien de l'image du bouton retour qu'il faudra inverser et diminuer-->
                <!-- <input type = "image" src="/home/theophile/mathematrix/Images/fleche_bleu.png" value = "Retour vers le site MATHEMATRIX!"  onclick = "history.back()"> -->

                <div id="haut">

                    <div id="haut_gauche">

                        <a href="../../index.html"><img class="tourne" src="../../Images/fleche_bleu.png" alt="" /></a>
                        <h1 class="hauthaut"> MENTALIX </h1><!-- Le titre MATHEMATRIX -->

                    </div>

                    <a class="disparitionQuanTropPetit" href="../../index.html"><img class="tourne" src="../../Images/fleche_bleu.png" alt="" /></a>
                    <h1 class="hauthaut disparitionQuanTropPetit"> MENTALIX </h1><!-- Le titre MATHEMATRIX -->


                    <div id="haut_droite">
                        <h2> Score: </h2><span id="score">
                            <!-- Si le résultat est vrai alors on ajoute 1 au score--></span><!-- Le titre Score plus petit que MATHEMATRIX-->
                        <!-- La zone où on balance le score -->

                        <h2 id="byebyeh2">Chronomètre</h2> <!-- Le titre plus petit Chronomètre-->
                        <span id="minutes"></span><span><span id="deuxpointsbyebye">:</span></span><span id="secondes" class="droite"></span> <!-- On crée une zone minutes et une zones secondes pour injecter les secondes et les minutes dans le chronomètre -->
                        <p id="Yo">
                            <button id="pausebye" name="pauseChrono" onclick="pauseChrono()">Pause Chrono</button>
                            <button id="byebye" name="fin" onclick="fin()">Je ne veux plus te voir chrono</button> <!-- Bouton fin quand on clique dessus déclénche l'évènement fin et sur le bouton est écrit fin -->
                        </p>

                    </div>
                </div>

            </header>

            <div id="divPause" style="display: none;" class="filtrenoir">

                <p id="PauseParagrapheMentalus">Pause Mentale</p>

                <button id="finPause" name="finPause" onclick="finPause()">Fin de la pause mentale</button>


            </div>


            <h2>Calcul:</h2> <!-- Le titre Calcul plus petit que MATHEMATRIX-->
            <p id="calcul"> <span id="nb1"></span>      <span id="op"></span>     <span id="nb2"> </span>   <span id="op2"></span>    <span id="nb3"></span>             <span id="op3"></span> <span id="nb4"></span>  <span id="op4"></span>
            <span id="nb5"></span> <span id="op5"></span> <span id="nb6"></span> <span id="op6"> </span> <span id="nb7"></span> <span id="op7"></span> <span id="nb8"></span> <span id="op8"></span> <span id="nb9"></span></p> <!-- La zone où on balance le nombre 1 le signe et le nombre 2 -->

            <h3>Réponse:</h3>
            <!--La partie écrite réponse -->
            <input onKeyPress="if (event.keyCode == 13) entreeToCheck()" type="text" id="texte" /> <!-- La zone où on peut écrire nôtre réponse à l'intérieur-->
            <button id="check" name="check">Check</button> <!-- Le bouton pour vérifier la réponse et qui répond par vrai ou faux -->

            <h2> Vérification de la réponse:</h2> <!-- la zone de vérification de la réponse -->
            <p id="reponse"> <br /> </p> <!-- La zone où on balance la réponse vraie ou faux -->

            <button style="display:none;" id="invisible" class="calculSuivant" name="suivant" onclick="calculSuivant()">Calcul suivant</button> <!-- Le calcul suivant -->

            <button id="pause" name="pause">Pause</button> <!-- Le bouton pause -->
            <button id="musiqueMaëstro" name="musiqueMaëstro">Musique Maëstro</button> <!-- Le bouton pause -->


            <audio id="myAudio" src="../../musique/01.Forever%20Bound%20-%20Stereo%20Madness.mp3"></audio>

            <button id="boutonVisibleApllicationBasPauseAudio" onclick="pauseAudio()" type="button">Pause Audio</button>

            <button id="boutonVisibleApllicationBasReprendreLaMusique" type="button" name="Activer" class="Activer" onclick="playAudio()">Reprendre la musique</button> <!-- Bouton Activer quand on clique dessus déclénche l'évènement Activer et sur le bouton est écrit Activer -->

            <button id="pauseMentale"> Pause mentale</button>


        </article> <!-- Fin du code javascript de la partie vrai ou faux concernat la vérification du résultat donner par l'utilisateur -->
    </section> <!-- Fin du code de la partie du site excepté la bordure, ce qu'il y a en haut et en bas -->

    <?php

        var_dump($_POST['entierOuDecimale']);

        
        if(strcmp($_POST['entierOuDecimale'],"Entier")==0){
            $entier=$_POST['entierOuDecimale'];
            $decimale="undefined";
        }
        else if (strcmp($_POST['entierOuDecimale'],"Decimale")==0){
            $decimale=$_POST['entierOuDecimale'];
            $entier="undefined";
        }
        else{
            $entier=$_POST['entierOuDecimale'];
            $decimale="undefined";
        }
        $NOMBRE=$_POST['nb'];
        $MINIMUM=$_POST['number1'];
        $MAXIMUM=$_POST['number2'];
        $OPERATION=$_POST['op'];
        switch ($OPERATION){
            case "addition":
                $soustractionPositivePHP="undefined";
                $soustractionNegativePHP="undefined";
                $divisionEuclidiennePHP="undefined";
                $divisionDecimalePHP="undefined";
            break;

        
            case "soustraction":


                if($_POST['soustractionPositiveOuNegativePHP'] == "positive"){
                    $soustractionPositivePHP=$_POST['soustractionPositieOuNegative'];
                    $soustractionNegativePHP="undefined";
                    $divisionEuclidiennePHP="undefined";
                    $divisionDecimalePHP="undefined";
                }
                else if($_POST['soustractionPositiveOuNegativePHP'] == "negative"){
                    $soustractionPositivePHP="undefined";
                    $soustractionNegativePHP=$_POST['soustractionPositieOuNegative'];
                    $divisionEuclidiennePHP="undefined";
                    $divisionDecimalePHP="undefined";
                }
                else{
                    $soustractionPositivePHP=$_POST['soustractionPositieOuNegative'];
                    $soustractionNegativePHP="undefined";
                    $divisionEuclidiennePHP="undefined";
                    $divisionDecimalePHP="undefined";
                }
            break;

            case "multiplication":
            break;

            case "division":
                if($_POST['soustractionPositiveOuNegativePHP'] == "euclidienne"){
                    $soustractionPositivePHP="undefined";
                    $soustractionNegativePHP="undefined";
                    $divisionEuclidiennePHP=$_POST['divisionEuclidienneOuDecimale'];
                    $divisionDecimalePHP="undefined";

                }
                else if ($_POST['soustractionPositiveOuNegativePHP'] == "decimale"){
                    $soustractionPositivePHP="undefined";
                    $soustractionNegativePHP="undefined";
                    $divisionEuclidiennePHP="undefined";
                    $divisionDecimalePHP=$_POST['divisionEuclidienneOuDecimale'];
                }

                else{
                    $soustractionPositivePHP="undefined";
                    $soustractionNegativePHP="undefined";
                    $divisionEuclidiennePHP=$_POST['divisionEuclidienneOuDecimale'];
                    $divisionDecimalePHP="undefined";
                }
            break;

        }
    ?>
    <p class="none" id="entierOPTBYPHP"> <?=$entier?> </p>
    <p class="none" id="decimaleOPTBYPHP"> <?=$decimale?> </p>
    <p class="none" id="nombre"> <?=$NOMBRE?> </p>
    <p class="none" id="minimumIntervalle"><?=$MINIMUM?></p>
    <p class="none" id="maximumIntervalle"><?=$MAXIMUM?></p>
    <p class="none" id="operationCalcul"><?=$OPERATION?></p>
    <p class="none" id="soustractionPositiveOBTBYPHP"><?=$soustractionPositivePHP?></p>
    <p class="none" id="soustractionNegativeOBTBYPHP"><?=$soustractionNegativePHP?></p>
    <p class="none" id="divisionEuclidienneOBTBYPHP"><?=$divisionEuclidiennePHP?></p>
    <p class="none" id="divisionDecimaleOBTBYPHP"><?=$divisionDecimalePHP?></p>

    <script src="../../javascript/filtreNoir.js"> </script> <!-- Fin du code javascript pour tout le site -->
    <script src="../../javascript/chronometreeasy.js"></script> <!-- Le lien vers la partie chronomètre -->
    <script src="../../javascript/additionGénérique/additionGenerique.js"></script> <!-- Le lien javascript vers la partie calcul -->
    <script src="../../javascript/musique.js"></script> <!-- Le lien javascript vers la partie musique -->


</body> <!-- Fin du code du corps du site -->


</html> <!-- Fin du code du site-->
