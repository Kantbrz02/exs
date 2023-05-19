let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let v3 = document.querySelector("#v3");
let v4 = document.querySelector("#v4");
let btVerificarMedia = document.querySelector("#btRetorno");

function idenMenor(){
    let v1 = Number(v1.value);
    let v2 = Number(v2.value);
    let v3 = Number(v3.value);
    let v4 = Number(v4.value);

    if(v1 > (v2 + v3 + v4)){
        alert('O menor valor é') = v1;
    }
}

btRetorno.onclick = function(){
    idenMenor();
}