var kellekord="pilti/pustoi.png";


var lopp=false;
function kartinka(pilt){
    pilt.src=kellekord;

    vyidukontroll();
	
	if(vyidukontroll()){
        alert("Sa oled kogunud puzzle");
        lopp=true;
    }



}
function kartinkaValik(pilt){
    kellekord=pilt.src;
    document.getElementById("pilt11").src=kellekord;

}



// определяем имя файла
function sisu(nr){
    var fnimi=document.getElementById("pilti"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
/*function kontrollsisu(a,b,c, sisulopp){
    //a,b,c - номера картинок и sisulopp - адрес нужной картинки
    if(sisu(a)==sisulopp.split("/").pop() && sisu(b)==sisulopp.split("/").pop() && sisu(c)==sisulopp.split("/").pop())
    {return true;}else {return false;}

}*/
function vyidukontroll(){
    if(document.getElementById("pilti1").src == document.getElementById("pilti10").src
	&& document.getElementById("pilti2").src == document.getElementById("pilti12").src
	&& document.getElementById("pilti3").src == document.getElementById("pilti13").src
	&& document.getElementById("pilti4").src == document.getElementById("pilti14").src
	&& document.getElementById("pilti5").src == document.getElementById("pilti15").src
	&& document.getElementById("pilti6").src == document.getElementById("pilti16").src
	&& document.getElementById("pilti7").src == document.getElementById("pilti17").src
	&& document.getElementById("pilti8").src == document.getElementById("pilti18").src
	&& document.getElementById("pilti9").src == document.getElementById("pilti19").src
    ){ 

	return true;
	}


    return false;

}



/*На всякий случай https://pastebin.com/J6YGnpXP (не понадобилось)*/