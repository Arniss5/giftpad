import React, {useState} from "react";
import "./Note.css"
import { nanoid } from "nanoid";

function Note(props) {

    const [isHidden, setIsHidden] = useState(true);
    
    const hobbiesEls = props.hobbies.map(hobby => <li key={nanoid()}>{hobby}</li>)
    const giftEls = props.ideas.map(idea => (
        <div className="gift" key={nanoid()}>
            <h5>{idea.idea}</h5>
            <p>{idea.comments}</p>
            <div>{idea.url}</div>
        </div>
    ))

    // const birthday = `$`
    
    return(
        <div className={`note-container`}>
            <div className="info" >
                <div className="header-el" onClick={() => setIsHidden(!isHidden)} id={props.elId}>
                    <h3>{props.name}</h3>   
                    <p>Birthday: {props.birthday}</p>
                </div>
                <div className={`hobbies ${isHidden ? "hidden" : ""}`}>
                <h4>Hobbies:</h4>
                <ul>
                    {hobbiesEls}
                </ul>
            </div>
            </div>
            
            <div className={`gifts-container ${isHidden ? "hidden" : ""}`}>
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