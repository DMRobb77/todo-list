import { offsetDateTimezone } from "./add-todo";
import { getCurrentProject, setCurrentProject, saveAllProjects, reIndexProject } from "./project-handler";
import { TodoItem } from "./todo-item";

function submitEditedTodo(){

    let taskInput = document.getElementById('task-edit');
    let taskTitle = document.getElementById('title-edit-box');
    let taskDescription = document.getElementById('description-edit-box');
    let taskPriority = document.getElementById('priority-edit-box');
    let taskDate = document.getElementById('date-edit-box');

    if (taskTitle.value) {

        let newTodo = new TodoItem({
            title: taskTitle.value,
            description: taskDescription.value,
            dueDate: taskDate.value,
            priority: parseInt(taskPriority.value)
        });

        console.log(newTodo);
    }

}


export { submitEditedTodo };


/*

const taskInput = document.getElementById('task-input');
const taskTitle = document.getElementById('title-input-box');
const taskDescription = document.getElementById('description-input-box');
const taskPriority = document.getElementById('priority-input-box');
const taskDate = document.getElementById('date-input-box');

if (taskInput.classList.contains('visible') && taskTitle.value)
{
   
    //Take the input, make a to-do and assign it to the active project
    //Refresh the article view so the new note pops up
    //Clear the input and hide the boxes

    let newTodo = new TodoItem({
        title: taskTitle.value,
        description: taskDescription.value,
        dueDate: offsetDateTimezone(taskDate.value),
        priority: parseInt(taskPriority.value)
    });

    let testProject = getCurrentProject();

    addTodoToCurrentProject({ toDo: newTodo, currentProject: testProject});

    todoListPopulator(testProject);
    
    reIndexProject(testProject);

    saveAllProjects();

    displayTodoInput();

    clearInputBoxes();


} else {
    displayTodoInput();
}

*/