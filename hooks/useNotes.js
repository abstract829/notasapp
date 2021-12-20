import { createNote, deleteNote } from '../services/notas'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'

export const useNotes = () => {
    const {notes,fetchData} = useContext(NotesContext)
    
    const createNoteAndUpdate = async() => {
        const resp = await createNote()
        if(resp.ok){
            fetchData()
        }
    }
    const deleteNoteAndUpdate = async(id) => {
        const resp = await deleteNote(id)
        if(resp.ok){
            fetchData()
        }
    }
    return{
        notes, createNoteAndUpdate, deleteNoteAndUpdate
    }
}