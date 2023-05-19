let valor = document.querySelector("#valor")
let btCalc = document.querySelector("#btCalc")
let resultado = document.querySelector("#resultado")

function CalculaJuro (){
    ValSaldo = Number (valor.value);
    resultado.textContent = (ValSaldo * 0.01) + ValSaldo;
}
btCalc.onclick = function(){
    CalculaJuro();
}