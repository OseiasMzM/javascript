var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['JavaScript', 'ReactJS', 'Redux']
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
  }

]
var i = 1;
for (let usuario of usuarios) {
  console.log( i++, '-',usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(", "));
}
