let inputMedia = document.querySelector("#inputMedia");
let btVerificarMedia = document.querySelector("#btVerificarMedia");

function VerificarMedia(){
    let media = Number(inputMedia.value);

    if(media > 60){
        alert('O aluno está APROVADO');
    }else if(media > 20 && media < 60){
        alert('O aluno devera fazer SUB');
    }else{
        alert('O aluno está REPROVADO');
    }
}   

btVerificarMedia.onclick=function(){
    VerificarMedia();
}