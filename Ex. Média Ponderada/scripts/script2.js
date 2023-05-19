let inputValor1 = document.querySelector("#inputValor1");
let inputValor2 = document.querySelector("#inputValor2");
let inputValor3 = document.querySelector("#inputValor3");
let btSoma = document.querySelector("#btSoma");
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");
let Result1 = document.querySelector("#Result1");
let Result2 = document.querySelector("#Result2");
let Result3 = document.querySelector("#Result3");
let Result4 = document.querySelector("#Result4");

function mediaAritmetica (){
    let v1 = Number (inputValor1.value);
    let v2 = Number (inputValor2.value);
    let v3 = Number(inputValor3.value);
    valor1.textContent = "A Media Aritmerica e: " +(v1 + v2 + v3) / 3;
    Result1 = (v1 + v2 + v3) / 3;
}

function mediaPonderada (){
    let v1 = Number (inputValor1.value);
    let v2 = Number (inputValor2.value);
    let v3 = Number(inputValor3.value);
    valor2.textContent = "A Media Ponderada e: " +((v1 * 3) + (v2 * 2) + (v3 * 5)) / 10;
    Result2 = ((v1 * 3) + (v2 * 2) + (v3 * 5)) / 10; 
}

function CalcMedias (){
    valor3.textContent = "A Soma das medias e: " + (Result1 + Result2);
    Result3 = (Result1 + Result2);
}

function MedMedias (){
    valor4.textContent = "A Media das medias e: " + (Result3) / 2;
Result4 = (Result3) / 2;
}


btSoma.onclick = function(){
    mediaAritmetica();
    mediaPonderada();
    CalcMedias();
    MedMedias();
}