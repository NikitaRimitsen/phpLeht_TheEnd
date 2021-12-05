
<br>
<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?leht=algus">tagasi...Ülesannete leht</a>
<h1>Ülesanne 403</h1>
<?php
//ilusad värvi nimed massiivis
$varv=array('Gold', 'DarkGrey', 'MidnightBlue', 'SaddleBrown', 'LightSeaGreen', 'LightBlue', 'YellowGreen', 'GoldenRod', 'DarkSeaGreen', 'DarkKhaki', 'DarkOrange', 'FireBrick', 'Coral', 'Navy', 'Aquamarine',);
//tsükliga kuvame värvid massiivist
for ($i = 0; $i <15; $i++){
    echo"<span style='color: $varv[$i]'>$varv[$i]</span><br>";
}
?>
