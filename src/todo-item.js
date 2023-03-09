class TodoItem {
    constructor({ id, title, description, dueDate, priority }){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority

    }

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