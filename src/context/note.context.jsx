import {createContext, useState} from "react";

const NoteContext = createContext();
const API_URL="https://caf0548c176f71252b15.free.beeceptor.com/api/libros/"

function NoteProviderWrapper(props){
    

      const [notes, setNotes] = useState([]);
      const getNotes = async () => {
        try {
            const response = await fetch (API_URL);
            const data = await response.json(); 
            setNotes(data.reverse())
        }catch (e){
            console.log(e)
        }
      }
      
      
      /*agregamos a la api */
      const  addNote = async (newNote)=>{
       try{
        await fetch(API_URL,{
            method: "POST" ,
            body : JSON .stringify(newNote)
        })
        setNotes([newNote, ...notes])

       }catch(e){
        console.log(e);
       }
      
            };



        const updateNote = (updatedNote)=>{
                const updatedNotes = notes.map((note)=>{
                    if (note.id !== updatedNote.id ) return note;
                    return updatedNote;
                } );
                setNotes(updatedNotes);
       }
   
    return(
        <NoteContext.Provider value={{notes,setNotes,getNotes,addNote,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    ) 
}
 export {NoteContext , NoteProviderWrapper}