import React, {useEffect, useState} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";
import { nanoid } from "nanoid";


function GiftNotes() {

    // STATES & EFFECTS
    const [notes, setNotes] = useState(localStorage.getItem("notes") == null? [
        {
            elId: nanoid(),
            name: "Kasia",
            hobby1: "coding",
            hobby2: "films",
            hobby3: "boardgames",
            birthday: "1991-03-16",
            ideas: [
                {
                    elId: nanoid(),
                    gift: "shoes",
                    comments: "Supper pretty shoes that I saw in CCC last time I was in Poland. They cost 139PLN",
                    url: "https://www.google.com",
                },
                {
                    elId: nanoid(),
                    gift: "Hogwards Legacy",
                    comments: "That PC game that's just come out. Would be a good bday idea. Can be bought on Amazon (see link) or in GAME",
                    url: "https://www.amazon.com",
                }
            ],
            isHidden: true
        },
        {
            elId: nanoid(),
            name: "Ross",
            hobby1: "warhammer",
            hobby2: "magic",
            hobby3: "video games",
            birthday: "1991-01-02",
            ideas: [{
                    elId: nanoid(),
                    gift: "warhammer",
                    comments: "whatever",
                    url: "https://www.google.com",
                }],
            isHidden: true
        }
    ] : JSON.parse(localStorage.getItem("notes")))


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
        localStorage.setItem('notes', JSON.stringify(notes))
      }, [notes]);

    let notesEl =  notes.map(note => {
        return <Note 
            key={nanoid()}
            elId={note.elId}
            name={note.name}
            notes={notes}
            hobbies={[note.hobby1, note.hobby2, note.hobby3]}
            birthday={note.birthday}
            ideas={note.ideas}
            deleteNote={deleteNote}
            setNotes ={setNotes}
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
        setNotes(prevNotes => (
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
        setNotes(prevNotes => {
            return prevNotes.filter(note => e.target.parentElement.id !== note.elId)
        })
    }

    // Shrink/extend 'Add new note' element on small screens
    function toggleHiddenNote(e) {
        setNotes(prevNotes => {
            return prevNotes.map(note => {
                if(e.target.parentElement.parentElement.id == note.elId) {
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
                {notesEl}
            </div>
        </div>
        </>
        
    )
}

export default GiftNotes