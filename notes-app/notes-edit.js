const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const lastUpdated = document.querySelector('#last-updated')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/')
}

noteTitle.value = note.title
noteBody.value = note.body
lastUpdated.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)    
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()    
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)    
})

removeButton.addEventListener('click', function () {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        let note = notes.find(function (note) {
            return note.id === noteId
        })

        if (note === undefined) {
            location.assign('/')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        lastUpdated.textContent = generateLastEdited(note.updatedAt)        
    }
})