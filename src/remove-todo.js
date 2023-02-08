import { getCurrentProject, setCurrentProject, reIndexProject } from "./project-handler";

function removeTodo({ todoElement, todoIndex } = {}){
    let currentProject = getCurrentProject();

    todoElement.remove();
    let todoList = currentProject.todoList;
    todoList.splice(todoIndex, 1);
    currentProject.todoList = todoList;
    setCurrentProject(currentProject);

    reIndexProject(currentProject);

    window.localStorage.setItem('testProject', JSON.stringify(currentProject));
}

export { removeTodo };