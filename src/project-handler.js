
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
        console.log(projectTodoList[i].id);
    }
    projectHolder.todoList = projectTodoList;

}


export { getCurrentProject, setCurrentProject, reIndexProject };