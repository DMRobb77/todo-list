const Project = () => {
    let _id = 0;
    let _title = '';
    let _noteList = [];

    const setId = (newId) => {
        _id = newId;
    }

    const getId = () => {
        return _id;
    }

    const setTitle = (newTitle) => {
        _title = newTitle;
    }

    const getTitle = () => {
        return _title;
    }

    const setNoteList = (newNoteList) => {
        _noteList = newNoteList;
    }

    const getNoteList = () => {
        return _noteList;
    }

    return {
        setId,
        getId,
        setTitle,
        getTitle,
        setNoteList,
        getNoteList
    }

}

export default Project;