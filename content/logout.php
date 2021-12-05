<?php
session_start();
if (!isset($_SESSION['tuvastamine'])){
    header('Location: loginAB.php');
    exit();

}
if (isset($_POST['logout'])){
    session_destroy();
    //aadressi reas avatakse login.php fail
    header('Location: loginAB.php');
    exit();//vexod iz if
}
?>
