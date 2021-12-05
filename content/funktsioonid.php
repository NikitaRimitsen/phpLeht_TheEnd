<?php
// vanuse leidmine funktsioon
function getVanus(){
    echo '<form method="post" action="">';
    echo 'Palun sinu sünnipäev';
    echo '<input type="date" name="age">';
    echo '<input type="submit" name="arvuta" value="Arvuta vanus">';
    echo '</form>';
    if(isset($_POST['arvuta'])){
        $synd=$_POST['age'];
        $diff=date_diff(date_create($synd), date_create('16.11.2021'));
        echo '<br>';
        echo $diff->format('%y'). ' aastat vana';
    }
}
//talve koolivaheajani
function getKoolivaheajani(){
    $today=date('d.m.Y');
    $talv=date('20.12.2021');
    $diff=date_diff(date_create($today), date_create($talv));
    echo '<br>';
    echo 'Talve koolivaheajani on '.$diff->format('%a').' päeva ';

}

function getHooaeg(){
    // vastavalt tänase kuupäeva näitab hooaja pilti

    //piltide massiv
    $pildid=array(
        "sygis"=>"pildid/sygis.jpg",
        "talv"=>"pildid/talv.jpg",
        "kevad"=>"pildid/kevad.jpg",
        "suvi"=>"pildid/suvi.jpg");
    $paev=date('z');
    //sygis
    $sygis_algus=date("z", strtotime("September 1"));
    $sygis_lopp=date("z", strtotime("November 30"));
    //talv
    $talv_algus=date("z", strtotime("Detsember 1"));
    $talv_lopp=date("z", strtotime("Veebruar 28"));
    //kevad
    $kevad_algus=date("z", strtotime("Märts 1"));
    $kevad_lopp=date("z", strtotime("Mai 31"));
    //suvi

    //paev algus ja lõpu vahel
    if($paev>=$sygis_algus && $paev<=$sygis_lopp) :

        $hooaeg="sygis";
    elseif ($paev>=$talv_algus && $paev<=$talv_lopp) :
        $hooaeg="talv";
    elseif ($paev>=$kevad_algus && $paev<=$kevad_lopp) :
        $hooaeg="kevad";
    else : $hooaeg="suvi";
    endif;
    $hooajepilt=$pildid[$hooaeg];

    echo $hooajepilt;
}
?>