import React, {useState} from "react";
import "./Note.css"

function Note(props) {
    
    const hobbiesEls = props.hobbies.map(hobby => <li>{hobby}</li>)
    const giftEls = props.ideas.map(idea => (
        <div className="gift">
            <h5>{idea.idea}</h5>
            <p>{idea.comments}</p>
            <div>{idea.url}</div>
        </div>
    ))

    return(
        <div className={`note-container ${props.expanded}`}>
            <div className="info" >
                <div className="header-el" onClick={props.handleClick}>
                    <h3>{props.name}</h3>   
                    <p>Birthday: {props.birthday[0]}/{props.birthday[1]}/{props.birthday[2]}</p>
                </div>
                <div className={`hobbies ${props.display}`}>
                <h4>Hobbies:</h4>
                <ul>
                    {hobbiesEls}
                </ul>
            </div>
            </div>
            
            <div className={`gifts-container ${props.display}`}>
                <h4>Gift ideas:</h4>
                <div className="gifts">
                    {giftEls}
                    <button>Add gift</button>
                </div>
            </div>
        </div>
    )
}

export default Note