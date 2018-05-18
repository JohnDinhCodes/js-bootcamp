const todos = ['Study JavaScript', 'Study React', 'Update Portfolio', 'Learn PHP', 'Create CMS Website']

todos.splice(2, 1)
todos.push('I am at the end')
todos.shift()

console.log(`You have ${todos.length} todos`)

todos.forEach(function (todo, index) {
    console.log(`${index + 1}: ${todo}`)
})