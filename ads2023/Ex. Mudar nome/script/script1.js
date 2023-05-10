
let titulo = document.querySelector("#titulo");
let campoTexto = document.querySelector("#campoTexto");
let btTrocarTexto= document.querySelector ("#btTrocarTexto");

function alterarTexto(){
    let Texto = String(campoTexto.value);
    titulo.textContent = Texto;
}

btTrocarTexto.onclick = function(){
    alterarTexto();
}