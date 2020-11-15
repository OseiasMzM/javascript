// 2° Exercício

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Diego', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Utilizando o map - Crie uma variável que contenha todas idades dos usuários
const metodoMap = usuarios.map(usuarios => usuarios.idade);
console.log(metodoMap);

// 2.2 Utilizando o filter - Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos
const metodoFilter = usuarios.filter(usuarios => usuarios.empresa === 'Rocketseat' && usuarios.idade > 18);
console.log(metodoFilter);

// 2.3 Utilizando o find - Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const metodoFind = usuarios.find(usuarios => usuarios.empresa === 'Google');
console.log(metodoFind);

// 2.4 Unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos 
const multipliqueIdade = usuarios.map(usuarios => ({...usuarios, idade : usuarios.idade * 2})).filter(usuarios => usuarios.idade <= 50);
console.log(multipliqueIdade);