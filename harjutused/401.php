<?php
// andmed massiivis
$data=[
    "nimi"=> "Nikita Rimitsen",
    "aadress"=>"Sõpruse pst 184, Tallinn",
    "pilt"=> "images.png",
    "koduleht"=>"https://rimitsen20.thkit.ee/"
];
?>
<br>
<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?leht=algus">tagasi...Ülesannete leht</a>
<h1>Ülesanne 401/var 1</h1>
<p> <b>
        <?=$data["nimi"]?>
    </b></p>
<p><i>
        <?=$data["aadress"]?>
    </i></p>
<img src="<?=$data["pilt"]?>"alt="pildike">
<br>
<a href="<?=$data["koduleht"]?>"target="_blank">Rimitsen koduleht</a>
// massiiv array funktsiooniga
<h1>Ülesanne 401/var 2 - array() </h1>
<?php
$array=array("Nikita Rimitsen","Tallinn, Sõpruse pst 184", "images.png", "rimitsen20.thkit.ee/");
echo "<b>Nimi: ".$array[0]."</b><br>";
echo "<i>Aadress: ".$array[1]."</i><br>";
echo "<img src='$array[2]' alt='pildike'>";
echo "<br><a href='http://$array[3]'>Koduleht</a>"
?>


