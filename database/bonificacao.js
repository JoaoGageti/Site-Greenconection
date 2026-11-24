const saldototal = document.getElementById("saldo");
const btnm1 = document.getElementById("btnm1");
const btnm2 = document.getElementById("btnm2");
const btnm3 = document.getElementById("btnm3");
const btnm4 = document.getElementById("btnm4");
const btnm5 = document.getElementById("btnm5");

const missao1 = document.getElementById("m1");
const missao2 = document.getElementById("m2");
const missao3 = document.getElementById("m3");
const missao4 = document.getElementById("m4");
const missao5 = document.getElementById("m5");
let saldo = 0;

const contadormissoes = document.getElementById("contador-missoes");
let missoes = 0;

const progressogeraltexto = document.getElementById("progresso-geral-texto");
const progressogeralbarra = document.getElementById("progresso-geral-barra");
let xp= 0;

let noticias = 0;
const n1 = Number(localStorage.getItem("noticia1"));
const n2 = Number(localStorage.getItem("noticia2"));
const n3 = Number(localStorage.getItem("noticia3"));
const n4 = Number(localStorage.getItem("noticia4"));
const n5 = Number(localStorage.getItem("noticia5"));
const n6 = Number(localStorage.getItem("noticia6"));
let progressoM1 = document.getElementById("progressoM1");
let progressoM2 = document.getElementById("progressoM2");
let progressoM3 = document.getElementById("progressoM3");
let progressoM4 = document.getElementById("progressoM4");
let progressoM5 = document.getElementById("progressoM5");
let txtprogressoM1 = document.getElementById("txtprogressoM1");
let txtprogressoM2 = document.getElementById("txtprogressoM2");
let txtprogressoM3 = document.getElementById("txtprogressoM3");
let txtprogressoM4 = document.getElementById("txtprogressoM4");
let txtprogressoM5 = document.getElementById("txtprogressoM5");

let contribuicao = Number(localStorage.getItem("contribuicao"));

noticias = n1 + n2 + n3 + n4 + n5 + n6;

if (noticias === 1){
    missao1.dataset.progresso = 50;
    progressoM1.value = 50;
    txtprogressoM1.textContent = "50%"

}

if (noticias >= 2){
    missao1.dataset.progresso = 100;
    progressoM1.value = 100;
    txtprogressoM1.textContent = "100%"
    missao1.dataset.status = "completa";
}

if (contribuicao === 1){
    missao3.dataset.progresso = 100;
    progressoM3.value = 100;
    txtprogressoM3.textContent = "100%";
    missao3.dataset.status = "completa";
}

btnm1.addEventListener("click", () => {
    if( missao1.dataset.status === "completa"){
        
        missao1.dataset.status = "concluida";
        saldo= saldo+Number(missao1.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm1.disabled = true;
        missoes++;
        xp= xp + Number(missao1.dataset.xp);
        missoestotais();
        xptotais();
        localStorage.setItem("missao1", "concluida");
    }

})

btnm2.addEventListener("click", () => {
    if( missao2.dataset.status === "completa"){
        
        missao2.dataset.status = "concluida";
        saldo= saldo+Number(missao2.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm2.disabled = true;
        xp= xp + Number(missao2.dataset.xp);
        missoes++;
        missoestotais();
        xptotais();
        localStorage.setItem("missao2", "concluida");
    }

})

btnm3.addEventListener("click", () => {
    if( missao3.dataset.status === "completa"){
        missao3.dataset.status = "concluida";
        saldo= saldo+Number(missao3.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm3.disabled = true;
        missoes++;
        xp= xp + Number(missao3.dataset.xp);
        missoestotais();
        xptotais();
        localStorage.setItem("missao3", "concluida");
    }

})

btnm4.addEventListener("click", () => {
    if( missao4.dataset.status === "completa"){
        missao4.dataset.status = "concluida";
        saldo= saldo+Number(missao4.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm4.disabled = true;
        missoes++;
        xp= xp + Number(missao4.dataset.xp);
        missoestotais();
        xptotais();
        localStorage.setItem("missao4", "concluida");
    }

})

btnm5.addEventListener("click", () => {
    if( missao5.dataset.status === "completa"){
        missao5.dataset.status = "concluida";
        saldo= saldo+Number(missao5.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm5.disabled = true;
        missoes++;
        xp= xp + Number(missao5.dataset.xp);
        missoestotais();
        xptotais();
        localStorage.setItem("missao5", "concluida");
    }

})

function missoestotais(){
    contadormissoes.textContent=`${missoes}/5 missões`;
}

function xptotais(){
    let porcentagem = Math.round((xp * 100)/510);
    progressogeralbarra.value=porcentagem;
    progressogeraltexto.textContent=`${porcentagem}%`;
}



if (localStorage.getItem("missao1") === "concluida") {
    missao1.dataset.status = "concluida";
    btnm1.disabled = true;
    saldo += Number(missao1.dataset.valor);
    xp += Number(missao1.dataset.xp);
    missoes++;
}

if (localStorage.getItem("missao2") === "concluida") {
    missao2.dataset.status = "concluida";
    btnm2.disabled = true;
    saldo += Number(missao2.dataset.valor);
    xp += Number(missao2.dataset.xp);
    missoes++;
}

if (localStorage.getItem("missao3") === "concluida") {
    missao3.dataset.status = "concluida";
    btnm3.disabled = true;
    saldo += Number(missao3.dataset.valor);
    xp += Number(missao3.dataset.xp);
    missoes++;
}

if (localStorage.getItem("missao4") === "concluida") {
    missao4.dataset.status = "concluida";
    btnm4.disabled = true;
    saldo += Number(missao4.dataset.valor);
    xp += Number(missao4.dataset.xp);
    missoes++;
}

if (localStorage.getItem("missao5") === "concluida") {
    missao5.dataset.status = "concluida";
    btnm5.disabled = true;
    saldo += Number(missao5.dataset.valor);
    xp += Number(missao5.dataset.xp);
    missoes++;
}

saldototal.textContent = `${saldo},00`;
missoestotais();
xptotais();
