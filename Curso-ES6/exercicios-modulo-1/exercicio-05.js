// 5° Exercício -Utilizando o operador de rest/spread (...) realize as seguintes operações:

// 5.1 Rest
const arr = [1, 2, 3, 4, 5, 6];
const { x, ...y} = arr;

console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // = 3

// 5.2 Spread
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel'};
console.log(usuario2);

const usuario3 = { ...usuario, endereco: {cidade: 'Lontras'}};
console.log(usuario3);