
//Capturando o botão de entrar
const botaoEntrar = document.getElementById("btnEntrar");
console.log(botaoEntrar);
=======
<<<<<<< HEAD
// HOISTING
// var nome = "Alê";
// let sobreNome = "Carlos";

// if(true){

//     var nome = "Joaquim";
//     let sobreNome = "Das Couves";

// }

// console.log(nome);
// console.log(sobreNome);


// // Conversões:
// let numero = "123";
// console.log(parseInt(numero)); // 123
// console.log(parseFloat("12.5")); // 12.5
// console.log(numero.toString()); // “123”
// // Métodos de texto:
// let frase = "Estão chegando as provas!";
// console.log(frase.length); // 26 – Retorna a quantidade de caracteres da string
// console.log(frase.indexOf("as")); // 15 – Retorna a posição da string encontrada
// console.log(frase.replace("provas", "férias")); // “Estão chegando as férias!”
// // Formatação de número:
// let valor = 123.456;
// console.log(valor.toFixed(2)); // “123.46”
// console.log(valor.toPrecision(4)); // “123.5”

//Declarando variáveis em JS com let

let nome   = "Italo";
let idade  = 11;
let status = false;

//Imprimir os dados do nosso usuário JOSÉ com console.log usando concatenação simples:
console.log(nome + " de " + idade +" anos está " + (status === true ? "empregado" : "desempregado") + " atualmente.");

//Exercício, agora escreva a mesma frase com template-literal, onde o texto e as variáveis ficam dentro de ` ` e as variáveis são apresentadas entre os símbolos de ${variável}.
=======
//Declarando variáveis em JS com let
>>>>>>> rm572912


//Atrelando ao botão uma função que vai receber dois parâmetros.
// O primeiro será o evento de tela, o segundo será a função de callBack ou função anônima.


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

    //Para casa.
    //Realizar os exercício da apostila até a página 64.
    //Apresente os dados armazenados no Objeto usuário utilizando Template Literal:

});
=======
console.log(`${nome} tem ${idade} está ${status === true ? "empregado" : "desempregado"} atualmente. Template-literal`);
>>>>>>> rm572956
>>>>>>> rm572912
