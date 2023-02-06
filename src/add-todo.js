import { displayTodoInput } from "./DOM-manipulation";
import { TodoItem } from "./todo-item";
import Project from "./project";
import { todoListPopulator, addTodoToCurrentProject } from "./list-populator";


function addTodo(){
    const taskInput = document.getElementById('task-input');
    const taskTitle = document.getElementById('title-input-box');
    const taskDescription = document.getElementById('description-input-box');
    const taskPriority = document.getElementById('priority-input-box');
    const taskDate = document.getElementById('date-input-box');
    const inputBoxes = [ taskTitle, taskDescription, taskDate ];

    if (taskInput.classList.contains('visible') && taskTitle.value)
    {
       
        //Take the input, make a to-do and assign it to the active project
        //Refresh the article view so the new note pops up
        //Clear the input and hide the boxes

        const newNote = TodoItem();
        newNote.setTitle(taskTitle.value);
        newNote.setDescription(taskDescription.value);
        newNote.setDueDate(taskDate.value);
        newNote.setPriority(taskPriority.value);

        let testProject = JSON.parse(window.localStorage.getItem('testProject'));
        console.log(testProject.noteList);


        //addTodoToCurrentProject({ toDo: newNote, currentProject: testProject});

        //todoListPopulator(testProject);
        
        displayTodoInput();
        
        taskPriority.value = 'medium';

        clearInputBoxes(inputBoxes);


    } else {
        displayTodoInput();
    }


}


function clearInputBoxes(inputBoxes) {
    for (let i = 0; i < inputBoxes.length; i++) {
            inputBoxes[i].value = "";
    }
}


export { addTodo };