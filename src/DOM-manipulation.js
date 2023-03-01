import BlankCheckbox from './checkbox-blank-outline.png';
import { removeTodo } from './remove-todo';
import { format } from 'date-fns';
import { clearInputBoxes } from './add-todo';
import LockMinus from './lock-minus.png';
import OpenLock from './lock-open-minus.png';
import { getMainProjectList } from './project-handler';

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

function displayTodoDescription(e){

    let description = e.target.parentNode.querySelector('.hidden');
    console.log(description);

    if (!description.classList.contains('visible')){
        description.classList.add('visible');
    } else {
        description.classList.remove('visible');
    }
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

    const todoDescription = document.createElement('span');
    todoDescription.classList.add('hidden');
    todoDescription.innerText = todo.description;

    const todoPriority = document.createElement('span');
    todoPriority.innerText = formatPriority(todo.priority);
    const todoDate = document.createElement('span');

    if (!Number.isNaN(new Date(todo.dueDate).getTime())){
    } else {
        todo.dueDate = new Date();
    }
    todoDate.innerText = format(todo.dueDate, 'MMMM do, yyyy');

    expandButtonDiv.append(todoTitle, todoDescription, todoPriority, todoDate);
    expandButton.addEventListener('click', function(event){ displayTodoDescription(event) })
    
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

function displayProjectDeleteBtns(){
    let deleteButtons = document.querySelectorAll('.delete-button');
    let unlockBtnImg = document.getElementById('unlock-button-img');
    if (unlockBtnImg.src == LockMinus){
        unlockBtnImg.src = OpenLock;
    } else {
        unlockBtnImg.src = LockMinus;
    }
    console.log(deleteButtons.classList);
    deleteButtons.forEach((button) => button.classList.toggle('visible'));
}


export { 
    displayTodoInput, 
    removeTodoElement, 
    addTodoElement, 
    changeArticleHeader,
    toggleAddTaskButton,
    displayNewProjectInput,
    displayProjectDeleteBtns };