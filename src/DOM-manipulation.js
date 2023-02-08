import BlankCheckbox from './checkbox-blank-outline.png';
import { removeTodo } from './remove-todo';

function displayTodoInput(){
    const taskInput = document.getElementById('task-input');
    taskInput.classList.toggle('visible');
}

function addTodoElement({ todo, listDisplay} = {}){
    const listItem = document.createElement('li');
    const doneButton = document.createElement('button');
    const emptyBoxImg = document.createElement('img');
    emptyBoxImg.src = BlankCheckbox;
    doneButton.append(emptyBoxImg);
    
    const expandButton = document.createElement('button');
    const expandButtonDiv = document.createElement('div');
    expandButton.append(expandButtonDiv);
    const todoTitle = document.createElement('span');
    todoTitle.innerText = todo.title;
    const todoPriority = document.createElement('span');

    todoPriority.innerText = todo.priority;
    const todoDate = document.createElement('span');
    todoDate.innerText = 'date';

    expandButtonDiv.append(todoTitle, todoPriority, todoDate);
    
    listItem.append(doneButton, expandButton);
    listDisplay.append(listItem);

    doneButton.addEventListener('click', function(){ removeTodo( {
        todoElement: listItem,
        todoIndex: todo.id
    }) } );
}


function removeTodoElement(todo){
    todo.remove();
}

export { displayTodoInput, removeTodoElement, addTodoElement };