//capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");

//atrelando ao botão uma função que vai receber dos parâmetros
// o primeiro será o evento de tela, o segundo será a função anônima ou a funçaõ de callBack
botaoEntrar.addEventListener("click", function(){

  //Imprimir seus valores.

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    // Armazenando os dados em um Objeto:
    //declarando um objeto
    const usuario = {
        email : email.value,
        senha : senha.value
    }
    
    //Imprimindo os dados dos campos:

    //Concatenação padrão:
    console.log("Email : " + email.value + " e senha: " + senha.value);
    
    //Impressão dos dados com Template Literal e interpolação:
    console.log(`Email :  ${email.value}  e senha: ${senha.value}.`);
    
    //Apresente os dados armazenados no Objeto usuário utilizando Template Literal;
    //Realizar todos os exercícos da apostila até a pág 64;
    console.log(`usuario : ${email.value}${senha.value}`)
});