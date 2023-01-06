import CheckboxIcon from './checkbox-outline.png';
import InboxIcon from './inbox-arrow.png';
import TodayIcon from './sun-clock.png';
import WeekIcon from './calendar-range.png';
import PlusIcon from './plus-thick.png';

function divCreatorAppender(className, parent) {
    const div = document.createElement('div');
    div.className = className;
    parent.appendChild(div);
    return div;
}

function headerSetup(headerDiv) {
    const logoImg = document.createElement('img');
    logoImg.src = CheckboxIcon;
    headerDiv.appendChild(logoImg);
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = 'To-do List';
    headerDiv.appendChild(headerTitle);
}

function sidebarSetup(sidebarDiv) {

    //Create list of buttons at the top of the sidebar
    const topList = document.createElement('ul');

    const inbox = document.createElement('li');
    const inboxButton = document.createElement('button');
    const inboxImg = document.createElement('img');
    inboxImg.src = InboxIcon;
    const inboxText = document.createElement('span');
    inboxText.innerText = 'Inbox';
    inboxButton.append(inboxImg, inboxText);
    inbox.append(inboxButton);

    const dueToday = document.createElement('li');
    const dueTodayButton = document.createElement('button');
    const dueTodayImg = document.createElement('img');
    dueTodayImg.src = TodayIcon;
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due Today';
    dueTodayButton.append(dueTodayImg, dueTodayText);
    dueToday.append(dueTodayButton);

    const dueThisWeek = document.createElement('li');
    const dueWeekBtn = document.createElement('button');
    const dueWeekImg = document.createElement('img');
    dueWeekImg.src = WeekIcon;
    const dueWeekText = document.createElement('span');
    dueWeekText.innerText = 'Due This Week';
    dueWeekBtn.append(dueWeekImg, dueWeekText);
    dueThisWeek.append(dueWeekBtn);

    topList.append(inbox, dueToday, dueThisWeek);

    //Setup the list of projects at the bottom of the sidebar
    const bottomListHeader = document.createElement('h3');
    bottomListHeader.innerText = 'Projects';

    const bottomList = document.createElement('ul');
    bottomList.id = 'project-list';

    const addProjectBtn = document.createElement('button');
    const addProjectImg = document.createElement('img');
    addProjectImg.src = PlusIcon;
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProjectBtn.append(addProjectImg, addProjectText);

    sidebarDiv.append(topList, bottomListHeader, bottomList, addProjectBtn);
}

function articleSetup(articleDiv) {
    const articleHeader = document.createElement('h2');
    articleHeader.id = 'article-header';
    articleHeader.innerText = 'Inbox';

    const taskList = document.createElement('ul');
    taskList.id = 'task-list';

    const addTaskButton = document.createElement('button');
    const addTaskImg = document.createElement('img');
    addTaskImg.src = PlusIcon;
    const addTaskText = document.createElement('span');
    addTaskText.innerText = 'Add Task';
    addTaskButton.append(addTaskImg, addTaskText);

    articleDiv.append(articleHeader, taskList, addTaskButton);
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

export { initialDOMSetup }