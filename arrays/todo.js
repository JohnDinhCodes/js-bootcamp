const todos = [{
    title: 'Study JavaScript',
    completed: true
}, {
    title: 'Study React',
    completed: false
}, {
    title: 'Update Portfolio',
    completed: true
}, {
    title: 'Learn PHP',
    completed: false
}, {
    title: 'Create CMS Website',
    completed: false
}]

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const deleteTodo = function (todosObject, todoTitle) {
    const index = todosObject.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index !== -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'study javascript')
// console.log(todos)