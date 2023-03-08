import { todoListPopulator } from "./list-populator";
import { changeArticleHeader, displayTodoInput } from "./DOM-manipulation";
import { toggleAddTaskButton } from "./DOM-manipulation";

let projectHolder = {};

let mainProjectList = {};

function getCurrentProject(){
    return projectHolder;
}

function setCurrentProject(currentProject){
    projectHolder = currentProject;
}

function setMainProjectList(projects){
    mainProjectList = projects;
    window.localStorage.setItem('projectList', JSON.stringify(mainProjectList));
}

function saveAllProjects(){
    window.localStorage.setItem('projectList', JSON.stringify(mainProjectList));
}

function getMainProjectList(){
    return mainProjectList;
}

function reIndexMainProjectList(mainProjectList){
    for (let i = 0; i < mainProjectList.length;  i++){
        mainProjectList[i].id = i;
    }
}

function reIndexProject(currentProject){
    //Adjust to-do ID's so they're in the same index order as the display
    let projectTodoList = currentProject.todoList;

    for (let i = 0; i < projectTodoList.length; i++){
        projectTodoList[i].id = [i];
    }
    projectHolder.todoList = projectTodoList;

}

function swapCurrentProject(newCurrentProject){
    if (newCurrentProject && newCurrentProject != getCurrentProject()){
        setCurrentProject(newCurrentProject);
        todoListPopulator(newCurrentProject);   
        changeArticleHeader(newCurrentProject);

        if (newCurrentProject.id == 0 || newCurrentProject.id == 1){
            toggleAddTaskButton(false);
        } else {
            toggleAddTaskButton(true);
        }
    }

    const todoInputBox = document.getElementById('task-input');
    if (todoInputBox.classList.contains('visible')){
        displayTodoInput();
    }
}


export { 
    getCurrentProject, 
    setCurrentProject, 
    reIndexProject,
    reIndexMainProjectList, 
    setMainProjectList,
    getMainProjectList, 
    swapCurrentProject,
    saveAllProjects
};