import React, {useEffect, useState} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";

import { nanoid } from "nanoid";


function GiftNotes() {
    const [isHidden, setIsHidden] = useState(true);
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

    function handleChange(event) {
        const {name, value} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }



    const [notes, setNotes] = useState(localStorage.getItem("notes") === null? `[
        {
            elId: nanoid(),
            name: "Kasia",
            hobby1: "coding",
            hobby2: "films",
            hobby3: "boardgames",
            birthday: "1991-03-16",
            ideas: []
        },
        {
            elId: nanoid(),
            name: "Ross",
            hobby1: "warhammer",
            hobby2: "magic",
            hobby3: "video games",
            birthday: "1991-02-01",
            ideas: []
        }
    ]` : JSON.parse(localStorage.getItem("notes")))

    console.log(notes)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
      }, [notes]);


    console.log(JSON.parse(localStorage.getItem('notes')))

    let notesEl =  notes.map(note => {
        return <Note 
            key={nanoid()}
            elId={note.elId}
            name={note.name}
            hobbies={[note.hobby1, note.hobby2, note.hobby3]}
            hobby2={note.hobby2}
            hobby3={note.hobby3}
            birthday={note.birthday}
            ideas={note.ideas}
            deleteNote={deleteNote}
        />
    })

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

    

    // useEffect(() => {
    //     notesEl = notes.map(note => {
    //         return <Note 
    //             name={note.name}
    //             hobbies={note.hobbies}
    //             birthday={note.birthday}
    //             ideas={note.ideas}
    //             active={note.active}
    //             display="display"
    //             extended=""
    //             handleClick={handleClick}
    //         />
    //     })
    // }, [notes])


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
                    <button type="submit" className="add-btn" >ADD</button>
                </form>
            </div>
            <div className="notes">
                
                {notesEl}
            </div>
        </div>
        </>
        
    )
}

export default GiftNotes