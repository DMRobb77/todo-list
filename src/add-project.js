import { displayNewProjectInput } from "./DOM-manipulation";
import Project from "./project";
import { projectListPopulator } from "./list-populator";
import { getMainProjectList, setMainProjectList, reIndexMainProjectList } from "./project-handler";


function addProject(){
    const inputDiv = document.getElementById('project-input');
    const inputTitle = document.getElementById('project-input-box');
    
    if (inputDiv.classList.contains('visible') && inputTitle.value){

        let currentProjectList = getMainProjectList();

        if (!currentProjectList.find(project => project.title == inputTitle.value )){
            let newProject = new Project({
                id: 0,
                title: inputTitle.value,
                todoList: []
            })

            currentProjectList.push(newProject);

            //setMainProjectList(currentProjectList);
            reIndexMainProjectList(currentProjectList);
    
            projectListPopulator(currentProjectList);
    


        }

        displayNewProjectInput();

        inputTitle.value = '';

    } else {
        displayNewProjectInput();
    }
    
}

export { addProject };