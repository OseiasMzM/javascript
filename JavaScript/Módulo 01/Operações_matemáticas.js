function retornaSexo(sexo) {
  //M, F
  //Masculino, Feminino

  if (sexo == "M") {
    // == -> Verifica se os valores são iguais. ;
    // === -> Verificar se o tipo é igual, ;
    return "Masculino";
  } else if (sexo === "F") {
    return "Feminino";
  } else {
    return "Outro";
  }
}
  switch (sexo) {
    case 'M':
      return 'Masculino';
    case 'F':
      return 'Feminino';
    default:
      return 'Outro';
  }

var resultado = retornaSexo("M");
console.log(resultado);
