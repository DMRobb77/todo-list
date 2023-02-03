import { displayTodoInput } from "./DOM-manipulation";
import TodoItem from "./todo-item";

function addTodo(){
    const taskInput = document.getElementById('task-input');
    const taskTitle = document.getElementById('title-input-box');
    const taskDescription = document.getElementById('description-input-box');
    const taskPriority = document.getElementById('priority-input-box');
    const taskDate = document.getElementById('date-input-box');
    if (taskInput.classList.contains('visible') && taskTitle.value)
    {
        console.log([taskTitle.value, taskDescription.value, 
            taskPriority.value, taskDate.value]);

    } else {
        displayTodoInput();
    }


}

export { addTodo };