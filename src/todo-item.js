const TodoItem = () => {
    let _id = 0;
    let _title = '';
    let _description = '';
    let _dueDate = '';
    let _priority = 0;
    let _notes = '';
    
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

    const setDescription = (newDescription) => {
        _description = newDescription;
    }

    const getDescription = () => {
        return _description;
    }

    const setDueDate = (newDueDate) => {
        _dueDate = newDueDate;
    }

    const getDueDate = () => {
        return _dueDate;
    }

    const setPriority = (newPriority) => {
        _priority = newPriority;
    }

    const getPriority = () => {
        return _priority;
    }


    return {
        setId,
        getId,
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        setDueDate,
        getDueDate,
        setPriority,
        getPriority,
    };
}

function makeStorableTodo(toDo){
    let storableTodo = {
        id: toDo.getId(),
        title: toDo.getTitle(),
        description: toDo.getDescription(),
        dueDate: toDo.getDueDate(),
        priority: toDo.getPriority()
    }
    return storableTodo;
}

export { TodoItem, makeStorableTodo };