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

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`

document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.title
    document.querySelector('body').appendChild(p)
})

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)