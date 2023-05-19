let inputMedia = document.querySelector("#inputMedia");
let btVerificarMedia = document.querySelector("#btVerificarMedia");

function VerificarMedia(){
    let Media = Number(inputMedia.value);

    if(Media > 60){
        alert('O aluno está APROVADO');
    }else if(Media > 20 && Media < 60){
        alert('O aluno devera fazer SUB');
    }else{
        alert('O aluno está REPROVADO');
    }
}   

btVerificarMedia.onclick=function(){
    VerificarMedia();
}