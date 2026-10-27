//const valor = document.getElementById ("valor");
const outrovalor = document.getElementById ("outrovalor");
const nomecartao = document.getElementById ("nomecartao");
const numerocartao = document.getElementById ("numerocartao");
const validadecartao = document.getElementById ("validadecartao");
const cvvcartao = document.getElementById ("cvvcartao");
const listaerroscartao = document.getElementById ("listaerroscartao");
const nomeboleto = document.getElementById ("nomeboleto");
const CPFboleto = document.getElementById ("CPFboleto");
const emailboleto = document.getElementById ("emailboleto");
const listaerrosboleto = document.getElementById ("listaerrosboleto");
const bttcartao = document.getElementById ("bttcartao");
const bttboleto = document.getElementById ("bttboleto");
const bttpix = document.getElementById ("bttpix");
const infopagamentocartao = document.getElementById ("infopagamentocartao");
const infopagamentoboleto = document.getElementById ("infopagamentoboleto");
const infopagamentopix = document.getElementById ("infopagamentopix");
const voltar = document.getElementById ("voltar");

// variaveis auxiliares usadas dentro da function validarcartão
let nomec;
let numeroc;
let validadec;
let cvv;

//variaveis auxiliares para mostrar os erros do cartão, usadas no adicionarerrocartao e no validar cartão
let nomecli;
let numerocli;
let validadecli;
let cvvli;

// variaveis auxiliares dentro da função validarboleto
let nomeb;
let CPFb;
let emailb;

//variaveis auxiliares para mostrar os erros do boleto, usadas no adcionarerroboleto e validar boleto
let nomebli;
let cpfbli;
let emailbli;

//auxiliar na adcionarerro
let mensagem;
let mensagem2;

/*function algumvalor (){
    if (valor.value !== "" || outrovalor.value !== "")
    {
        return true;
    }
    else{
        return false;
    }
}*/ // melhorar depois

function adicionarerrocartao() { // cria elemento caso houver erro
  const li = document.createElement('li');   
  li.textContent = mensagem;                   
  listaerroscartao.append(li);
  return li;
}

function validarcartao(){
    
    if (nomecartao.value!==""){
            nomec=true;
            nomecli?.remove();
        }
    else{   
            nomecli?.remove();
            nomec=false;
            mensagem = "Coloque um nome válido";
            nomecli=adicionarerrocartao();
        }
        
    if (numerocartao.value!==""){
            numeroc=true;
            numerocli?.remove();
        }
    else{
            numerocli?.remove();
            numeroc=false;
            mensagem = "Coloque um numero de cartão válido";
            numerocli=adicionarerrocartao();
        }

    if (validadecartao.value!==""){
            validadec=true;
            validadecli?.remove();

        }
    else{
            validadecli?.remove();
            validadec=false;
            mensagem = "Coloque uma validade válida";
            validadecli=adicionarerrocartao();
        }

    if (cvvcartao.value!==""){
            cvv=true;
            cvvli?.remove();
        }
    else{   
            cvvli?.remove();
            cvv=false;
            mensagem = "Coloque um CVV válido";
            cvvli=adicionarerrocartao();
        }
        

    if (nomec===true && numeroc===true && validadec===true && cvv===true){
        
        bttcartao.disabled=false;
        }
    else
        
        bttcartao.disabled=true;
        // comfirma se todos os campos estão preenchidos
    
}

function adicionarerroboleto() { // cria elemento caso houver erro
  const li = document.createElement('li');   
  li.textContent = mensagem2;                   
  listaerrosboleto.append(li);
  return li;
}

function validarboleto(){


    if (nomeboleto.value!==""){
        nomeb=true;
        nomebli?.remove();
    }
    else{
        nomebli?.remove();
        nomeb=false;
        mensagem2 = "Coloque um nome válido";
        nomebli=adicionarerroboleto();
    }

    if (CPFboleto.value!==""){
        CPFb=true;
        cpfbli?.remove();
    }
    else{
        cpfbli?.remove();
        CPFb=false;
        mensagem2 = "Coloque um CPF válido";
        cpfbli=adicionarerroboleto();
    }

    if (emailboleto.value!==""){
        emailb=true;
        emailbli?.remove();
    }
    else{
        emailbli?.remove();
        emailb=false;
        mensagem2 = "Coloque um E-mail válido";
        emailbli=adicionarerroboleto();
    }
    if (nomeb === true && CPFb === true && emailb === true){
        bttboleto.disabled=false;
    }
    else{
        bttboleto.disabled=true;
    }

}

nomecartao.addEventListener("blur",()=>{
    validarcartao();

})
    
numerocartao.addEventListener("blur",()=>{

    validarcartao();
})
    
validadecartao.addEventListener("blur",()=>{

    validarcartao();
})

cvvcartao.addEventListener("blur",()=>{

    validarcartao();
})
    
bttcartao.addEventListener("click",()=>{
nomecartao.value="";
numerocartao.value="";
validadecartao.value="";
cvvcartao.value="";
infopagamentocartao.textContent="Contribuição efetuada. Nossa equipe agradece a sua ajuda!";
bttcartao.disabled = true;
})

nomeboleto.addEventListener("blur",()=>{
    validarboleto();
})
CPFboleto.addEventListener("blur",()=>{
    validarboleto();
})
emailboleto.addEventListener("blur",()=>{
    validarboleto();
})

bttboleto.addEventListener("click",()=>{
    nomeboleto.value="";
    CPFboleto.value="";
    emailboleto.value="";
    infopagamentoboleto.textContent="Boleto gerado, cheque seu email. Nossa equipe agradece sua ajuda!"
    bttboleto.disabled = true;

})

bttpix.addEventListener("click",()=>{
    infopagamentopix.textContent="Obrigado pelo apoio!"


})


