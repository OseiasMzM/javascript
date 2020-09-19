// não possui tipagem estática, possui estática dinamica
// ; para dizer que a linha acabou.
var nome = "Oséias";                      //string
var idade = 19;                           //inteiro
var peso = 80.5;                          //float - decimais
var humano = true;                        //booleans

var alunos = ['Oséias', 'Marcos', 'Luiz'];

var aluno = { // As informações passam a ser propiedade do nosso objeto chamado ${"Nome escolhido"}
  nome: alunos[0],
  idade: 23,
  peso: 80.5,
  humano: true
};


console.log(alunos[1]);
console.log(aluno.idade);
