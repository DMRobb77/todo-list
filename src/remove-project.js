import { getMainProjectList, reIndexMainProjectList, setMainProjectList } from "./project-handler";



function removeProject({ projectElement, projectIndex } = {}){
    projectElement.remove();

    console.log(projectIndex);

    let projectList = getMainProjectList();
    projectList.splice(projectIndex, 1);
    console.log(projectList);
    setMainProjectList(projectList);
    reIndexMainProjectList(projectList);


    console.log(getMainProjectList());
}

export { removeProject };