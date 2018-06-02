import { inializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const lastUpdated = document.querySelector('#last-updated')
const noteId = location.hash.substring(1)

inializeEditPage(noteId)

noteTitle.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
})

noteBody.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
})

removeButton.addEventListener('click', () => {
    removeNote(noteId)
    location.assign('/')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        inializeEditPage(noteId)
    }
})