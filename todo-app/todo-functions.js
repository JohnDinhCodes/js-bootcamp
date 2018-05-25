'use strict'

// Fetch exisitng todos from localStorage
const getSavedTodos = () => {

    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }

}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex( (todo) => todo.id === id )

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {

    const todoEl = document.createElement('div')

    const checkEl = document.createElement('input')
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    checkEl.addEventListener('change', (e) => {
        todo.completed = e.target.checked
        saveTodos()
        renderTodos(todos, filters)
    })

    const textEl = document.createElement('span')
    textEl.textContent = todo.title

    const delButton = document.createElement('button')
    delButton.textContent = 'x'

    todoEl.appendChild(checkEl)
    todoEl.appendChild(textEl)
    todoEl.appendChild(delButton)

    delButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos()
        renderTodos(todos, filters)
    })

    return todoEl
}

// Generate DOM element list summary
const generateSummaryDOM = (incompleted) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleted.length} todos left`
    return summary
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {

    let filteredTodos = todos.filter((todo) => 
    todo.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    const incompleteTodos = filteredTodos.filter( (todo) => !todo.completed )

    if (filters.hideCompleted) {
        filteredTodos = incompleteTodos
    }

    document.querySelector('#todos').innerHTML = ''

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach( (todo) => {
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}