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
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

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

// 1. Create a form with a single input for todo text
// 2. Setup a submit handler and cancel the default action
// 3. Add a new item to the todos array with that text data (completed value of false)
// 4. Rerender the application