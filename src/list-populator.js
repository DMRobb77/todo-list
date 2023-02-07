import BlankCheckbox from './checkbox-blank-outline.png';
import { format } from 'date-fns';
import { TodoItem } from './todo-item';

function todoElementAssembler(todo, listDisplay){
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
}

function todoListPopulator(currentProject){
    const projectTodoList = currentProject.toDoList;
    const listDisplay = document.getElementById('task-list');
    listDisplay.innerHTML = '';

    for (let i = 0; i < projectTodoList.length; i++){
        todoElementAssembler(projectTodoList[i], listDisplay);
    }

}


function addTodoToCurrentProject({ toDo, currentProject } = {}){
    let toDoList = currentProject.toDoList;
    toDoList.push(toDo);
    currentProject.toDoList = toDoList;
    console.log(toDoList);
}


function projectListPopulator(projectList){
    const projectListDisplay = document.getElementById('project-list');


    for (let i = 0; i < projectList.length; i++){

        let projectListItem = document.createElement('li');
        let projectButton = document.createElement('button');
        projectButton.innerText = projectList[i].title;
        projectListItem.append(projectButton);
        projectListDisplay.append(projectListItem);

    }

}

export { todoListPopulator, addTodoToCurrentProject, projectListPopulator };