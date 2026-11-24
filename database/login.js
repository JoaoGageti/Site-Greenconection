const nome = document.getElementById ("nome");
const email = document.getElementById ("email");
const senha = document.getElementById ("senha");
const loginbt = document.getElementById ("loginbt");
const emailcheck = document.getElementById ("emailcheck");
const senhacheck = document.getElementById ("senhacheck");
const loginresposta = document.getElementById ("loginresposta");
let nomevalidar;
let emailvalidar;
let senhavalidar;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


nome.addEventListener("input",() => {
    if (nome.value!=="" ){
        nomevalidar=true;
    }
    else{
        nomevalidar=false;
    }
    if (nomevalidar===true && emailvalidar===true && senhavalidar===true ){
        loginbt.disabled = false;
    }
    else{
        loginbt.disabled = true;
    }
    loginresposta.textContent="";
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
    if (nomevalidar===true && emailvalidar===true && senhavalidar===true ){
        loginbt.disabled = false;
    }
    else{
        loginbt.disabled = true;
    }
    loginresposta.textContent="";
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
    if (nomevalidar===true && emailvalidar===true && senhavalidar===true ){
        loginbt.disabled = false;
    }
    else{
        loginbt.disabled = true;
    }
    loginresposta.textContent="";
})

loginbt.addEventListener("click", () =>{
    nome.value="";
    email.value="";
    senha.value="";
    emailcheck.textContent="";
    senhacheck.textContent="";
    loginresposta.textContent="Conta criada com sucesso!";

})
