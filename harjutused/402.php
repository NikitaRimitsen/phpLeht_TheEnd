
<br>
<a href="https://rimitsen20.thkit.ee/phpLeht/index.php?leht=algus">tagasi...Ülesannete leht</a>
<h1>Ülesanne 402</h1>
<h2>1. 20 Checkbox tsükliga</h2>
<?php
    $i=1;
    while ($i<=20){
        echo "<input type='checkbox' id='$i' 'name='box[]' value='$i'>";
        echo "<label for='$i'>box ".$i."</label><br>";
        $i++;
    }
?>
<h2>2. 20 Tekstkasti tsükliga</h2>
<?php
    $u=1;
    while ($u<=20){
        echo "<input type='text' id=t'$u' name='cell[]' value='$u'>";
        echo  "<label for=t'$u'>cell ".$u."</label><br>";
    $u++;
}
?>
<h2>2. 20 Radionupud tsükliga</h2>
<?php
    $a=1;
    while ($a<=20){
        echo "<input type='radio' id=r'$a' name='value[]' value='$a'>";
        echo  "<label for=r'$a'>value ".$a."</label><br>";
        $a++;
    }
?>
