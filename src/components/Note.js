import React, {useState} from "react";
import "./Note.css"
import formatDate from "../utils/utils";
import { nanoid } from "nanoid";

function Note(props) {

    // STATES
    // 'add gift idea' display setting
    const [isExtended, setIsExtended] = useState(false)

    // data from "add idea" form
    const [formData, setFormData] = useState(
        {
            elId: nanoid(),
            gift: "",
            comments: "",
            url: "",
            image: ""
        }
    )

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

    // Handle ideas
    function addGiftIdea(e) {
        e.preventDefault()
            props.setNotes(prevState => {
                return prevState.map(giftNote => {
                    if(e.target.dataset.note == giftNote.elId) {
                        return {
                            ...giftNote,
                            ideas: [
                                ...giftNote.ideas,
                                formData
                            ]
                        }
                    } else {
                        return giftNote
                    }
                })
                
            })
            setFormData({
                elId: nanoid(),
                gift: "",
                comments: "",
                url: "",
                image: ""
            })
    }

    function removeGiftIdea(e) {
        props.setNotes(prevState => {
            return prevState.map(giftNote => {
                if(e.target.dataset.gift == giftNote.elId) {
                    return {
                        ...giftNote,
                        ideas: giftNote.ideas.filter(idea => idea.elId !== e.target.parentElement.id) 
                    }
                } else {
                    return giftNote
                }
            })
        })
    }

    // hide/show "add idea" form
    function toggleExtend() {
        setIsExtended(prevState => !prevState)
    }


    // FORMAT PROPS BEFORE RENDERING
    const hobbiesEls = props.hobbies.map(hobby => hobby ? <li key={nanoid()}>{hobby}</li> : "")

    const formattedBirthday = props.birthday ? formatDate(props.birthday) : "Unknown"

    const giftEls = props.ideas.map(idea => (
        <div className="gift" key={nanoid()} id={idea.elId} >
            <i class="fa-solid fa-xmark" onClick={removeGiftIdea} data-gift={props.elId}></i>
            <h5>{idea.gift}</h5>
            <p>{idea.comments}</p>
            {idea.url && <a href={idea.url} target="_blank"><i class="fa-solid fa-link"></i> See here</a>}
        </div>
    ))

    
    return(
        <div className={`note-container`} id={props.elId}>
            <i class={`fa-solid fa-trash ${props.isNoteExpanded ? "" : "hidden"}`} onClick={props.deleteNote}></i>
            <div className="info" onClick={props.toggleExpandNote}>
                {/* HEADER */}
                <div className="header-el"  >
                    <h3>{props.name}</h3>   
                    <p> <i class="fa-solid fa-cake-candles"></i>   {formattedBirthday}</p>
                </div>
                {/* HOBBIES */}
                <div className={`hobbies ${props.isNoteExpanded ? "" : "hidden"}`}>
                <h4> <i class="fa-solid fa-palette"></i> Hobbies:</h4>
                <ul>
                    {hobbiesEls}
                </ul>
                </div>
            </div>
            {/* GIFTS */}
            <div className={`gifts-container ${props.isNoteExpanded ? "" : "hidden"}`}>
                <h4> <i class="fa-solid fa-gift"></i> Gift ideas:</h4>
                <div className="gifts" >
                    {/* render gift ideas here */}
                    {giftEls}
                    
                    <i class={`fa-solid ${isExtended? "fa-circle-minus" : "fa-circle-plus"}`} onClick={toggleExtend}></i>

                    <form data-note={props.elId} onSubmit={addGiftIdea} className={isExtended ? "extended" : ""}>
                        <fieldset>
                            <legend>New gift idea:</legend>
                            <label htmlFor="name-input">Gift:</label>
                            <input
                                id="gift-input"
                                type="text"
                                onChange={handleChange}
                                name="gift"
                                value={formData.gift}
                                required
                            />
                        
                            <label htmlFor="comments-input">Comments:</label>
                            <textarea
                                rows="4"
                                id="comments-input"
                                type="text"
                                onChange={handleChange}
                                name="comments"
                                value={formData.comments}
                            />

                            <label htmlFor="url-input">Link:</label>
                            <input
                                id="url-input"
                                type="url"
                                onChange={handleChange}
                                name="url"
                            />
                       </fieldset>
                        <button>Add gift</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Note