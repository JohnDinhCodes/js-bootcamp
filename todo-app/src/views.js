import { getTodos, toggleTodo, removeTodo } from './todos'
import { getFilters } from './filters'

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filters = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

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
        toggleTodo(todo.id)
        renderTodos()
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
        renderTodos()
    })

    return todoEl
}

// Generate DOM element list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }