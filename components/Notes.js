import { useNotes } from "../hooks/useNotes"
import Card from "./Card"
const Notes = () => {
    const { notes, createNoteAndUpdate } = useNotes()
    return (
        <>
            <h1 className="mt-8 text-5xl font-bold text-center text-sky-900 font-lobster">Notes app</h1>
            <h3 className="mt-4 text-center text-sky-900 font-lobster">Double click title or body for editing, update is automatic.</h3>
            <div className="flex justify-center mt-12">
                <button 
                    onClick={() => createNoteAndUpdate()}
                    className="flex flex-row gap-2 px-4 py-2 text-white rounded-full bg-sky-600">
                    New note <img 
                    className="w-6 h-6 bg-white rounded-full"
                    src='icons/add.svg' />
                </button>
            </div>
            <div className="grid grid-cols-12 gap-8 mx-24 my-12 sm:mx-12">
                {
                    notes && notes.map(note => <Card key={note.id} note={note}/>)
                }
            </div>
        </>
    )
}

export default Notes
