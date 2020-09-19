var pares = [];
function exibePar(x, y) {
  while(x <= y) {
    if ((x%2)==0) {
      pares.push(x);
    }
    x++
  }
}
exibePar(32, 321);
console.log(pares);
