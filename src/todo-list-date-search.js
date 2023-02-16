import { getMainProjectList } from "./project-handler";
import { format, isSameWeek } from 'date-fns';
import Project from "./project";
import { todoListPopulator } from "./list-populator";
import { swapCurrentProject } from "./project-handler";

function concatAllTodos(){
    let allProjects = getMainProjectList();
    let allTodos = [];

    for (let i = 0; i < allProjects.length; i++){
        allTodos = [].concat(allTodos, allProjects[i].todoList);
    }

    return allTodos;

}

function getFormattedToday(){
    const date = new Date();
    let formattedDate = format(date, 'dd-MM-yyyy');
    return formattedDate;
}


function findDueToday(){
    let allTodos = concatAllTodos();
    let dueToday = [];
    let dateToday = getFormattedToday();

    for (let i = 0; i < allTodos.length; i++){
        let formattedDueDate = format(allTodos[i].dueDate, 'dd-MM-yyyy');
        if (formattedDueDate === dateToday){
            dueToday.push(allTodos[i]);
        }
    }

    let dueTodayProject = new Project({
        title: 'Due Today',
        todoList: dueToday
    })
    
    swapCurrentProject(dueTodayProject);

}

function findDueThisWeek(){
    console.log('ayyy lmao');
    let allTodos = concatAllTodos();
    let dueThisWeek = [];
    let dateToday = new Date();

    for (let i = 0; i < allTodos.length; i++){
        if (isSameWeek(dateToday, allTodos[i].dueDate)){
            console.log('we got one thats due');
            dueThisWeek.push(allTodos[i]);
        }
    }

    let dueThisWeekProject = new Project({
        title: 'Due This Week',
        todoList: dueThisWeek
    })

    swapCurrentProject(dueThisWeekProject);


}


export { findDueToday, findDueThisWeek };