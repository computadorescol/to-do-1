import { NoteContext } from "../context/note.context"
import{useContext,useState} from "react";


function CreateNote () {
  const {addNote} = useContext(NoteContext);
  const [noteTitle, setNoteTitle] = useState("");  

 const handleInput = (e) =>{
   setNoteTitle(e.target.value)
 }
  const  handleSubmit = (e)=>{
    e.preventDefault();
    if(!noteTitle) return;
    const  newNote = {
        id:5,
        title:noteTitle,
        marked:false
    };
    addNote(newNote);
    setNoteTitle("");
  }

  return (
    <form className="note-form" onSubmit={handleSubmit} >
     <input 
        type="text"
        className="note-title"
        placeholder="escribe aqui"
        value={noteTitle}
        onChange={handleInput} />
        <button className="create-btn">
        +
        </button>
    </form>
  )
}
export default CreateNote