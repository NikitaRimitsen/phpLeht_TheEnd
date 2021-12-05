<?php
$parool='admin';
$sool='vagavagatekst';
$krypt=crypt($parool, $sool);
echo $krypt;
