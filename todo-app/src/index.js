

import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#create-todo').addEventListener('submit', (e) => {
    e.preventDefault()

    const newTodo = (event.target.newTodo.value).trim()

    if (newTodo.length > 0) {
        createTodo(newTodo)
        renderTodos()
        e.target.newTodo.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
