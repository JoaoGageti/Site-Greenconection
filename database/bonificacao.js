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
let xp=0;

btnm1.addEventListener("click", () => {
    if( missao1.dataset.status === "completa"){
        
        missao1.dataset.status = "concluida";
        saldo= saldo+Number(missao1.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm1.disabled = true;
        missoes++;
        xp= xp + Number(missao1.dataset.xp)
        missoestotais();
        xptotais();
    
    }

})

btnm2.addEventListener("click", () => {
    if( missao2.dataset.status === "completa"){
        
        missao2.dataset.status = "concluida";
        saldo= saldo+Number(missao2.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm2.disabled = true;
        xp= xp + Number(missao2.dataset.xp)
        missoes++;
        missoestotais();
        xptotais();
    
    }

})

btnm3.addEventListener("click", () => {
    if( missao3.dataset.status === "completa"){
        missao3.dataset.status = "concluida";
        saldo= saldo+Number(missao3.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm3.disabled = true;
        missoes++;
        xp= xp + Number(missao3.dataset.xp)
        missoestotais();
        xptotais();
    
    }

})

btnm4.addEventListener("click", () => {
    if( missao4.dataset.status === "completa"){
        missao4.dataset.status = "concluida";
        saldo= saldo+Number(missao4.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm4.disabled = true;
        missoes++;
        xp= xp + Number(missao4.dataset.xp)
        missoestotais();
        xptotais();
    
    }

})

btnm5.addEventListener("click", () => {
    if( missao5.dataset.status === "completa"){
        missao5.dataset.status = "concluida";
        saldo= saldo+Number(missao5.dataset.valor);
        saldototal.textContent=`${saldo},00`;
        btnm5.disabled = true;
        missoes++;
        xp= xp + Number(missao5.dataset.xp)
        missoestotais();
        xptotais();
    
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