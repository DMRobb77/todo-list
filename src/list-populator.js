import { addTodoElement } from './DOM-manipulation';
import { swapCurrentProject } from './project-handler';
import { removeProject } from './remove-project';
import OpenLock from './lock-open-minus.png';

function todoListPopulator(currentProject){

    const projectTodoList = currentProject.todoList;
    const listDisplay = document.getElementById('task-list');
    listDisplay.innerHTML = '';

    for (let i = 0; i < projectTodoList.length; i++){
        addTodoElement({
            todo: projectTodoList[i], 
            listDisplay: listDisplay
        });
    }
}

function addTodoToCurrentProject({ toDo, currentProject } = {}){
    let todoList = currentProject.todoList;
    todoList.push(toDo);
    currentProject.todoList = todoList;
}

function insertTodoAtIndex({ toDo, currentProject, index } = {}){
    let todoList = currentProject.todoList;
    todoList.splice(index, 1, toDo);
    currentProject.todoList = todoList;
}

function projectListPopulator(projectList){
    const projectListDisplay = document.getElementById('project-list');
    projectListDisplay.innerHTML = '';

    console.log(projectList);

    for (let i = 3; i < projectList.length; i++){
        let projectListItem = document.createElement('li');
        let projectButton = document.createElement('button');
        projectButton.innerText = projectList[i].title;
        projectListItem.append(projectButton);
        
        let projectDeleteBtn = document.createElement('button');
        projectListItem.append(projectDeleteBtn);
        projectDeleteBtn.classList.add('delete-button');

        let unlockBtnImg = document.getElementById('unlock-button-img');
        if (unlockBtnImg.src != OpenLock){
            projectDeleteBtn.classList.add('hidden');
        }

        projectListDisplay.append(projectListItem);

        projectDeleteBtn.addEventListener('click', function(){ removeProject({
            projectElement: projectListItem,
            projectIndex: i
        }) });

        projectButton.addEventListener('click', function(event){ swapCurrentProject(projectList[i], event)});
    }
}

export { todoListPopulator, addTodoToCurrentProject, projectListPopulator, insertTodoAtIndex };