import React, {useEffect, useState, useContext} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";
import { Context } from "../Context";
import { nanoid } from "nanoid";


function GiftNotes() {
    const context = useContext(Context)

    // Add note form
    const [formData, setFormData] = useState(
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
    
    // Add note element display settings
    const [isHidden, setIsHidden] = useState(true);
    

    // Get list of notes from Storage
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(context.notes))
      }, [context.notes]);

    let notesEl =  context.notes.map(note => {
        return <Note 
            key={nanoid()}
            elId={note.elId}
            name={note.name}
            notes={context.notes}
            hobbies={[note.hobby1, note.hobby2, note.hobby3]}
            birthday={note.birthday}
            ideas={note.ideas}
            deleteNote={deleteNote}
            setNotes ={context.setNotes}
            toggleHiddenNote={toggleHiddenNote}
            isNoteHidden={note.isNoteHidden}
        />
    })


// METHODS

    // Get info from user input in form
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // Handle notes
    function addNote(e) {
        e.preventDefault()
        context.setNotes(prevNotes => (
            [
                ...prevNotes,
                formData
            ]
        ))
        setFormData({
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

    // Shrink/extend 'Add new note' element on small screens
    function toggleHiddenNote(e) {
        context.setNotes(prevNotes => {
            return prevNotes.map(note => {
                if(e.target.parentElement.parentElement.id === note.elId) {
                    return {
                        ...note,
                        isNoteHidden:!note.isNoteHidden
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
                <h3 onClick={() => setIsHidden(!isHidden)}>ADD NEW NOTE</h3>
                <form className={isHidden ? "hidden" : ""} onSubmit={addNote}>
                    <label htmlFor="name-input">Name:</label>
                    <input
                        id="name-input"
                        type="text"
                        placeholder="Giftee's name"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        required
                    />
                    <label htmlFor="dob-input">Date of birth:</label>
                    <input
                        id="dob-input"
                        type="date"
                        placeholder="Date of birth"
                        onChange={handleChange}
                        name="birthday"
                        value={formData.birthday}
                    />
                    <fieldset>
                        <legend>Hobbies:</legend>
                        <input
                            type="text"
                            placeholder="Hobby 1"
                            onChange={handleChange}
                            name="hobby1"
                            value={formData.hobby1}
                        />
                        <input
                            type="text"
                            placeholder="Hobby 2"
                            onChange={handleChange}
                            name="hobby2"
                            value={formData.hobby2}
                        />
                        <input
                            type="text"
                            placeholder="Hobby 3"
                            onChange={handleChange}
                            name="hobby3"
                            value={formData.hobby3}
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
                    notesEl
                }
            </div>
        </div>
        </>
        
    )
}

export default GiftNotes