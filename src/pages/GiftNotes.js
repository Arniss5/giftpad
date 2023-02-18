import React, {useEffect, useState} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";
import { nanoid } from "nanoid";


function GiftNotes() {

   
    const [notes, setNotes] = useState([
        {   
            elId: nanoid(),
            name: "Kasia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", comments: "blah bluh bloh", url: "www.google.com"}],
            active: false
        },
        {
            elId: nanoid(),
            name: "Ross",
            hobbies: ["warhammer", "magic", "video games"],
            birthday: [2, 1, 1991],
            ideas: [{idea: "Shoes", comments: "such and such shoes", url: "www.google.com"}, {idea:"headphones", comments: "blah", url: ""}],
            active: false
        },
        {
            elId: nanoid(),
            name: "Basia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", comments: "blah", url: "www.google.com"}],
            active: false
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
            active={note.active}
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


    // function handleClick(e) {
    //     // notes.map(note => {
    //     //     if (note.elId == e.target.id) {
    //     //         console.log("hey")
    //     //     }
    //     // })

    //     setNotes(prevNotes => {
    //         return prevNotes.map(note => {
    //             if (note.elId == e.target.id) {
    //                 return {...note, extended:"extended"}
    //             } else {

    //             }
    //         })
    //     })
    // }

    return(
        <div className="gift-notes-container">
            <div className="notes">
                {notesEl}
                {/* <Note display="hidden" />
                <Note expanded="expanded"/>
                <Note display="hidden" />
                <Note display="hidden"/>
                <Note display="hidden"/>
                <Note display="hidden"/> */}
            </div>
        </div>
    )
}

export default GiftNotes