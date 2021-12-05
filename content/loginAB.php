<?php
//login vorm Andmebaasis salvestatud kasutajanimega ja paaroliga
session_start();
if (isset($_SESSION['tuvastamine'])){
    header('Location: kommentaar.php');
    exit();

}
//kontroll kas login vorm on täidetud?
if (!empty($_POST['login']) && !empty($_POST['pass'])) {
    $login = $_POST['login'];
    $pass = $_POST['pass'];

    $sool = 'vagavagatekst';
    $krypt = crypt($pass, $sool);
    // kontrollime kas andmebaasis on selline kasutaja
    require('conf.php');
    global $yhendus;
    $kask = $yhendus->prepare("SELECT nimi, onAdmin, koduleht FROM kasutajad WHERE nimi=? AND parool=?");
    $kask->bind_param("ss", $login, $krypt);
    $kask->bind_result($nimi, $onAdmin, $koduleht);
    $kask->execute();

    if ($kask->fetch()) {
        $_SESSION['tuvastamine'] = 'niilihtne';
        $_SESSION['kasutaja'] = $nimi;
        $_SESSION['onAdmin'] = $onAdmin;
        if (isset($koduleht)) {
            header("Location: $koduleht");
        } else {
            header('Location: kontakt.php');
            exit();
        }
    }
    else {
        echo "kasutaja $nimi või parool $krypt on vale";
    }
}


?>
<!DOCTYPE html>
<html lang="et">
<head>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<h1>Login vorm</h1>
<form action="" method="post">
    Login:
    <input type="text" name="login" placeholder="kasutaja nimi">
    <br>
    Parool:
    <input type="password" name="pass">
    <br>
    <input type="submit" value="Logi sisse">
</form>
<br><br>
<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?">Tagasi</a>

</body>
</html>

<!--Table kasutajad-->
<!--CREATE TABLE kasutajad(
    id int not null primary key AUTO_INCREMENT,
    nimi varchar(10),
    parool varchar(200),
    onAdmin tinyint,
    koduleht varchar(100))-->


<!--Table kommentaar-->
<!--CREATE TABLE kommentaar(
KommentaarID int AUTO_INCREMENT PRIMARY KEY,
Kommentaar varchar(200),
Hinne int,
Nimi varchar(50),
Perenimi varchar(50)
)-->