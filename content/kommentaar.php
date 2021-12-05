<?php
require ('conf.php'); //require - запрашиваем
function clearVarsExcept($url, $varname){
    return strtok(basename($_SERVER['REQUEST_URI']), "?")."?$varname=".$_REQUEST[$varname];
}
session_start();
if (!isset($_SESSION['tuvastamine'])){//!-не / ne
    header('Location: kommentaar.php');
    exit();

}

global $yhendus;
//lisamine INSERT INTO
if(!empty($_REQUEST['kommentnimi'])){
    $kask=$yhendus->prepare('INSERT INTO kommentaar(Kommentaar, Hinne, Nimi, Perenimi)
VALUES (?, ?, ?, ?)');

    $kask->bind_param("ssss", $_REQUEST['kommentnimi'], $_REQUEST['hinn'], $_REQUEST['nim'], $_REQUEST['perenim']);
    $kask->execute();
// изменяет адресную строку
    //$_SERVER[PHP_SELF] - до имени файла
    header("Location:" .basename($_SERVER['REQUEST_URI']));

}
if(isset($_REQUEST['kustuta'])){
    $kask=$yhendus->prepare('DELETE FROM kommentaar WHERE KommentaarID=?');
    $kask->bind_param("i",$_REQUEST['kustuta']);
    $kask->execute();
}

?>

<!DOCTYPE html>
<html lang="et">
<head>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <meta charset="UTF-8">
    <title>Kommentaar</title>
</head>
<body>
<div>
    <!--<p><?php $_SESSION["kasutaja"]?> on sisse logitud</p>-->
    <form action="logout.php" method="post">
        <input type="submit" value="Logi välja" name="logout">
    </form>
</div>
<h1>
    Andmetabeli "Koomentaar" sisu näitamine
</h1>
<div >
    <?php
    global $yhendus;
    //tabeli sisu näitamine
    $kask=$yhendus->prepare("SELECT KommentaarID, Kommentaar, Hinne, Nimi, Perenimi FROM kommentaar");
    $kask->bind_result($Kommentaarid, $Kommentaar, $Hinne, $Nimi, $Perenimi);
    $kask->execute();
    echo "<table>";
    echo "<tr>
<th>id</th>
<th>Kommentaar</th>
<th>Hinne</th>
<th>Nimi</th>
<th>Perenimi</th>";
    if($_SESSION['onAdmin']==1) {
        echo "<th>Kustuta</th>
</tr>";
    }
    //fetch() - извлечение данных из набора данных
    while($kask->fetch()){
        echo "<tr>";
        echo "<td>$Kommentaarid</td>";
        echo "<td>$Kommentaar</td>";
        echo "<td>$Hinne</td>";
        echo "<td>$Nimi</td>";
        echo "<td>$Perenimi</td>";
        if($_SESSION['onAdmin']==1){
            echo "<td><a href='".clearVarsExcept(basename($_SERVER['REQUEST_URI']), "leht")."&kustuta=$Kommentaarid'>Kustuta</a></td>";
        }
        echo "</tr>";
    }
    echo "</table>";

    ?>

    <?php if($_SESSION['onAdmin']==1) { ?>
        <div>
            <form action="<?=clearVarsExcept(basename($_SERVER['REQUEST_URI']), 'leht')?>" method="post">
                <label for="kommentnimi">Kommentaar</label>
                <br>
                <input type="text" name="kommentnimi" id="kommentnimi">
                <br>

                <label for="hinn">Hinne</label>
                <br>
                <input type="text" name="hinn" id="hinn">
                <br>

                <label for="nim">Nimi</label>
                <br>
                <input type="text" name="nim" id="nim">
                <br>

                <label for="perenim">Perenimi</label>
                <br>
                <input type="text" name="perenim" id="perenim">
                <br><br>

                <input type="submit" value="Lisa">
            </form>
        </div>
    <?php }?>
</div>

<?php
$yhendus->close();
?>
</body>
</html>