//crie duas funções para serem exportadas à outra pasta.

function print(texto){
    console.log(texto);
}

const entrada = [5, 50, 10, 98, 23];

let i = 0;

function gets(){
    const valor = entrada[i];
    i++;
    return valor;
}

module.exports = {
    gets,
    print
};
