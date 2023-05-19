let inputValor1 = document.querySelector("#inputValor1");
let inputValor2 = document.querySelector("#inputValor2");
let btCalc = document.querySelector("#btCalc");
let resultado = document.querySelector("#resultado");

function CalculaPreco (){
    ValProduto = Number (ValProduto.value);
    QuantProduto = Number (QuantProduto.value);
    resultado.textContent = ValProduto * QuantProduto;
}

btCalc.onclick = function(){
    CalculaPreco();
}