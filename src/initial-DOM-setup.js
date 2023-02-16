import LogoIcon from './checkbox-outline.png';
import InboxIcon from './inbox-arrow.png';
import TodayIcon from './sun-clock.png';
import WeekIcon from './calendar-range.png';
import PlusIcon from './plus-thick.png';
import { addTodo } from './add-todo';
import { addProject } from './add-project';
import { projectListPopulator } from './list-populator';
import { swapCurrentProject, getMainProjectList } from './project-handler';
import { findDueToday, findDueThisWeek } from './todo-list-date-search';

function divCreatorAppender(className, parent) {
    //Creates a div with 'className' and append it 'parent'
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}

function headerSetup(headerDiv) {
    //Creates the header and adds a logo image and title
    const logoImg = document.createElement('img');
    logoImg.src = LogoIcon;
    headerDiv.appendChild(logoImg);
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'To-do List';
    headerDiv.appendChild(headerTitle);
}

function sidebarSetup(sidebarDiv) {

    //Creates a list of buttons at the top of the sidebar
    const topList = document.createElement('ul');

    const inbox = document.createElement('li');
    const inboxButton = document.createElement('button');
    const inboxImg = document.createElement('img');
    inboxImg.src = InboxIcon;

    const inboxProject = getMainProjectList()[0];
    const inboxText = document.createElement('span');
    inboxText.innerText = 'Inbox';
    inboxButton.append(inboxImg, inboxText);
    inbox.append(inboxButton);
    inboxButton.addEventListener('click', function(){
        swapCurrentProject(inboxProject)});

    const dueToday = document.createElement('li');
    const dueTodayButton = document.createElement('button');
    const dueTodayImg = document.createElement('img');
    dueTodayImg.src = TodayIcon;
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due Today';
    dueTodayButton.append(dueTodayImg, dueTodayText);
    dueToday.append(dueTodayButton);
    dueToday.addEventListener('click', findDueToday);


    const dueThisWeek = document.createElement('li');
    const dueWeekBtn = document.createElement('button');
    const dueWeekImg = document.createElement('img');
    dueWeekImg.src = WeekIcon;
    const dueWeekText = document.createElement('span');
    dueWeekText.innerText = 'Due This Week';
    dueWeekBtn.append(dueWeekImg, dueWeekText);
    dueThisWeek.append(dueWeekBtn);
    dueWeekBtn.addEventListener('click', findDueThisWeek);

    topList.append(inbox, dueToday, dueThisWeek);

    //Creates a list of projects at the bottom of the sidebar
    const bottomListHeader = document.createElement('h3');
    bottomListHeader.innerText = 'Projects';

    const bottomList = document.createElement('ul');
    bottomList.id = 'project-list';

    //Create the project input box
    const projectInputDiv =  document.createElement('div');
    projectInputDiv.id = 'project-input';
    projectInputDiv.classList = 'hidden';
    const inputProjectTitle = document.createElement('input');
    inputProjectTitle.type = 'text';
    inputProjectTitle.id = 'project-input-box';
    projectInputDiv.append(inputProjectTitle);

    const addProjectBtn = document.createElement('button');
    const addProjectImg = document.createElement('img');
    addProjectImg.src = PlusIcon;
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProjectBtn.append(addProjectImg, addProjectText);
    addProjectBtn.addEventListener('click', addProject);

    sidebarDiv.append(
        topList, 
        bottomListHeader, 
        bottomList,
        projectInputDiv,
        addProjectBtn);
}

function articleSetup(articleDiv) {
    const articleHeader = document.createElement('h2');
    articleHeader.id = 'article-header';
    articleHeader.innerText = 'Inbox';

    const taskList = document.createElement('ul');
    taskList.id = 'task-list';

    //Creates the task input box
    const taskInputDiv = document.createElement('div');
    taskInputDiv.id = 'task-input';
    taskInputDiv.classList = 'hidden';
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title-input-box';
    const inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description-input-box';
    const inputPriority = document.createElement('select');
    inputPriority.innerHTML = 
        `
            <option value='high'>High</option>
            <option selected value='medium'>Medium</option>
            <option value='low'>Low</option>
        `;
    inputPriority.id = 'priority-input-box';
    const inputDueDate = document.createElement('input');
    inputDueDate.type = 'text';
    inputDueDate.id = 'date-input-box';
    taskInputDiv.append(inputTitle, inputDescription, inputPriority, inputDueDate);

    //Creates the button for adding tasks
    const addTaskButton = document.createElement('button');
    const addTaskImg = document.createElement('img');
    addTaskImg.src = PlusIcon;
    const addTaskText = document.createElement('span');
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

export { initialDOMSetup };