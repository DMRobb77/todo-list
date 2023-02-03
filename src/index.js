import './style.css';
import './normalize.css';
import TodoItem from './todo-item';
import Project from './project';
import { todoListPopulator, projectListPopulator } from './list-populator';
import { initialDOMSetup } from './initial-DOM-setup.js';


const testNote1 = TodoItem();
testNote1.setId(1);
testNote1.setTitle('Title');
testNote1.setDescription('Description');
testNote1.setPriority('low');

const testNote2 = TodoItem();
testNote2.setId(2);
testNote2.setTitle('bazoople');
testNote2.setDescription('bibalglg');

const testProject = Project();
testProject.setId(1);
testProject.setNoteList([testNote1, testNote2]);

const testProject2 = Project();
testProject2.setTitle('Groceries');

const testProject3 = Project();
testProject3.setTitle('Work');

const projectList = [testProject2, testProject3];



initialDOMSetup();

todoListPopulator(testProject);

projectListPopulator(projectList);