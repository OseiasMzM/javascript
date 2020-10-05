var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Comunidade RocketSeat'
];

function renderTodos() {
    listElement.innerHTML = '';


// 'todos' irá percorrer cada um dos itens e retornar 
//  dentro da variavel 'todo';
    for (todo of todos) { 
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);


        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    // 'push' função do array para adicionar um novo item no final;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    //'splice' remove uma quantidade de itens do array baseado na posição que passar;
    todos.splice(pos, 1);
    renderTodos();
}