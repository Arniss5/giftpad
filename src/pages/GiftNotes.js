import React, {useEffect, useState} from "react";
import "./GiftNotes.css"
import Note from "../components/Note";


function GiftNotes() {

   
    const [notes, setNotes] = useState([
        {
            name: "Kasia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", comments: "blah bluh bloh", url: "www.google.com"}],
            active: false
        },
        {
            name: "Ross",
            hobbies: ["warhammer", "magic", "video games"],
            birthday: [2, 1, 1991],
            ideas: [{idea: "Shoes", comments: "such and such shoes", url: "www.google.com"}, {idea:"headphones", comments: "blah", url: ""}],
            active: false
        },
        {
            name: "Basia",
            hobbies: ["coding", "films", "boardgames"],
            birthday: [16, 3, 1991],
            ideas: [{idea: "Hogwarts game", comments: "blah", url: "www.google.com"}],
            active: false
        }
    ])

    let notesEl =  notes.map(note => {
        return <Note 
            name={note.name}
            hobbies={note.hobbies}
            birthday={note.birthday}
            ideas={note.ideas}
            active={note.active}
            display="display"
            extended="extended"
            handleClick={handleClick}
        />})

    // useEffect(() => {
    //     notesEl = notes.map(note => {
    //         return <Note 
    //             name={note.name}
    //             hobbies={note.hobbies}
    //             birthday={note.birthday}
    //             ideas={note.ideas}
    //             active={note.active}
    //             display="display"
    //             extended="extended"
    //             handleClick={handleClick}
    //         />
    //         console.log(notesEl)
    //     })
    // }, [notes])
    console.log(notesEl)

    function handleClick(e) {
        if(e.target.className.includes("header-el")) {
            
        }
    }

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