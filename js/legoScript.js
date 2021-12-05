function kustutamine(){
    var lego=document.getElementById("lego").getContext("2d");
    lego.clearRect(0, 0, 500, 400);
}

function joonista(){
    var lego=document.getElementById("lego").getContext("2d");
}

function jalad(){
    var jala=document.getElementById("lego").getContext("2d");
    var r=jala;
    jala.fillStyle="yellow";
    jala.fillRect(100, 135, 20, 15); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
    jala.fillRect(140, 135, 20, 15); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/

    r.fillStyle="#FFD700"
    r.fillRect(100, 143, 20, 8); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
    r.fillRect(140, 143, 20, 8); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
}


function keha(){
    var lego=document.getElementById("lego").getContext("2d");
    var a=lego;
    var f=a;
    lego.fillStyle="#3CB371";
    lego.fillRect(95, 120, 70, 15); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/

    a.beginPath();
    a.strokeStyle = "#3CB371";
    a.moveTo(96,120); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    a.lineTo(96, 110); //x, y رپذ»ذµذ²ذ¾
    a.lineTo(110, 85); //x, y رپذ»ذµذ²ذ¾-ذ½ذ°ذ²ذµر€ر…
    a.lineTo(150, 85); //x, y ذ²ذ²ذµر€ر…
    a.lineTo(164, 110); //x, y رپذ؟ر€ذ°ذ²ذ°-ذ²ذ½ذ¸ذ·
    a.lineTo(164, 120); //x, y رپذ؟ر€ذ°ذ²ذ°
    a.lineTo(96, 120); //x, y ذ²ذ½ذ¸ذ·
    a.fillStyle="#3CB371";
    a.fill(); //رپذ¾ذµذ´ذ¸ذ½رڈذµر‚ ذ²رپذµ ذ»ذ¸ذ½ذ¸ذ¸ ذ² ذ¾ذ´ذ½ذ¾ ر†ذµذ»ذ¾ذµ
    a.stroke();

    f.fillStyle="#32CD32";
    f.fillRect(109, 79, 42, 6); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/

}

function kuunarvarre(){
    var kasi1=document.getElementById("lego").getContext("2d");
    var kasi2=kasi1;
    //vasakule kأ¤si (ذ»ذµذ²ذ°رڈ ر€رƒذ؛ذ°)
    kasi1.fillStyle="#3CB371";
    kasi1.fillRect(80, 87, 30, 10); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
    kasi1.fillRect(80, 87, 10, 20); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
    //ذ؟ر€ذ°ذ²ذ°رڈ ر€رƒذ؛ذ°
    kasi2.fillRect(150, 87, 30, 10); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
    kasi2.fillRect(170, 87, 10, 20); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/


}

function kael(){
    var kael=document.getElementById("lego").getContext("2d");
    kael.fillStyle="yellow";
    kael.fillRect(123, 73, 15, 6); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/

}

function pea(){
    var pea=document.getElementById("lego").getContext("2d");
    pea.strokeStyle = "yellow";
    pea.fillStyle="yellow";
    pea.beginPath();
    pea.arc(131, 55, 20, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    pea.fill();
    pea.stroke();

}

function silm(){
    var silm=document.getElementById("lego").getContext("2d");
    var silm2=silm
    var zracok1=silm
    var zracok2=silm
    silm.strokeStyle = "white";
    silm.fillStyle="white";
    silm.beginPath();
    silm.arc(122, 55, 5, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    silm.fill();
    silm.stroke();

    silm2.strokeStyle = "white";
    silm2.fillStyle="white";
    silm2.beginPath();
    silm2.arc(140, 55, 5, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    silm2.fill();
    silm2.stroke();

    zracok1.strokeStyle = "black";
    zracok1.fillStyle="black";
    zracok1.beginPath();
    zracok1.arc(122, 55, 1, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    zracok1.fill();
    zracok1.stroke();

    zracok2.strokeStyle = "black";
    zracok2.fillStyle="black";
    zracok2.beginPath();
    zracok2.arc(140, 55, 1, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    zracok2.fill();
    zracok2.stroke();
}


function suu(){
    var suu=document.getElementById("lego").getContext("2d");
    suu.beginPath();
    suu.strokeStyle = "black";
    suu.moveTo(120,65); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    suu.lineTo(123, 68); //x, y رپذ»ذµذ²ذ¾
    suu.lineTo(139, 68); //x, y ذ½ذ¸ذ·
    suu.lineTo(142, 65); //x, y ذ½ذ¸ذ·

    suu.stroke();


}

function ripsmed(){
    var ripsmed=document.getElementById("lego").getContext("2d");
    var ripsmed2=ripsmed;
    var ripsmed3=ripsmed;
    var ripsmed4=ripsmed;
    var ripsmed5=ripsmed;
    var ripsmed6=ripsmed;

    ripsmed.beginPath();
    ripsmed.strokeStyle = "black";
    ripsmed.moveTo(120, 50); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    ripsmed.lineTo(118, 45);
    ripsmed.stroke();

    ripsmed2.beginPath();
    ripsmed2.strokeStyle = "black";
    ripsmed2.moveTo(122, 50); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    ripsmed2.lineTo(122, 44);
    ripsmed2.stroke();

    ripsmed3.beginPath();
    ripsmed3.strokeStyle = "black";
    ripsmed3.moveTo(124, 50); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    ripsmed3.lineTo(126, 44);
    ripsmed3.stroke();

    ripsmed4.beginPath();
    ripsmed4.strokeStyle = "black";
    ripsmed4.moveTo(138, 50); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    ripsmed4.lineTo(136, 45);
    ripsmed4.stroke();

    ripsmed5.beginPath();
    ripsmed5.strokeStyle = "black";
    ripsmed5.moveTo(140, 50); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    ripsmed5.lineTo(140, 44);
    ripsmed5.stroke();

    ripsmed6.beginPath();
    ripsmed6.strokeStyle = "black";
    ripsmed6.moveTo(142, 50); //x, y alguspunkt(ذ½ذ°ر‡ذ°ذ»ذ¾)
    ripsmed6.lineTo(144, 45);
    ripsmed6.stroke();

}

function hair(){
    var hair=document.getElementById("lego").getContext("2d");
    var hair2=hair;
    var hair3=hair;
    var hair4=hair;
    var hair5=hair;
    var hair6=hair;
    var hair7=hair;
    var hair8=hair;
    var hair9=hair;
    var hairsleva=hair;
    var hairsprava=hair;

    hair.strokeStyle = "blue";
    hair.fillStyle="blue";
    hair.beginPath();
    hair.arc(120, 35, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair.fill();
    hair.stroke();

    hair2.strokeStyle = "blue";
    hair2.fillStyle="blue";
    hair2.beginPath();
    hair2.arc(132, 35, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair2.fill();
    hair2.stroke();

    hair3.strokeStyle = "blue";
    hair3.fillStyle="blue";
    hair3.beginPath();
    hair3.arc(142, 35, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair3.fill();
    hair3.stroke();

    hair4.strokeStyle = "blue";
    hair4.fillStyle="blue";
    hair4.beginPath();
    hair4.arc(120, 25, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair4.fill();
    hair4.stroke();

    hair5.strokeStyle = "blue";
    hair5.fillStyle="blue";
    hair5.beginPath();
    hair5.arc(132, 25, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair5.fill();
    hair5.stroke();

    hair6.strokeStyle = "blue";
    hair6.fillStyle="blue";
    hair6.beginPath();
    hair6.arc(142, 25, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair6.fill();
    hair6.stroke();

    hair7.strokeStyle = "blue";
    hair7.fillStyle="blue";
    hair7.beginPath();
    hair7.arc(120, 15, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair7.fill();
    hair7.stroke();

    hair8.strokeStyle = "blue";
    hair8.fillStyle="blue";
    hair8.beginPath();
    hair8.arc(132, 15, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair8.fill();
    hair8.stroke();

    hair9.strokeStyle = "blue";
    hair9.fillStyle="blue";
    hair9.beginPath();
    hair9.arc(142, 15, 7, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hair9.fill();
    hair9.stroke();

    hairsleva.strokeStyle = "blue";
    hairsleva.fillStyle="blue";
    hairsleva.beginPath();
    hairsleva.arc(112, 42, 5, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hairsleva.fill();
    hairsleva.stroke();

    hairsprava.strokeStyle = "blue";
    hairsprava.fillStyle="blue";
    hairsprava.beginPath();
    hairsprava.arc(150, 42, 5, 0, 2*Math.PI, true);//x, y, R, arc-dug4
    hairsprava.fill();
    hairsprava.stroke();
}

function kasi(){
    var kasi=document.getElementById("lego").getContext("2d");
    var kasi1=kasi;
    var kasi2=kasi;

    kasi.fillStyle="yellow";
    /*kasi left*/
    kasi.fillRect(82, 107, 5, 6); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/
    /*kasi right*/
    kasi.fillRect(173, 107, 5, 6); /*lego.fillRect(x, y, رˆذ¸ر€ذ¸ذ½ذ°,  ذ²ر‹رپذ¾ر‚ذ°)*/

    kasi1.strokeStyle = "yellow";
    kasi1.beginPath();
    kasi1.arc(84.5, 119, 6, 0, 1*Math.PI, true);//x, y, R, arc-dug4
    kasi1.stroke();


    kasi2.strokeStyle = "yellow";
    kasi2.beginPath();
    kasi2.arc(175.5, 119, 6, 0, 1*Math.PI, true);//x, y, R, arc-dug4
    kasi2.stroke();
}

function nina(){
    var nina=document.getElementById("lego").getContext("2d");

    nina.strokeStyle = "#FFD700";
    nina.fillStyle="yellow";
    nina.beginPath();
    nina.arc(131, 60, 2, 0, 2*Math.PI, true);
    nina.fill();
    nina.stroke();
}

function helmed(){
    var helmed=document.getElementById("lego").getContext("2d");

    helmed.strokeStyle = "#ffffff00";
    helmed.fillStyle="red";
    helmed.beginPath();
    helmed.arc(113, 83, 4, 0, 2*Math.PI, true);
    helmed.arc(120, 84, 4, 0, 2*Math.PI, true);
    helmed.arc(127, 85, 4, 0, 2*Math.PI, true);
    helmed.arc(134, 85, 4, 0, 2*Math.PI, true);
    helmed.arc(141, 84, 4, 0, 2*Math.PI, true);
    helmed.arc(148, 83, 4, 0, 2*Math.PI, true);
    helmed.fill();
    helmed.stroke();
}


function joonista(){
    jalad();
    keha();
    kuunarvarre();
    kael();
    pea();
    silm();
    suu();
    ripsmed();
    hair();
    kasi();
    nina();
    helmed();
}