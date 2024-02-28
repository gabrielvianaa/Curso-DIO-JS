// // class pessoa {
// //     nome;
// //     idade;
// //     altura;
// //         descrever(){
// //             console.log('Nome: ${}\nIdade: ${pessoa.idade}\nAltura: ${pessoa.altura}');
// //     }
// // }

// // const Gabriel = new pessoa();

// // Gabriel.nome = 'Gabriel V de Carvalho';
// // Gabriel.idade = 21;
// // Gabriel.altura = 1.80;

// // Gabriel.descrever();

// class pessoa {
//     nome;
//     idade;

//     descrever(){
//         console.log('Nome: ${}\nIdade: ${pessoa.idade}\nAltura: ${pessoa.altura}');
//     }
// }

// function compararIdade(p1, p2){
//     if(p1.idade > p2.idade){
//         console.log('A ${p1.nome} é mais velha que ${p2.nome}');
//     }else if(p2.idade > p1.idade){
//         console.log('A ${p2.nome} é mais velha que ${p2.nome}');
//     }else{
//         console.log('Ambos(as) possuem a mesma idade');
//     }
// }

// const Gabriel = new pessoa('Gabriel', 21);
// const Kamila = new pessoa('Kamila', 20);

// compararIdade(Gabriel, Kamila);


// Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado. 
// Crie um método que dado a quantidade de quilômetros e o preço de combustível nos dê o valor gasto em reais para realizar este percurso.

// class carros{
//     marca;
//     cor; 
//     consumoMedio;

//     constructor(marca, cor, consumoMedio){
//         this.marca = marca;
//         this.cor = cor;
//         this.consumoMedio = consumoMedio;
//     }

//     Gasto(valor, distancia){
//         return (distancia / this.consumoMedio) * valor;
//     }
    
// }

// let carro1 = new carros('Toyota', 'Vermelho', 15);
// console.log(carro1);
// console.log(carro1.Gasto(5.29, 70).toFixed(2));

// const  carro2 = new carros('Fiat', 'Prata', 12)

// console.log(carro2);
// console.log(carro2.Gasto(5.29, 100).toFixed(1));


/* 
    2) Crie uma classe para representar uma pessoa.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao j´seo para dizer o valor 
    do seu IMC;
*/

// class Pessoa {
//     nome;
//     peso;
//     altura;

//     constructor(nome, peso, altura){
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     calcularIMC(peso, altura){
//         return this.peso / Math.pow(this.altura, 2);
//     }

//     classificacaoIMC(){
//         const imc = this.calcularIMC();
//             if(imc < 18.5){
//                 return 'Magreza';
//             }else if(imc >= 18 && imc <= 24.9 ){
//                 return 'Normal';
//             }else if(imc >= 25 && imc <= 29.9){
//                 return 'Sobrepeso';
//             }else if(imc >= 30 && imc <=39.9){
//                 return 'Obesidade';
//             }
//     }
// }

// const jose = new Pessoa('José', 70, 1.75);

// console.log(jose);
// console.log(jose.calcularIMC(70, 1.75).toFixed(2));
// console.log(jose.classificacaoIMC());


// let n1 = [5, 10, 50, 30, 90];
// let gaveta = 0;
// for (let i = 0; i<= n1.length; i++){
//     gaveta += n1[i];
// }

