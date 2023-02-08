import { todoListPopulator } from "./list-populator";

let projectHolder = {};

function getCurrentProject(){
    return projectHolder;
}

function setCurrentProject(currentProject){
    projectHolder = currentProject;
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


    if (newCurrentProject != getCurrentProject()){
        setCurrentProject(newCurrentProject);
        todoListPopulator(newCurrentProject);   
        console.log(`current project is ${newCurrentProject.title}`);
    }
}


export { getCurrentProject, setCurrentProject, reIndexProject, swapCurrentProject };