let inputValor1 = document.querySelector("#inputValor1");
let inputValor2 = document.querySelector("#inputValor2");
let btSoma = document.querySelector("#btSoma");
let h1Resultado = document.querySelector("#h1Resultado");

function soma (){
    let v1 = Number (inputValor1.value);
    let v2 = Number (inputValor2.value);
    h1Resultado.textContent = v1 + v2;
    
}

btSoma.onclick = function(){
    soma();
}