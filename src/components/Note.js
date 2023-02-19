import React, {useState} from "react";
import "./Note.css"
import formatDate from "../utils/utils";
import { nanoid } from "nanoid";

function Note(props) {

    const [isHidden, setIsHidden] = useState(true);
    
    // const hobbiesEls = props.hobbies.map(hobby => <li key={nanoid()}>{hobby}</li>)
    const giftEls = props.ideas.map(idea => (
        <div className="gift" key={nanoid()}>
            <h5>{idea.idea}</h5>
            <p>{idea.comments}</p>
            <div>{idea.url}</div>
        </div>
    ))

    const formattedBirthday = formatDate(props.birthday)
    
    return(
        <div className={`note-container`} id={props.elId}>
            <i class={`fa-solid fa-trash ${isHidden ? "hidden" : ""}`} onClick={props.deleteNote}></i>
            <div className="info" >
                
                <div className="header-el" onClick={() => setIsHidden(!isHidden)} >
                    <h3>{props.name}</h3>   
                    <p><strong>Birthday:</strong> {formattedBirthday}</p>
                </div>
                <div className={`hobbies ${isHidden ? "hidden" : ""}`}>
                <h4>Hobbies:</h4>
                <ul>
                    <li>{props.hobby1}</li>
                    <li>{props.hobby2}</li>
                    <li>{props.hobby3}</li>
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