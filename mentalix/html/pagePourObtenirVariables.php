<!DOCTYPE html>
<!--On dit à l'ordinateur qu'n lui parle en html et non pas en chinois -->
<html lang="fr">
<!-- On dit à l'ordinateur que notre page web est en français -->


<head>
    <title> La page de transition de mentalix</title>
    <meta charset="UTF-8"> <!-- On dit à l'ordinateur qu'il sait comment interpréter les caractères spéciaux-->
    <link rel="stylesheet" href="../style/additionGenerique.css">
</head>

<div id="divGlobale">

    <form action="additionGenerique/additionGenerique.php" method="post" id="formTest">
        <div id="div1">

            <label for="nb-select">Combien de nombres?</label>

            <select name="nb" id="nbID">
                <option value="0">--Choisissez un nombre--</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>

        </div>

        <div id="div2">
            <label for="op-select">Quel opération?</label>

            <select name="op" id="opID">
                <option value="0" default>--Choisissez une opération--</option>
                <option value="addition">Addition</option>
                <option value="soustraction">Soustraction</option>
                <option value="multiplication">Multiplication</option>
                <option value="division">Division</option>
            </select>
        </div>


        <div id="divOptSoustraction">
            <div id="divPositive">
                <input type="checkbox" id="soustractionPositive" name="soustractionPositive" checked>
                <label for="positive">Positive</label>
            </div>
            <div id="divNegative">
                <input type="checkbox" id="soustractionNegative" name="soustractionNegative">
                <label for="negative">Négative</label>
            </div>
        </div>

        <div id="divOptDivison">
            <div id="divEuclidienne">
                <input type="checkbox" id="divisionEuclidienne" name="divisionEuclidienne" checked>
                <label for="euclidienne">Division Euclidienne</label>
            </div>
            <div id="divDecimale">
                <input type="checkbox" id="divisionDecimale" name="divisionDecimale">
                <label for="decimale">Division Décimale</label>
</div>
        </div>

        <div id="div3">
            <label for="nb1-select">Les nombres vont de </label>
            minimum:<input id = "nb1" min=0 type="number" name="number1" size=2 placeholder="0">:

            <label for="nb2-select">à </label>
            maximum:<input id = "nb2" min=1 type="number" name="number2" size=2 placeholder="10">

        </div>

        <div id="div4">
            <input type="submit" id="Go" value="Go">
        </div>


    </form>

    <div id="messageRougeNb" class="messageRouge">
        <p> Combien de nombres pour le calcul mental? </p>
    </div>

    <div id="messageRougeOp"  class="messageRouge">
        <p> Veuillez choisir une opération </p>
    </div>

    <div id="messageRougeNb1EtNb2"  class="messageRouge">
        <p> Veuillez choisir un intervalle pour les nombres   </p>
    </div>

    <div id="messageRougeNb1"  class="messageRouge">
        <p> Veuillez choisir le début de l'intervalle   </p>
    </div>

    <div id="messageRougeNb2"  class="messageRouge">
        <p> Veuillez choisir la fin de l'intervalle   </p>
    </div>

    <div id="messageRougeComparaisonEntreNb1EtNb2" class="messageRouge">
        <p> Erreur le début de l'intervalle est inférieure ou égale à la fin de l'intervalle   </p>
    </div>



</div>



<?php
?>

<p class="none" id="operationCalcul"><?=$OPERATION?></p>


<script src="../javascript/obtenirVariables.js"></script>


 </html>