
//capturando botao
const botaoEntrar = document.getElementById("btnEntrar");

console.log(botaoEntrar);

//atrelando ao botao uma funcao que vai receber dois parametros
//o primeiro sera o evento de tela, o segundo sera a funcao de callBack ou funcao anonima
 botaoEntrar.addEventListener("click", function(){

      //     //Para casa:
//     //Capturar os campos de email e senha.
//     //Armazenar em variáveis.
//     //Imprimir seus valores.

    const email = document.getElementById("idEmail");
    const senha = document.getElementById("idSenha");

    //Armazenando os dados em um Objeto:
    //Declarando um Objeto
    const usuario = {
        email : email.value,
        senha : senha.value
    }
    
    //Imprimindo os dados dos campos:

    //Concatenação padrão:
    console.log("Email : " + email.value + " e senha: " + senha.value);
    
    //Impressão dos dados com Template Literal e interpolação:
    console.log(`Email :  ${email.value}  e senha: ${senha.value}.`);


    //Para casa
    //realizar os exercicio da apostila ate a pagina 64.
    //Apresente os dados armazenados no Objeto usuario utilizando Template Literal:


  });

