<?php
require ('conf.php'); //require - запрашиваем

global $yhendus;
//lisamine INSERT INTO
if(!empty($_REQUEST['kommentnimi'])){
    $kask=$yhendus->prepare('INSERT INTO kommentaar(Kommentaar, Hinne)
VALUES (?, ?');
//"s" - string
// $_REQUEST['loomanimi'] - запрос в текстовый ящик input name="loomanimi"
    $kask->bind_param("ss", $_REQUEST['kommentnimi'], $_REQUEST['hinn']);
    $kask->execute();
// изменяет адресную строку
    //$_SERVER[PHP_SELF] - до имени файла
    header("Location:" .basename($_SERVER['REQUEST_URI']));
}



?>

<!DOCTYPE html>
<html lang="et">
<head>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <meta charset="UTF-8">
    <title>Andmetabeli sisu näitamine</title>
</head>
<body>
<h1>
    Andmetabeli "Test" sisu näitamine
</h1>
<?php
global $yhendus;
//tabeli sisu näitamine
$kask=$yhendus->prepare("SELECT KommentaarID, Kommentaar, Hinne FROM kommentaar");
$kask->bind_result($Kommentaarid, $Kommentaar, $Hinne);
$kask->execute();
echo "<table>";
echo "<tr>
<th>id</th>
<th>Kommentaar</th>
<th>Hinne</th>

</tr>";
//fetch() - извлечение данных из набора данных
while($kask->fetch()){
    echo "<tr>";
    echo "<td>$Kommentaarid</td>";
    echo "<td>$Kommentaar</td>";
    echo "<td>$Hinne</td>";

    echo "</tr>";
}
echo "</table>";

?>

<br><br>
<div ">
<form action="" method="post" >
    <label for="kommentnimi">Kommentaar</label>
    <br>
    <input type="text" name="kommentnimi" id="kommentnimi">
    <br>

    <label for="hinn">Hinne</label>
    <br>
    <input type="text" name="hinn" id="hinn">
    <br><br>


    <input type="submit" value="Lisa">
    <!--<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?leht=lisamineNaitamine" class="btn">Переход по ссылке</a>-->
</form>
</div>
<?php
$yhendus->close();
?>

</body>
</html>