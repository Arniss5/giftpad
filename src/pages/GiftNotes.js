import React, {useEffect, useState} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";
import { nanoid } from "nanoid";


function GiftNotes() {

   
    const [formData, setFormData] = useState(
        {
            elId: nanoid(),
            name: "",
            hobby1: "",
            hobby2: "",
            hobby3: "",
            birthday: "",
        }
    )


    function handleChange(event) {
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const [notes, setNotes] = useState([
        {   
            elId: nanoid(),
            name: "Kasia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", comments: "blah bluh bloh", url: "www.google.com"}],
        },
        {
            elId: nanoid(),
            name: "Ross",
            hobbies: ["warhammer", "magic", "video games"],
            birthday: [2, 1, 1991],
            ideas: [{idea: "Shoes", comments: "such and such shoes", url: "www.google.com"}, {idea:"headphones", comments: "blah", url: ""}],
        },
        {
            elId: nanoid(),
            name: "Basia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", comments: "blah", url: "www.google.com"}],
        }
    ])

    let notesEl =  notes.map(note => {
        return <Note 
            key={nanoid()}
            elId={note.elId}
            name={note.name}
            hobbies={note.hobbies}
            birthday={note.birthday}
            ideas={note.ideas}
        />
    })

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
        <h2>Gift notes:</h2>
        <div className="gift-notes-container">
            
            <div className="add-note">
                <h3>ADD NEW NOTE</h3>
                <form>
                    <label htmlFor="name-input">Name:</label>
                    <input
                        id="name-input"
                        type="text"
                        placeholder="Giftee's name"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
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
                            value={formData.birthday}
                        />
                        <input
                            type="text"
                            placeholder="Hobby 2"
                            onChange={handleChange}
                            name="hobby2"
                            value={formData.birthday}
                        />
                        <input
                            type="text"
                            placeholder="Hobby 3"
                            onChange={handleChange}
                            name="hobby3"
                            value={formData.birthday}
                        />
                    </fieldset>
                    <button className="add-btn">ADD</button>
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