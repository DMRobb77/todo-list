import { getMainProjectList, reIndexMainProjectList, setMainProjectList, swapCurrentProject } from "./project-handler";

function removeProject({ projectElement } = {}){

    let projectElementList = projectElement.parentNode;

    let projectIndex = Array.prototype.indexOf.call(projectElementList.children, projectElement);

    projectIndex += 3;

    let projectList = getMainProjectList();
    projectList.splice(projectIndex, 1);
    setMainProjectList(projectList);
    reIndexMainProjectList(projectList);

    swapCurrentProject(projectList[2]);
    projectElement.remove();
}

export { removeProject };