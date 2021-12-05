<?php
require ('conf.php'); //require - запрашиваем
?>

<!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Andmetabeli sisu näitamine</title>
</head>
<body>
<h1>
    Andmetabeli "Loomad" sisu näitamine
</h1>
<?php
global $yhendus;
//tabeli sisu näitamine
$kask=$yhendus->prepare("SELECT id, nimi, kirjeldus FROM loomad");
$kask->bind_result($id, $nimi, $kirjeldus);
$kask->execute();
echo "<table>";
echo "<tr>
<th>id</th>
<th>Loomanimi</th>
<th>Kirjeldus</th>
</tr>";
//fetch() - извлечение данных из набора данных
while($kask->fetch()){
    echo "<tr>";
    echo "<td>$id</td>";
    echo "<td>$nimi</td>";
    echo "<td>$kirjeldus</td>";
    echo "</tr>";
}
echo "</table>";

?>

</body>
</html>
