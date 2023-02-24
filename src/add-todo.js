import { displayTodoInput } from "./DOM-manipulation";
import { TodoItem } from "./todo-item";
import { todoListPopulator, addTodoToCurrentProject } from "./list-populator";
import { getCurrentProject, reIndexProject } from "./project-handler";

function addTodo(){
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

        //JSON.parse(window.localStorage.getItem('testProject'));

        addTodoToCurrentProject({ toDo: newTodo, currentProject: testProject});

        //window.localStorage.setItem('testProject', JSON.stringify(testProject));

        todoListPopulator(testProject);
        
        reIndexProject(testProject);

        displayTodoInput();

        clearInputBoxes();


    } else {
        displayTodoInput();
    }

}

function offsetDateTimezone(dueDate){
    const dt = new Date(dueDate);
    const dateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return dateOnly;
}

function clearInputBoxes() {
    const taskTitle = document.getElementById('title-input-box');
    const taskDescription = document.getElementById('description-input-box');
    const taskDate = document.getElementById('date-input-box');
    const inputBoxes = [ taskTitle, taskDescription, taskDate ];
    const taskPriority = document.getElementById('priority-input-box');

    taskPriority.value = 1;

    for (let i = 0; i < inputBoxes.length; i++) {
            inputBoxes[i].value = "";
    }
}


export { addTodo, clearInputBoxes };