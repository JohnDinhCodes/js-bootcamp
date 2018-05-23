// Fetch exisitng todos from localStorage
const getSavedTodos = function () {

    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const pushAndSaveTodos = function (event) {

    const newTodo = event.target.newTodo.value

    todos.push({
        title: newTodo,
        completed: false
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')

    const checkEl = document.createElement('input')
    checkEl.setAttribute('type', 'checkbox')

    const textEl = document.createElement('span')
    textEl.textContent = todo.title

    const delButton = document.createElement('button')
    delButton.textContent = 'x'

    todoEl.appendChild(checkEl)
    todoEl.appendChild(textEl)
    todoEl.appendChild(delButton)

    return todoEl
}

// Generate DOM element list summary
const generateSummaryDOM = function (incompleted) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleted.length} todos left`
    return summary
}

// Render application todos based on filters
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

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}