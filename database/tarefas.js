const progressogeralbarra = document.getElementById("progresso-geral-barra");//255
const aulatotal = document.getElementById("aulatotal");//6
let aula=0;
let xp=0;

function missoestotais(){
    aulatotal.textContent=`${aula}/6`;
}

function xptotais(){
    let porcentagem = Math.round((xp * 100)/255);
    progressogeralbarra.value=porcentagem;
}


if(localStorage.getItem("aula1")==="completa"){
    aula++;
    xp=xp+30;
    localStorage.setItem("xp",xp);
    localStorage.setItem("aula",aula);
    xptotais();
    missoestotais();

}

if(localStorage.getItem("aula2")==="completa"){
    aula++;
    xp=xp+50;
    localStorage.setItem("xp",xp);
    localStorage.setItem("aula",aula);
    xptotais();
    missoestotais();
    
}

if(localStorage.getItem("aula3")==="completa"){
    aula++;
    xp=xp+40;
    localStorage.setItem("xp",xp);
    localStorage.setItem("aula",aula);
    xptotais();
    missoestotais();
    
}