import LogoIcon from './checkbox-outline.png';
import InboxIcon from './inbox-arrow.png';
import TodayIcon from './sun-clock.png';
import WeekIcon from './calendar-range.png';
import PlusIcon from './plus-thick.png';
import LockMinus from './lock-minus.png';
import { addTodo } from './add-todo';
import { addProject } from './add-project';
import { swapCurrentProject, getMainProjectList } from './project-handler';
import { findDueToday, findDueThisWeek } from './todo-list-date-search';
import { displayProjectDeleteBtns } from './DOM-manipulation';

function divCreatorAppender(className, parent) {
    //Creates a div with 'className' and appends it to 'parent'
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}

function headerSetup(headerDiv) {
    //Creates the header and adds a logo image and title
    const logoImg = document.createElement('img');
    logoImg.src = LogoIcon;
    logoImg.id = 'logo';
    headerDiv.appendChild(logoImg);
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'To-do List';
    headerDiv.appendChild(headerTitle);
}

function sidebarSetup(sidebarDiv) {

    //Creates a list of buttons at the top of the sidebar
    const topList = document.createElement('ul');
    topList.id = 'top-list';

    const inbox = document.createElement('li');
    const inboxButton = document.createElement('button');
    inboxButton.classList.add('active-project');
    const inboxImg = document.createElement('img');
    inboxImg.src = InboxIcon;

    const inboxProject = getMainProjectList()[2];
    const inboxText = document.createElement('p');
    inboxText.innerText = 'Inbox';
    inboxButton.append(inboxImg, inboxText);
    inbox.append(inboxButton);
    inboxButton.addEventListener('click', function(event){swapCurrentProject(inboxProject, event)});

    const dueToday = document.createElement('li');
    const dueTodayButton = document.createElement('button');
    const dueTodayImg = document.createElement('img');
    dueTodayImg.src = TodayIcon;
    const dueTodayText = document.createElement('p');
    dueTodayText.innerText = 'Due Today';
    dueTodayButton.append(dueTodayImg, dueTodayText);
    dueToday.append(dueTodayButton);
    dueToday.addEventListener('click', function(event){ findDueToday(event)});

    const dueThisWeek = document.createElement('li');
    const dueWeekBtn = document.createElement('button');
    const dueWeekImg = document.createElement('img');
    dueWeekImg.src = WeekIcon;
    const dueWeekText = document.createElement('p');
    dueWeekText.innerText = 'Due This Week';
    dueWeekBtn.append(dueWeekImg, dueWeekText);
    dueThisWeek.append(dueWeekBtn);
    dueWeekBtn.addEventListener('click', function(event){ findDueThisWeek(event)});

    topList.append(inbox, dueToday, dueThisWeek);

    //Creates a list of projects at the bottom of the sidebar
    const bottomListHeaderDiv = document.createElement('div');
    bottomListHeaderDiv.id = 'project-header';
    const bottomListHeader = document.createElement('h3');
    bottomListHeader.innerText = 'Projects';
    const bottomListUnlockBtn = document.createElement('button');
    bottomListUnlockBtn.id = 'unlock-button';
    const unlockBtnImg = document.createElement('img');
    unlockBtnImg.src = LockMinus;
    unlockBtnImg.id = 'unlock-button-img';
    bottomListUnlockBtn.append(unlockBtnImg);
    bottomListHeaderDiv.append( bottomListHeader, bottomListUnlockBtn);
    bottomListUnlockBtn.addEventListener('click', displayProjectDeleteBtns);

    const bottomList = document.createElement('ul');
    bottomList.id = 'project-list';

    //Create the project input box
    const projectInputDiv =  document.createElement('div');
    projectInputDiv.id = 'project-input';
    projectInputDiv.classList = 'hidden';
    const inputProjectTitle = document.createElement('input');
    inputProjectTitle.type = 'text';
    inputProjectTitle.id = 'project-input-box';
    inputProjectTitle.maxLength = 38;
    projectInputDiv.append(inputProjectTitle);

    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'add-project';
    const addProjectImg = document.createElement('img');
    addProjectImg.src = PlusIcon;
    const addProjectText = document.createElement('p');
    addProjectText.innerText = 'Add Project';
    addProjectBtn.append(addProjectImg, addProjectText);
    addProjectBtn.addEventListener('click', addProject);
    inputProjectTitle.onkeydown = function(e){
        if(e.key == 'Enter'){
            addProject();
        }
     };

    sidebarDiv.append(
        topList, 
        bottomListHeaderDiv, 
        bottomList,
        projectInputDiv,
        addProjectBtn);
}


function createTaskInputBox(enterKeyPress){

    //Creates the task input box
    const taskInputDiv = document.createElement('div');
    taskInputDiv.id = 'task-input';
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title-input-box';
    inputTitle.maxLength = 48;
    const inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description-input-box';
    inputDescription.maxLength = 68;
    const inputPriority = document.createElement('select');
    inputPriority.innerHTML = 
        `
            <option value='2'>🟥 High</option>
            <option selected value='1'>🟨 Medium</option>
            <option value='0'>🟩 Low</option>
        `;
    inputPriority.id = 'priority-input-box';
    const inputDueDate = document.createElement('input');
    inputDueDate.type = 'date';
    inputDueDate.id = 'date-input-box';
    taskInputDiv.append(inputTitle, inputDescription, inputPriority, inputDueDate);

    inputTitle.onkeydown = function(e){
        if(e.key == 'Enter'){
            enterKeyPress();
        }
     };
    
    inputDescription.onkeydown = function(e){
        if(e.key == 'Enter'){
            enterKeyPress();
        }
     };

    inputDueDate.onkeydown = function(e){
        if(e.key == 'Enter'){
            enterKeyPress();
        }
     };

     return taskInputDiv;

}


function articleSetup(articleDiv) {
    const articleHeader = document.createElement('h2');
    articleHeader.id = 'article-header';
    articleHeader.innerText = 'Inbox';

    const taskList = document.createElement('ul');
    taskList.id = 'task-list';
    
    const taskInputDiv = createTaskInputBox(addTodo);
    taskInputDiv.classList = 'hidden';

    //Creates the button for adding tasks
    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'add-task-btn';
    const addTaskImg = document.createElement('img');
    addTaskImg.src = PlusIcon;
    const addTaskText = document.createElement('p');
    addTaskText.innerText = 'Add Task';
    addTaskButton.append(addTaskImg, addTaskText);

    //Append elements and implement button behavior
    articleDiv.append(articleHeader, taskList, taskInputDiv, addTaskButton);
    addTaskButton.addEventListener('click', addTodo);
}

function initialDOMSetup() {
    const contentDiv = document.getElementById('content');

    const header = divCreatorAppender('header', contentDiv);

    const main = divCreatorAppender('main', contentDiv);

    const footer = divCreatorAppender('footer', contentDiv);

    const sidebar = divCreatorAppender('sidebar', main);

    const article = divCreatorAppender('article', main);

    headerSetup(header);

    sidebarSetup(sidebar);

    articleSetup(article);
}

export { initialDOMSetup, createTaskInputBox };