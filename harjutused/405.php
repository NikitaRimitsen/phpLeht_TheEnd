<style>
    table,td{
        border: solid 2px;
        padding: 10px;
        text-align: center;
    }
    tr{
        background-color: lightgoldenrodyellow;
    }
</style>
<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?leht=algus">tagasi...Ülesannete leht</a>
<h1>Ülesanne 405 - Korrustutabel 2 tsükliga</h1>
<?php
    echo "<table>";
    for($i=1; $i<=10; $i++){
        echo "<tr>";
        for($j=1; $j<=10; $j++){

            $val=$i*$j;

            echo "<td>".$val."</td>";
        }
        echo "</tr>";
    }

    echo "</table>";

?>
