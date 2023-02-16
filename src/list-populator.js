import { format } from 'date-fns';
import { TodoItem } from './todo-item';
import { removeTodo } from './remove-todo';
import { reIndexProject } from './project-handler';
import { addTodoElement } from './DOM-manipulation';
import { swapCurrentProject } from './project-handler';


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

    for (let i = 1; i < projectList.length; i++){
        let projectListItem = document.createElement('li');
        let projectButton = document.createElement('button');
        projectButton.innerText = projectList[i].title;
        projectListItem.append(projectButton);
        projectListDisplay.append(projectListItem);   

        projectButton.addEventListener('click', function(){ swapCurrentProject(projectList[i]) });
    }
}

export { todoListPopulator, addTodoToCurrentProject, projectListPopulator };