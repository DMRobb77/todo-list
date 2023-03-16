import { getMainProjectList } from "./project-handler";
import { format, isSameWeek } from 'date-fns';
import { swapCurrentProject } from "./project-handler";

function concatAllTodos(){
    let allProjects = getMainProjectList();
    let allTodos = [];

    for (let i = 2; i < allProjects.length; i++){
        allTodos = [].concat(allTodos, allProjects[i].todoList);
    }

    return allTodos;

}

function getFormattedToday(){
    const date = new Date();
    let formattedDate = format(date, 'dd-MM-yyyy');
    return formattedDate;
}


function findDueToday(e){
    let allTodos = concatAllTodos();
    let dueToday = [];
    let dateToday = getFormattedToday();
    let dueTodayProject = getMainProjectList()[0];

    for (let i = 0; i < allTodos.length; i++){
        let formattedDueDate = format(allTodos[i].dueDate, 'dd-MM-yyyy');
        if (formattedDueDate === dateToday){
            dueToday.push(allTodos[i]);
        }
    }
    dueTodayProject.todoList = dueToday;
    
    swapCurrentProject(dueTodayProject, e);

}

function findDueThisWeek(e){
    let allTodos = concatAllTodos();
    let dueThisWeek = [];
    let dateToday = new Date();
    let dueThisWeekProject = getMainProjectList()[1];

    for (let i = 0; i < allTodos.length; i++){
        if (isSameWeek(dateToday, allTodos[i].dueDate)){
            dueThisWeek.push(allTodos[i]);
        }
    }

    dueThisWeekProject.todoList = dueThisWeek;

    swapCurrentProject(dueThisWeekProject, e);

}


export { findDueToday, findDueThisWeek };