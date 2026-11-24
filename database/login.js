const nome = document.getElementById ("nome");
const email = document.getElementById ("email");
const senha = document.getElementById ("senha");
const loginbtn = document.getElementById ("loginbtn");
const emailcheck = document.getElementById ("emailcheck");
const senhacheck = document.getElementById ("senhacheck");
const loginresposta = document.getElementById ("loginresposta");
let nomevalidar;
let emailvalidar;
let senhavalidar;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formulario = document.getElementById("formulario");
const logado = document.getElementById("logado");

const logoutbt = document.getElementById("logoutbt");

nome.addEventListener("input",() => {
    if (nome.value!=="" ){
        nomevalidar=true;
    }
    else{
        nomevalidar=false;
    }
    liberarbtn();
})

email.addEventListener("input",() => {
    if (regex.test(email.value)){
        emailvalidar=true;
        emailcheck.textContent="\nEmail Correto!"
    }
    else{
        emailvalidar=false;
        emailcheck.textContent="\nEmail Incorreto!"
    }
    liberarbtn();
})

senha.addEventListener("input",() => {
    
    if (senha.value.length >= 6){
        senhavalidar=true;
        senhacheck.textContent="\nSenha Correta!"
    }
    else{
        senhavalidar=false;
        senhacheck.textContent="\nSenha Incorreta!"
    }
    liberarbtn();
})

function liberarbtn() {
    if(nomevalidar===true && emailvalidar===true && senhavalidar===true){
        loginbtn.disabled=false;
    }
    else{
        loginbtn.disabled=true;
    }
    loginresposta.textContent = "";
}

loginbtn.addEventListener("click", () =>{
    localStorage.setItem("nick",nome.value);
    localStorage.setItem("conta","criada");
    nome.value="";
    email.value="";
    senha.value="";
    emailcheck.textContent="";
    senhacheck.textContent="";
    loginresposta.textContent="Conta criada com sucesso!";
    nomevalidar = false;
    emailvalidar = false;
    senhavalidar = false;
    loginbtn.disabled = true;
    logout();
})

function logout(){
if (localStorage.getItem("conta") === "criada") {
    formulario.hidden = true;
    logado.hidden = false;
}
else {
    formulario.hidden = false;
    logado.hidden = true;
}}

logout();

logoutbtn.addEventListener("click", () => {
    localStorage.removeItem("nick");
    localStorage.removeItem("conta");
    loginresposta.textContent = "";
    logout();
})
