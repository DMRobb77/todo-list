import { getCurrentProject, setCurrentProject, reIndexProject, saveAllProjects } from "./project-handler";
import { removeTodoElement } from "./DOM-manipulation";


function removeTodo({ todoElement, todoIndex } = {}){

    removeTodoElement(todoElement);

    let currentProject = getCurrentProject();
    let todoList = currentProject.todoList;

    todoList.splice(todoIndex, 1);
    currentProject.todoList = todoList;
    setCurrentProject(currentProject);

    reIndexProject(currentProject);

    saveAllProjects();
}

export { removeTodo };