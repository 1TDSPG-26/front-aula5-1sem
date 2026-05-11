
//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");
console.log(botaoEntrar);


//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.


botaoEntrar.addEventListener("click", function(){
    //     //Para casa:
//     //Capturar os campos de email e senha.
//     //Armazenar em variáveis.
//     //Imprimir seus valores.

    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");
    //armazenando os dados em um objeto
    //Declarando o objeto
    const usuario = {
        email: email.value, 
        senha = senha.value
    }
    
    //Imprimindo os dados dos campos:
    //Concatenação padrão:
    console.log("Email : " + email.value + " e senha: " + senha.value);
    //Impressão dos dados com Template Literal e interpolação:
    console.log(`Email :  ${email.value}  e senha: ${senha.value}.`);


    //Realizar os exercicios da apostila até a pagina 64.
    //Apresente os dados armazenados no objeto usuário ultilizando Template Literal:

});
