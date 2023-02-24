import BlankCheckbox from './checkbox-blank-outline.png';
import { removeTodo } from './remove-todo';
import { format } from 'date-fns';
import { clearInputBoxes } from './add-todo';

function displayTodoInput(){
    const taskInput = document.getElementById('task-input');
    taskInput.classList.toggle('visible');
    clearInputBoxes();
}

function displayNewProjectInput(){
    const inputDiv = document.getElementById('project-input');
    inputDiv.classList.toggle('visible');
}

function formatPriority(prio){
    let formattedPrio = '';
    switch (prio){
        case 0:
            formattedPrio = `🟩 Low`;
            break;
        case 1:
            formattedPrio = `🟨 Medium`;
            break;
        case 2:
            formattedPrio = `🟥 High`;
            break;
        default:
            console.log('Priority was not set correctly');
            break;
        
    }

    return formattedPrio;
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

    todoPriority.innerText = formatPriority(todo.priority);
    const todoDate = document.createElement('span');

    if (!Number.isNaN(new Date(todo.dueDate).getTime())){
    } else {
        todo.dueDate = new Date();
    }
    todoDate.innerText = format(todo.dueDate, 'MMMM do, yyyy');

    expandButtonDiv.append(todoTitle, todoPriority, todoDate);
    
    listItem.append(doneButton, expandButton);
    listDisplay.append(listItem);

    doneButton.addEventListener('click', function(){ removeTodo( {
        todoElement: listItem,
        todoIndex: todo.id
    }) } );
}

function changeArticleHeader(project){
    const articleHeader = document.getElementById('article-header');
    articleHeader.innerText = project.title;
}

function toggleAddTaskButton(buttonDisplay){

    let addButton = document.getElementById('add-task-btn');
    if (!buttonDisplay ){
        addButton.classList.add('hidden');
    } else if (buttonDisplay) {
        addButton.classList.remove('hidden');
    } else {
        console.log('Uh oh, the Add Button toggle broke');
    }
}

function removeTodoElement(todo){
    todo.remove();
}

export { 
    displayTodoInput, 
    removeTodoElement, 
    addTodoElement, 
    changeArticleHeader,
    toggleAddTaskButton,
    displayNewProjectInput };