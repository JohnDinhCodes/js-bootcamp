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

const filters = {
    searchText: '',
    hideCompleted: false
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
    renderTodos(todos, filters)
    e.target.newTodo.value = ''    
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// 1. Create a checkbox and setup event listener --> "hide completed"
// 2. Create new hideCompleted filter (default false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items