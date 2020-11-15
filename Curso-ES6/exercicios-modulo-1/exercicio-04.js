// 4° Exercício Desestruturação

// 4.1 Desestruturação simples 
const empresa = {
    nome: 'Rocketsear',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const {nome, endereco: { cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

// 4.2 Desestruturação em parâmetros
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade}.`;
}
console.log({nome: 'Diego', idade: 23});