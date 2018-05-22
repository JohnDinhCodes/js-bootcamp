let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

let todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters) {
    
    let filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    if (filters.hideCompleted) {
        filteredTodos = incompleteTodos
    }

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.title
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#create-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    const newTodo = e.target.newTodo.value
    todos.push({
        title: newTodo,
        completed: false
    })
    todosJSON = JSON.stringify(todos)
    localStorage.setItem('todos', todosJSON)
    renderTodos(todos, filters)
    e.target.newTodo.value = ''    
})
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
