// Capturando o botão de entrar 
const botaoEntrar = document.getElementById("btnEntrar");
//Função de dois parâmetros no botão. Evento de tela e função de callBack ou função anônima
botaoEntrar.addEventListener("mouseover", function (){

    const inputEmail = document.getElementById("idEmail");
    const inputSenha = document.getElementById("idSenha");

//Dados em objeto
//Declarando
const usuario = {
    email : inputEmail.value,
    senha : inputSenha.value
};

console.log(`usuário ${usuario}`)

    console.log(`Email ${inputEmail.value} e senha ${inputSenha.value}`);
});



