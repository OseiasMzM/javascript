function xp(anos) {
  return anos < 0 ? 'Impossível'
    : anos <= 1 ? 'Iniciante'
    : anos <= 3 ? 'Intermediário'
    : anos  <=6 ? 'Avançado'
    : 'Jedi';
}
for (var i = -2; i <= 10; i++) {
  console.log(i + " anos: " + xp(i));
}
