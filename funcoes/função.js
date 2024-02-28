
// function formulaImc( peso, altura){
//     return peso / Math.pow(altura, 2);
// }
// function classificacao(imc){
//     if(imc < 18.5){
//         return 'abaixo do peso';
//     } else if( imc >= 18.5 && imc < 25){
//         return 'Peso normal';
//     } else if(imc >= 30 && imc < 40){
//         return 'Obeso';
//     } else if( imc > 40){
//         return 'Obesidade grave';
//     }
// }

// function main(){
//     const peso = 60;
//     const altura = 1.80;
//     const imc = formulaImc(peso, altura);
//     console.log('Valor do seu imc: ' + imc.toFixed(2));
//     console.log('Classificação do Imc: ' + classificacao(imc));
// }

// main();

// Elabore um algoritmo utilizando funções que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os código da tabela a seguir para ler qual a condição de pagamento escoolhida e efetuar o cálculo adequado.Elabore
// Código condição de pagamento:

// - À vista débito, recebe 10% de desconto;
// - À vista no dinheiro ou pix, recebe 15% de desconto;
// - Em duas vezes, o preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// function desconto(valor, taxa){
//     return valor - valor * (taxa / 100);
// }

// function main(){
//     console.log('Escolha a forma de pagamento desejada: \n1) Débito \n2) À vista \n3) Parcelado em 2x \n4) Parcelado em mais de 2x')
//     const valor = 70;
//     const taxa = 15;

//     console.log('Valor final: ' + desconto(valor, taxa));
// }

// main();

// Elabore um progrma utilizando funções para escrever seu nome

// function name(nome){
//     console.log('Seu nome é: ' + nome);
// }

// function main(){
//     let nome = 'Gabriel';
//     console.log(name(nome));
// }
// main();


//  -------------------------------------------------------------------
// function maioridade(idade){
//     if(idade >= 18){
//         console.log('Você é maior de idade');
//     }else if(idade < 18){
//         console.log('Você é menor de idade');
//     }
// }

// maioridade(11);


// -------------------------------------------------------------------------------
// Faça o exercício dos preços utilizando funções;

// Elabore um algoritmo utilizando funções que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os código da tabela a seguir para ler qual a condição de pagamento escoolhida e efetuar o cálculo adequado.Elabore
// Código condição de pagamento:

// - À vista débito, recebe 10% de desconto;
// - À vista no dinheiro ou pix, recebe 15% de desconto;
// - Em duas vezes, o preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// function aplicarDesconto(valor, desconto){
//     return valor = (valor - (valor * (desconto/100))); 
// }
// function aplicarJuros(valor, juros){
//     return valor = valor + (valor * (juros/100));
// }

// function main(){
//     let valor = 100;
//     const op = 1;
//     if(op == 1){
//         console.log('O valor final da compra = ' + aplicarDesconto(100, 10));
//     }else if(op == 2 ){
//         console.log('O valor final da compra = ' + aplicarDesconto(100, 15));
//     }else if(op == 3){
//         console.log('O valor final da compra = ' + aplicarDesconto(100, 10));
//     }else if(op == 4){
//         console.log('O valor final da compra = ' + valor);
//     }else if(op == 5){
//         console.log('O valor final da compra = ' + aplicarJuros(100, 10));
//     }
// }

// main();

// const carro = {
//     marca: 'volvo',
//     ano: 2021,
//     modelo: 'xc90',

//     descrever: function(){
//         console.log('O ano do carro é ${this.ano} e o modelo é ${this.modelo}');
//     }

// };

// carro.descrever();


//Exercício prático: Utilizando funções, crie um programa para calcular média de notas.

// function media(nota1, nota2, nota3){
//     return (nota1 + nota2 + nota3)/3;
// }

// function main(){
//     console.log('A média das notas do aluno: ' + media(8, 10, 5).toFixed(2));
//     if(media(8, 10, 5 ) < 4){
//         console.log('Reprovado');
//     }else if(media(8, 10, 5) > 4 && media < 7){
//         console.log('Recuperação');
//     }else if(media(8, 10, 5) > 7 ){
//         console.log('Aprovado');
//     }
// }
// main();