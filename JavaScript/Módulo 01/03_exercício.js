function habilidade(skill, find){
    var i = 0;
    while(i < skill.length){
        if (skill[i] == find) {
            return true;
        }
        i++;
    }
    return false;
}

var skill = ['javascript', 'reactjs', 'React native'];
var resultado = habilidade(skill, 'javascript');
console.log(resultado);
