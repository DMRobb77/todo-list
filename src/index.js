import './style.css';
import './normalize.css';
import { TodoItem, makeStorableTodo } from './todo-item';
import Project from './project';
import { todoListPopulator, projectListPopulator } from './list-populator';
import { initialDOMSetup } from './initial-DOM-setup.js';
import { setCurrentProject, setMainProjectList } from './project-handler';


let testNote1 = new TodoItem({
    id: 0,
    title: 'Test Title',
    description: 'This is a test description',
    dueDate: new Date("2/14/23"),
    priority: 1
})

let testNote2 = new TodoItem({
    id: 1,
    title: 'Another Test Title',
    description: 'This is another test description',
    dueDate: new Date("2/14/23"),
    priority: 0
})

let testNote4 = new TodoItem({
    id: 2,
    title: 'Another Another Test Title',
    description: 'This is another test description',
    dueDate: new Date("5/15/23"),
    priority: 0
})

let testNote3 = new TodoItem({
    id: 0,
    title: 'Test test test',
    description: 'Different project though',
    dueDate: new Date("2/18/23"),
    priority: 2
})

let defaultInboxProject = new Project({
    id: 0,
    title: 'Inbox',
    todoList: [ testNote1, testNote2, testNote4 ]
})

let testProject2 =  new Project({
    id: 1,
    title: 'Test Project 2',
    todoList: [ testNote3 ]
})

let projectList = [ defaultInboxProject, testProject2 ];
setMainProjectList(projectList);

//Testing storable

window.localStorage.setItem('testProject', JSON.stringify(defaultInboxProject));
window.localStorage.setItem('testProjectList', JSON.stringify(projectList))

setCurrentProject(defaultInboxProject);

initialDOMSetup();

todoListPopulator(defaultInboxProject);

projectListPopulator(projectList);



/*
let testNote2 = TodoItem();
testNote2.setId(2);
testNote2.setTitle('bazoople');
testNote2.setDescription('bibalglg');
let storableTestNote2 = makeStorableTodo(testNote2);

let testProject = Project();
testProject.setId(1);
testProject.setNoteList([testNote1, testNote2]);


const testProject2 = Project();
testProject2.setTitle('Groceries');

const testProject3 = Project();
testProject3.setTitle('Work');

const projectList = [testProject2, testProject3];

console.log(testProject);


const storableTestList = {
    title: 'testProject',
    noteList: [storableTestNote1, storableTestNote2]
}

//local storage test 
window.localStorage.setItem('testProject', JSON.stringify(storableTestList));
console.log(window.localStorage.getItem('testProject'));


initialDOMSetup();

todoListPopulator(testProject);

projectListPopulator(projectList);

*/