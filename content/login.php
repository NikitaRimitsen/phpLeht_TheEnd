<?php
//login vorm koodis kirjutuda kasutajanimega ja paaroliga
session_start();
if (isset($_SESSION['tuvastamine'])){
    header('Location: puuLeht.php');
    exit();

}
//login ja pass kontroll
if (!empty($_POST['login']) && !empty($_POST['pass'])){
    $login=$_POST['login'];
    $pass=$_POST['pass'];
    if ($login=='admin' && $pass=='nikita'){
        $_SESSION['tuvastamine']='niilihtne';
        header('Location: puuLeht.php');
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
<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?">Tagasi</a>
<br>
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

</body>
</html>

<!--Table kasutajad-->
<!--CREATE TABLE kasutajad(
    id int not null primary key AUTO_INCREMENT,
    nimi varchar(10),
    parool varchar(200),
    onAdmin tinyint,
    koduleht varchar(100))-->