<?php
$serverinimi='localhost';
$kasutajanimi='nikitarim';
$parool='123456';
$andmebaasinimi='nikitarim';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset('UTF8');

/*
 * CREATE TABLE loomad(
    id int PRIMARY KEY AUTO_INCREMENT,
    nimi varchar(50),
    kirjeldus text);

Insert into loomad(nimi, kirjeldus)
values ('hiir', 'siia tuleb kirjeldus');

SELECT * FROM loomad*/
?>