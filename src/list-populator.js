import { addTodoElement } from './DOM-manipulation';
import { swapCurrentProject } from './project-handler';
import { removeProject } from './remove-project';
import DeleteButton from './trash-can.png';

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

function projectListPopulator(projectList){
    const projectListDisplay = document.getElementById('project-list');
    projectListDisplay.innerHTML = '';

    for (let i = 3; i < projectList.length; i++){
        let projectListItem = document.createElement('li');
        let projectButton = document.createElement('button');
        projectButton.innerText = projectList[i].title;
        projectListItem.append(projectButton);
        
        let projectDeleteBtn = document.createElement('button');
        let deleteBtnImg = document.createElement('img');
        deleteBtnImg.src = DeleteButton;
        projectDeleteBtn.append(deleteBtnImg);
        projectListItem.append(projectDeleteBtn);
        projectDeleteBtn.classList.add('delete-button');
        projectDeleteBtn.classList.add('hidden');

        projectListDisplay.append(projectListItem);

        projectDeleteBtn.addEventListener('click', function(){ removeProject({
            projectElement: projectListItem,
            projectIndex: i
        }) });

        projectButton.addEventListener('click', function(){ swapCurrentProject(projectList[i]) });
    }
}

export { todoListPopulator, addTodoToCurrentProject, projectListPopulator };