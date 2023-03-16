import { removeTodo } from './remove-todo';
import { format } from 'date-fns';
import { clearInputBoxes } from './add-todo';
import LockMinus from './lock-minus.png';
import OpenLock from './lock-open-minus.png';
import { TodoItem } from './todo-item';
import { submitEditedTodo } from './modify-todo';

function displayTodoInput(){
    const taskInput = document.getElementById('task-input');
    taskInput.classList.toggle('visible');
    taskInput.firstChild.focus();
    clearInputBoxes();
    hideAndSubmitEditedTodo();
}

function displayNewProjectInput(){

    const inputDiv = document.getElementById('project-input');
    inputDiv.classList.toggle('visible');
    inputDiv.firstChild.focus();
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

    if (!description.classList.contains('visible')){
        description.classList.add('visible');
    } else {
        description.classList.remove('visible');
    }
}

function createEditBoxes(){

    let taskEditDiv = document.createElement('div');
    taskEditDiv.id = 'task-edit';
    let editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.id = 'title-edit-box';
    editTitle.maxLength = 48;
    let editDescription = document.createElement('input');
    editDescription.type = 'text';
    editDescription.id = 'description-edit-box';
    editDescription.maxLength = 68;
    let editPriority = document.createElement('select');
    editPriority.innerHTML = 
        `
            <option value='2'>🟥 High</option>
            <option selected value='1'>🟨 Medium</option>
            <option value='0'>🟩 Low</option>
        `;
    editPriority.id = 'priority-edit-box';
    let editDueDate = document.createElement('input');
    editDueDate.type = 'date';
    editDueDate.id = 'date-edit-box';
    taskEditDiv.append(editTitle, editDescription, editPriority, editDueDate);

    editTitle.onkeydown = function(e){
        if(e.key == 'Enter'){
            hideAndSubmitEditedTodo();
        }
        };
    
    editDescription.onkeydown = function(e){
        if(e.key == 'Enter'){
            hideAndSubmitEditedTodo();
        }
        };

    editDueDate.onkeydown = function(e){
        if(e.key == 'Enter'){
            hideAndSubmitEditedTodo();
        }
        };

        return taskEditDiv;
}

function showTodoEdtiable(todoElement, originalTodo){

    let editableTodo = createEditBoxes();
    
    switch (originalTodo.priority){
        case `🟩 Low`:
            editableTodo.children[2].selectedIndex = 2;
            break;
        case `🟨 Medium`:
            editableTodo.children[2].selectedIndex = 1;
            break;
        case `🟥 High`:
            editableTodo.children[2].selectedIndex = 0;
            break;
        default:
            console.log(`Priority couldn't be converted.`);
            break;
    }

    editableTodo.children[0].defaultValue = originalTodo.title;
    editableTodo.children[1].defaultValue = originalTodo.description;
    editableTodo.children[3].defaultValue = originalTodo.dueDate;

    let listItem = todoElement.parentNode.parentNode;

    listItem.insertBefore(editableTodo, listItem.children[2]);

    todoElement.parentNode.remove();
}

function hideAndSubmitEditedTodo(){
    submitEditedTodo();
}

function editTodo(todoButton){

    if (!document.getElementById('task-edit')){

        let todoElement = todoButton.todoButton;
        let todoTitle = todoElement.firstChild.firstChild;
        let todoDescription = todoElement.firstChild.children[1];
        let todoPrio = todoElement.children[1];
        let todoDate = todoElement.children[2];
    
        let todoList = Array.prototype.slice.call(document.getElementById('task-list').children);
        let todoId = todoList.indexOf(todoElement.parentNode.parentNode);
    
        let todo = new TodoItem({
            id: todoId,
            title: todoTitle.innerText,
            description: todoDescription.innerText,
            dueDate: todoDate.innerText,
            priority: todoPrio.innerText
        });
    
        showTodoEdtiable(todoElement, todo);

    } else {
        hideAndSubmitEditedTodo();
    }
}

function addTodoElement({ todo, listDisplay} = {}){
    const listItem = document.createElement('li');

    const doneButton = document.createElement('button');
    doneButton.classList.add('remove-task');
    
    const expandButton = document.createElement('button');
    const expandButtonDiv = document.createElement('div');
    expandButtonDiv.id = 'expand-task';
    expandButton.append(expandButtonDiv);

    const todoTitle = document.createElement('p');
    todoTitle.id = 'todo-title';
    todoTitle.innerText = todo.title;

    const todoDescription = document.createElement('p');
    todoDescription.classList.add('hidden');

    if (todo.description == ''){
        todoDescription.innerText = 'No description';
    } else {
        todoDescription.innerText = todo.description;
    }

    const titleAndDescription = document.createElement('div');
    titleAndDescription.id = 'title-and-description';
    titleAndDescription.append(todoTitle, todoDescription);

    const todoPriority = document.createElement('p');
    todoPriority.innerText = formatPriority(todo.priority);
    todoPriority.id = 'todo-prio';
    const todoDate = document.createElement('p');
    todoDate.id = 'todo-date';

    if (!Number.isNaN(new Date(todo.dueDate).getTime())){
    } else {
        todo.dueDate = new Date();
    }
    todoDate.innerText = format(todo.dueDate, 'MMMM do, yyyy');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');

    expandButtonDiv.append(titleAndDescription, todoPriority, todoDate);
    expandButton.addEventListener('click', function(event){ displayTodoDescription(event) })
    
    listItem.append(doneButton, expandButton, editButton);
    listDisplay.append(listItem);

    editButton.addEventListener('click', function(event){ editTodo( {
        todoButton: expandButtonDiv
    })});

    doneButton.addEventListener('click', function(){ removeTodo( {
        todoElement: listItem,
        todoIndex: todo.id
    }) } );
}

function changeArticleHeader(project){
    const articleHeader = document.getElementById('article-header');
    articleHeader.innerText = project.title;
}

function toggleEditTaskButtons(buttonDisplay){
    let editButtons = document.getElementsByClassName('edit');

    for (let i = 0; i < editButtons.length; i++){
        if(!buttonDisplay){

            editButtons[i].classList.add('hidden');
        } else if (buttonDisplay){
            editButtons[i].classList.remove('hidden');
        }
    }
}

function toggleAddTaskButton(buttonDisplay){

    let addButton = document.getElementById('add-task-btn');
    if (!buttonDisplay ){
        addButton.classList.add('hidden');
    } else if (buttonDisplay) {
        addButton.classList.remove('hidden');
    } else {
        console.log('Add Task Button toggle has gone horribly wrong.');
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
        deleteButtons.forEach((button) => button.classList.remove('hidden'));
        deleteButtons.forEach((button) => button.classList.add('visible'));
    } else {
        unlockBtnImg.src = LockMinus;
        deleteButtons.forEach((button) => button.classList.add('hidden'));
        deleteButtons.forEach((button) => button.classList.remove('visible'));
    }

}

export { 
    displayTodoInput, 
    removeTodoElement, 
    addTodoElement, 
    changeArticleHeader,
    toggleEditTaskButtons,
    toggleAddTaskButton,
    displayNewProjectInput,
    displayProjectDeleteBtns };