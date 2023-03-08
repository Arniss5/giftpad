import React, {useEffect, useState, useContext} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";
import { Context } from "../Context";
import { nanoid } from "nanoid";


function GiftNotes() {
    const context = useContext(Context)

    const [addNoteFormData, setAddNoteFormData] = useState(
        {
            elId: nanoid(),
            name: "",
            hobby1: "",
            hobby2: "",
            hobby3: "",
            birthday: "",
            ideas: []
        }
    )
    
    // only for small screens
    const [isAddNoteShrunk, setIsAddNoteShrunk] = useState(true);
    

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(context.notes))
      }, [context.notes]);


    const notesElements =  context.notes.map(note => {
        return <Note 
            key={nanoid()}
            notes={context.notes}
            hobbies={[note.hobby1, note.hobby2, note.hobby3]}
            setNotes ={context.setNotes}
            toggleExpandNote={toggleExpandNote}
            deleteNote={deleteNote}
            {...note}
        />
    })


    function handleFormChange(event) {
        const {name, value} = event.target
        setAddNoteFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }


    function addNote(e) {
        e.preventDefault()
        context.setNotes(prevNotes => (
            [
                ...prevNotes,
                addNoteFormData
            ]
        ))
        setAddNoteFormData({
            elId: nanoid(),
            name: "",
            hobby1: "",
            hobby2: "",
            hobby3: "",
            birthday: "",
            ideas: []
        })
    }

    function deleteNote(e) {
        context.setNotes(prevNotes => {
            return prevNotes.filter(note => e.target.parentElement.id !== note.elId)
        })
    }

    function toggleExpandNote(e) {
        context.setNotes(prevNotes => {
            return prevNotes.map(note => {
                const targetNote = e.target.parentElement.parentElement
                if(targetNote.id === note.elId) {
                    return {
                        ...note,
                        isNoteExpanded:!note.isNoteExpanded
                    }
                } else {
                    return note
                }
            })
        })
    }
    

    return(
        <>
        <h2>Gift notes</h2>
        <div className="gift-notes-container">
            
            <div className="add-note">
                <h3 onClick={() => setIsAddNoteShrunk(!isAddNoteShrunk)}>
                    ADD NEW NOTE
                </h3>
                <form className={isAddNoteShrunk ? "hidden" : ""} onSubmit={addNote}>
                    <label htmlFor="name-input">Name:</label>
                    <input
                        id="name-input"
                        type="text"
                        placeholder="Giftee's name"
                        onChange={handleFormChange}
                        name="name"
                        value={addNoteFormData.name}
                        required
                    />
                    <label htmlFor="dob-input">Date of birth:</label>
                    <input
                        id="dob-input"
                        type="date"
                        placeholder="Date of birth"
                        onChange={handleFormChange}
                        name="birthday"
                        value={addNoteFormData.birthday}
                    />
                    <fieldset>
                        <legend>Hobbies:</legend>
                        <input
                            type="text"
                            placeholder="Hobby 1"
                            onChange={handleFormChange}
                            name="hobby1"
                            value={addNoteFormData.hobby1}
                        />
                        <input
                            type="text"
                            placeholder="Hobby 2"
                            onChange={handleFormChange}
                            name="hobby2"
                            value={addNoteFormData.hobby2}
                        />
                        <input
                            type="text"
                            placeholder="Hobby 3"
                            onChange={handleFormChange}
                            name="hobby3"
                            value={addNoteFormData.hobby3}
                        />
                    </fieldset>
                    <button type="submit" className="add-note-btn">ADD</button>
                </form>
            </div>
            <div className="notes">
                {/* RENDER NOTES HERE */}
                {context.notes.length === 0 ? 
                    <img 
                        src={require("../images/notes.jpg")} 
                        alt="a cartoon person writing in a notepad" 
                        className="panel panel-img gift-notes-img" 
                    /> :
                    notesElements
                }
            </div>
        </div>
        </>
        
    )
}

export default GiftNotes