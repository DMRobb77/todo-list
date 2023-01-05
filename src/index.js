import './style.css';
import './normalize.css';
import TodoItem from './todo-item';
import Project from './project';
import { initialDOMSetup } from './DOM-manipulation';


const testNote1 = TodoItem();
testNote1.setId(1);
testNote1.setTitle('bazinga');
testNote1.setDescription('wowza');

const testNote2 = TodoItem();
testNote2.setId(2);
testNote2.setTitle('bazoople');
testNote2.setDescription('bibalglg');


const testProject = Project();
testProject.setId(1);
testProject.setNoteList([testNote1, testNote2]);

console.log(testProject.getNoteList()[0].getTitle());



initialDOMSetup();