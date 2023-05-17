let Valor1 = document.querySelector("#Valor1")
let Valor2 = document.querySelector("#Valor2")
let btCalcular = document.querySelector("#btCalcular")

function retornarMaior(){
let v1 = Number(Valor1.value);
let v2 = Number(Valor2.value);

if(v1 > v2){
    alert(v1 +'é o maior numero');
    }else{
        alert(v2 +'é o maior numero');
    }
}

btVerificarMedia.onclick = function(){
    retornarMaior();
}