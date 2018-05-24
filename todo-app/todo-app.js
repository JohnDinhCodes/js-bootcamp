let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#create-todo').addEventListener('submit', (e) => {
    e.preventDefault()

    const newTodo = event.target.newTodo.value

    todos.push({
        id: uuidv4(),
        title: newTodo,
        completed: false
    })

    saveTodos()
    renderTodos(todos, filters)
    e.target.newTodo.value = ''    
})
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

