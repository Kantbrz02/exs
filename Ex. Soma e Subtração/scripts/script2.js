let valorPago = document.querySelector("#valorPago");
let valorProduto = document.querySelector("#valorProduto");
let btTroco = document.querySelector("#btTroco");
let h1Resultado = document.querySelector("#h1Resultado")

function calculaTroco (){
    let vPago = Number (valorPago.value);
    let vProduto = Number (valorProduto.value);
    h1Resultado.textContent = vPago - vProduto;
}

btTroco.onclick = function (){
    calculaTroco();
}