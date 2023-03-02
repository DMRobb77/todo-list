import './style.css';
import './normalize.css';
import { TodoItem, makeStorableTodo } from './todo-item';
import Project from './project';
import { todoListPopulator, projectListPopulator } from './list-populator';
import { initialDOMSetup } from './initial-DOM-setup.js';
import { reIndexMainProjectList, setCurrentProject, setMainProjectList } from './project-handler';

//Create a new set of default projects if one doesn't exist in storage

let projectList = [];
let defaultInboxProject = [];

if (!window.localStorage.getItem('projectList')){

    defaultInboxProject = new Project({
        id: 2,
        title: 'Inbox',
        todoList: []
    });

    let defaultDueTodayProject = new Project({
        id: 0,
        title: 'Due Today',
        todoList: []
    });
    
    let defaultDueThisWeekProject = new Project({
        id: 1,
        title: 'Due This Week',
        todoList: []
    });
    
    projectList = [ defaultDueTodayProject, defaultDueThisWeekProject, defaultInboxProject ];
    window.localStorage.setItem('projectList', JSON.stringify(projectList));

} else {
    projectList = JSON.parse(window.localStorage.getItem('projectList'));

    let reprojectedList = [];

    for (let i = 0; i < projectList.length; i++){
        let fixedProject = new Project({
            id: projectList[i].id,
            title: projectList[i].title,
            todoList: projectList[i].todoList
        })

        for (let i = 0; i < fixedProject.todoList.length; i++){
            fixedProject.todoList[i].dueDate = new Date(fixedProject.todoList[i].dueDate);
            console.log(fixedProject.todoList[i].dueDate);
        }

        reprojectedList.push(fixedProject);
    }
    projectList = reprojectedList;

    defaultInboxProject = reprojectedList[2];
    //defaultInboxProject = JSON.parse(window.localStorage.getItem('inboxProject'));
}

setMainProjectList(projectList);

reIndexMainProjectList(projectList);

setCurrentProject(defaultInboxProject);

initialDOMSetup();

todoListPopulator(defaultInboxProject);

projectListPopulator(projectList);
