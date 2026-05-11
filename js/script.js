//Capturando o botão de entrar 
const botaoEntrar = document.getElementById("btnEntrar");

//atrelando o botão uma função que vai receber dois parâmetros.
//o primeiro será o evento de tela, o segundo será a função de callback ou função anonima.
botaoEntrar.addEventListener("click", function(){
   
 console.log("Botão está ativo.");
    

 const botaoEmail = document.getElementById("idEmail");  
 const botaoSenha = document.getElementById("idSenha");

 const usuario = {
    botaoEmail : botaoEmail.value,
    botaoSenha : botaoSenha.value

 }
    console.log(`email : ${botaoEmail.value} senha: ${botaoSenha.value}`);
})



