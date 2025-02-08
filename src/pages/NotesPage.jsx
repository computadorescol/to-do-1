import CreateNote from "../components/CreateNote";
import HeaderComponent from "../components/HeaderComponent"
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/note.context"
import { useContext, useEffect } from "react";

function NotesPage(){
  const {notes, getNotes} = useContext(NoteContext);
   useEffect ( ()=>{
      getNotes()
   },[])

  const noteCards = notes.map((note)=>{
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    )
  })
  return (
    <>
    <HeaderComponent></HeaderComponent>
          <h2>Notes</h2>
          <li>
      <CreateNote/>
      </li>
    <ul className ="note-list">{noteCards}
      
    </ul>
    </>
  );
}
export default NotesPage;