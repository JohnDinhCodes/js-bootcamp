const todos = [{
    title: 'Study JavaScript',
    completed: true
}, {
    title: 'Study React',
    completed: false
}, {
    title: 'Update Portfolio',
    completed: false
}, {
    title: 'Learn PHP',
    completed: true
}, {
    title: 'Create CMS Website',
    completed: false
}]
// const todos = ['Study JavaScript', 'Study React', 'Update Portfolio', 'Learn PHP', 'Create CMS Website']

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

deleteTodo(todos, 'study javascript')
console.log(todos)