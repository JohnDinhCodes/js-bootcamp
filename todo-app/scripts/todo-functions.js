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

    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkEl = document.createElement('input')
    const textEl = document.createElement('span')
    const delButton = document.createElement('button')

    // Setup todo checkbox
    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    containerEl.appendChild(checkEl)
    checkEl.addEventListener('change', (e) => {
        todo.completed = e.target.checked
        saveTodos()
        renderTodos(todos, filters)
    })

    // Setup todo text
    textEl.textContent = todo.title
    containerEl.appendChild(textEl)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    delButton.textContent = 'remove'
    delButton.classList.add('button', 'button--text')
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
    const plural = incompleted.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleted.length} todo${plural} left`
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

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            const todoEl = generateTodoDOM(todo)
            document.querySelector('#todos').appendChild(todoEl)
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        document.querySelector('#todos').appendChild(messageEl)
    }
}