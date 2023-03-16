import { offsetDateTimezone } from "./add-todo";
import { insertTodoAtIndex, todoListPopulator } from "./list-populator";
import { getCurrentProject, setCurrentProject, saveAllProjects, reIndexProject } from "./project-handler";
import { TodoItem } from "./todo-item";
import { findDueThisWeek, findDueToday } from "./todo-list-date-search";


function submitEditedTodo(){

    let taskInput = document.getElementById('task-edit');
    if (!taskInput){
        return;
    }

    let taskTitle = document.getElementById('title-edit-box');
    let taskDescription = document.getElementById('description-edit-box');
    let taskPriority = document.getElementById('priority-edit-box');
    let taskDate = document.getElementById('date-edit-box');

    let taskList = Array.prototype.slice.call(taskInput.parentElement.parentElement.children);

    let index = taskList.indexOf(taskInput.parentElement);

    if (taskTitle.value) {

        let newTodo = new TodoItem({
            title: taskTitle.value,
            description: taskDescription.value,
            dueDate: offsetDateTimezone(taskDate.value),
            priority: parseInt(taskPriority.value)
        });

        let currentProject = getCurrentProject();

        insertTodoAtIndex({ toDo: newTodo, currentProject: currentProject, index: index})

        todoListPopulator(currentProject);

        reIndexProject(currentProject);

        saveAllProjects();

        if (currentProject.id == 0){
            findDueToday();
        } else if (currentProject.id == 1) {
            findDueThisWeek();
        }
    }
}

export { submitEditedTodo };

