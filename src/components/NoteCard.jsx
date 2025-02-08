import { NoteContext } from "../context/note.context";
import {useContext} from "react";
import "./CreateNote.css"  

const NoteCard = ({note}) => {
     const {updateNote}  = useContext(NoteContext);

  const handleInput = (e) => {
      const updatedNote = {...note, title:e.target.value}
   updateNote(updatedNote)
    };
    const handleCheck = (e) => {
      const updatedNote = {...note, marked: !note.marked}
   updateNote(updatedNote)
    };
  return (
    <article className="note-card">
        <input type="text" className="card-title" value={note.title}
         onChange={handleInput} />
        <input type="checkbox"
         checked={note.marked} 
         onChange={handleCheck} />
    </article>
  )
}
export default NoteCard