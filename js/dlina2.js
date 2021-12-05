var resenie=document.getElementById("resenie");
var otvet=document.getElementById("otvet");

var resenie2=document.getElementById("resenie2");
var otvet2=document.getElementById("otvet2");

var resenie3=document.getElementById("resenie3");
var otvet3=document.getElementById("otvet3");

var resenie4=document.getElementById("resenie4");
var otvet4=document.getElementById("otvet4");

var koren=document.getElementById("koren");
var otvet5=document.getElementById("otvet5");

var pilt=document.getElementById("pilt");

const kilo=0.0001;
const metr=0.01;
const deci=0.1;
const santi=1;
const milli=100;
const mikron=10000;
const nano=10000000;
const ang=100000000;

const kilo2=0.001;
const metr2=1;
const deci2=10;
const santi2=100;
const milli2=1000;
const mikron2=1000000;
const nano2=1000000000;
const ang2=10000000000;

const kilo3=0.001;
const metr3=0.1;
const deci3=1;
const santi3=10;
const milli3=100;
const mikron3=100000;
const nano3=100000000;
const ang3=1000000000;

const kilo4=1;
const metr4=1000;
const deci4=10000;
const santi4=100000;
const milli4=1000000;
const mikron4=1000000000;
const nano4=1000000000000;
const ang4=10000000000000;

/*calculator dlja santimetrov*/
function calculate(zadaca, kurrency) {
    return (zadaca * kurrency).toFixed(5);

}
/*calculator dlja metrov*/
function calculate2(zadaca2, kurrency2) {
    return (zadaca2 * kurrency2).toFixed(3);

}
/*calculator dlja decimetrov*/
function calculate3(zadaca3, kurrency3) {
    return (zadaca3 * kurrency3).toFixed(4);

}

/*calculator dlja kilometrov*/
function calculate4(zadaca4, kurrency4) {
    return (zadaca4 * kurrency4).toFixed(1);

}

function perevodsm(event){
    var inputValue=resenie.value;
    if(event.target.value === "kilo") {
        otvet.innerHTML = calculate(inputValue, kilo) + " km";
        pilt.src="img/km.png";
    } else if(event.target.value === "metr"){
        otvet.innerHTML=calculate(inputValue, metr) + " m";
        pilt.src="img/m.png";
    } else if(event.target.value === "deci"){
        otvet.innerHTML=calculate(inputValue, deci) + " dm";
        pilt.src="img/dm.png";
    } else if(event.target.value === "canti"){
        otvet.innerHTML=calculate(inputValue, santi) + " cm";
        pilt.src="img/cm.png";
    } else if(event.target.value === "mili"){
        otvet.innerHTML=calculate(inputValue, milli) + " mm";
        pilt.src="img/mm.png";
    } else if(event.target.value === "mikron"){
        otvet.innerHTML=calculate(inputValue, mikron) + " mkm";
        pilt.src="img/mkm.png";
    } else if(event.target.value === "nano"){
        otvet.innerHTML=calculate(inputValue, nano) + " nm";
        pilt.src="img/nm.png";
    } else if(event.target.value === "ang"){
        otvet.innerHTML=calculate(inputValue, ang) + " A";
        pilt.src="img/a.png";
    }

}

function perevodm(event){
    var inputValue=resenie2.value;
    if(event.target.value === "kilo2") {
        otvet2.innerHTML = calculate2(inputValue, kilo2) + " km";
    } else if(event.target.value === "metr2"){
        otvet2.innerHTML=calculate2(inputValue, metr2) + " m";
    } else if(event.target.value === "deci2"){
        otvet2.innerHTML=calculate2(inputValue, deci2) + " dm";
    } else if(event.target.value === "canti2"){
        otvet2.innerHTML=calculate2(inputValue, santi2) + " cm";
    } else if(event.target.value === "mili2"){
        otvet2.innerHTML=calculate2(inputValue, milli2) + " mm";
    } else if(event.target.value === "mikron2"){
        otvet2.innerHTML=calculate2(inputValue, mikron2) + " mkm";
    } else if(event.target.value === "nano2"){
        otvet2.innerHTML=calculate2(inputValue, nano2) + " nm";
    } else if(event.target.value === "ang2"){
        otvet2.innerHTML=calculate2(inputValue, ang2) + " A";
    }

}

function perevodeci(event){
    var inputValue=resenie3.value;
    if(event.target.value === "kilo3") {
        otvet3.innerHTML = calculate3(inputValue, kilo3) + " km";
    } else if(event.target.value === "metr3"){
        otvet3.innerHTML=calculate3(inputValue, metr3) + " m";
    } else if(event.target.value === "deci3"){
        otvet3.innerHTML=calculate3(inputValue, deci3) + " dm";
    } else if(event.target.value === "canti3"){
        otvet3.innerHTML=calculate3(inputValue, santi3) + " cm";
    } else if(event.target.value === "mili3"){
        otvet3.innerHTML=calculate3(inputValue, milli3) + " mm";
    } else if(event.target.value === "mikron3"){
        otvet3.innerHTML=calculate3(inputValue, mikron3) + " mkm";
    } else if(event.target.value === "nano3"){
        otvet3.innerHTML=calculate3(inputValue, nano3) + " nm";
    } else if(event.target.value === "ang3"){
        otvet3.innerHTML=calculate3(inputValue, ang3) + " A";
    }

}

function perevodkm(event){
    var inputValue=resenie4.value;
    if(event.target.value === "kilo4") {
        otvet4.innerHTML = calculate4(inputValue, kilo4) + " km";
    } else if(event.target.value === "metr4"){
        otvet4.innerHTML=calculate4(inputValue, metr4) + " m";
    } else if(event.target.value === "deci4"){
        otvet4.innerHTML=calculate4(inputValue, deci4) + " dm";
    } else if(event.target.value === "canti4"){
        otvet4.innerHTML=calculate4(inputValue, santi4) + " cm";
    } else if(event.target.value === "mili4"){
        otvet4.innerHTML=calculate4(inputValue, milli4) + " mm";
    } else if(event.target.value === "mikron4"){
        otvet4.innerHTML=calculate4(inputValue, mikron4) + " mkm";
    } else if(event.target.value === "nano4"){
        otvet4.innerHTML=calculate4(inputValue, nano4) + " nm";
    } else if(event.target.value === "ang4"){
        otvet4.innerHTML=calculate4(inputValue, ang4) + " A";
    }

}
/*function racetkvadrat(koren){
    return (koren* koren).toFixed(0);


}

function kvadratnej(event) {
    otvet5=racetkvadrat;
}*/