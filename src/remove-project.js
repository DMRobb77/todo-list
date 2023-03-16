import { getMainProjectList, reIndexMainProjectList, setMainProjectList, swapCurrentProject } from "./project-handler";

function removeProject({ projectElement, projectIndex } = {}){
    projectElement.remove();

    let projectList = getMainProjectList();
    projectList.splice(projectIndex, 1);
    setMainProjectList(projectList);
    reIndexMainProjectList(projectList);

    console.log(`Index is ${projectIndex}`);

    console.log(projectList);

    swapCurrentProject(projectList[2]);
}


export { removeProject };