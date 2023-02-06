import BlankCheckbox from './checkbox-blank-outline.png';
import { format } from 'date-fns';
import { TodoItem } from './todo-item';

function todoElementAssembler(todo, listDisplay){
    const listItem = document.createElement('li');
    const doneButton = document.createElement('button');
    const emptyBoxImg = document.createElement('img');
    emptyBoxImg.src = BlankCheckbox;
    doneButton.append(emptyBoxImg);
    
    const expandButton = document.createElement('button');
    const expandButtonDiv = document.createElement('div');
    expandButton.append(expandButtonDiv);
    const todoTitle = document.createElement('span');
    todoTitle.innerText = todo.getTitle();
    const todoPriority = document.createElement('span');

    todoPriority.innerText = todo.getPriority();
    const todoDate = document.createElement('span');
    todoDate.innerText = 'date';

    expandButtonDiv.append(todoTitle, todoPriority, todoDate);
    
    listItem.append(doneButton, expandButton);
    listDisplay.append(listItem);
}

function todoListPopulator(defaultProject){
    const projectTodoList = defaultProject.getNoteList();
    const listDisplay = document.getElementById('task-list');


    for (let i = 0; i < projectTodoList.length; i++){
        todoElementAssembler(projectTodoList[i], listDisplay);
    }


}


function addTodoToCurrentProject({ toDo, currentProject } = {}){
    let noteList = currentProject.getNoteList();
    noteList.push(toDo);
    currentProject.setNoteList(noteList);
    console.log(noteList);
}


function projectListPopulator(projectList){
    const projectListDisplay = document.getElementById('project-list');


    for (let i = 0; i < projectList.length; i++){

        let projectListItem = document.createElement('li');
        let projectButton = document.createElement('button');
        projectButton.innerText = projectList[i].getTitle();
        projectListItem.append(projectButton);
        projectListDisplay.append(projectListItem);


    }

}

export { todoListPopulator, addTodoToCurrentProject, projectListPopulator };