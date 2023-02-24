import { displayNewProjectInput } from "./DOM-manipulation";
import Project from "./project";
import { projectListPopulator } from "./list-populator";
import { getMainProjectList, setMainProjectList, reIndexMainProjectList } from "./project-handler";


function addProject(){
    const inputDiv = document.getElementById('project-input');
    const inputTitle = document.getElementById('project-input-box');
    
    if (inputDiv.classList.contains('visible') && inputTitle.value){
        let newProject = new Project({
            id: 0,
            title: inputTitle.value,
            todoList: []
        })
        let currentProjectList = getMainProjectList();
        currentProjectList.push(newProject);
        setMainProjectList(currentProjectList);

        projectListPopulator(currentProjectList);

        reIndexMainProjectList(currentProjectList);

        displayNewProjectInput();

        inputTitle.value = '';


    } else {
        displayNewProjectInput();
    }
    
}


export { addProject };