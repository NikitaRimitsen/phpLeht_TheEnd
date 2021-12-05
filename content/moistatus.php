<?php
echo "<section>";
echo "<h3>Arva ära kaks arvu!</h3>";
$arv1=3;
$arv2=15;
//kahe arvude liitmine +
echo "Kui liidame kokku, vastus on ".($arv1+$arv2);
echo "<br>";
//jagamine
echo "Kui esimene arv jagame teise arvuga, siis vastuseks ".($arv1/$arv2);
// esimene arv ruudus
echo "<br>";
echo "Esimene arv ruudus on ". pow($arv1, 2);
echo "<br>";
// lahutamine
echo "Kui teisest arvust lahutada esimene, siis vastus on ".($arv1-$arv2);
echo "<br>";
// korrutis
echo "Kahe arvude korrutis = ".($arv1*$arv2);
echo "<br>";
echo "</section>";
echo "<section>";
echo "<h2> Arva ära EESTI LINNANIMI</h2>";
echo "<br>";
$nimi="Tapa";
// esimene täht
echo "<br>Linnanimi pikkus - ".strlen($nimi);
echo "<br>Linnanimi 1.täht - ".substr($nimi, 0, 1);
echo "<br>Linnanimi segab tähemärke - ".$shuffled = str_shuffle($nimi);
echo "<br>Linnanimi pöörab tagurpidi- ".strrev($nimi);
echo "<br><br>";
echo "<a href='harjutused/vastus.php'> Õiged vastused</a>";
echo "</section>";
?>

