const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()

const note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/')
}

noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('input', function(e) {
    note.title = e.target.value
    saveNotes(notes)
})

noteBody.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeButton.addEventListener('click', function () {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/')
})




// 1. Setup input event for title
// 2. Update note object and save notes list
// 3. Repeat steps 1-2 for body
// 4. Setup a remove button that removes notes and send users back to home page