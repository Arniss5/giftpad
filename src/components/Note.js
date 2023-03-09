import React, {useState, useContext} from "react";
import "./Note.css"
import formatDate from "../utils/utils";
import { nanoid } from "nanoid";
import { Context } from "../Context"

function Note(props) {

    const context = useContext(Context)

    const [isAddIdeaFormVisible, setIsAddIdeaFormVisible] = useState(false)

    const [addIdeaFormData, setAddIdeaFormData] = useState(
        {
            elId: nanoid(),
            gift: "",
            comments: "",
            url: "",
            image: ""
        }
    )

    function handleFormChange(event) {
        const {name, value} = event.target
        setAddIdeaFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: value
                }
            
        })
    }

    function addGiftIdea(e) {
        e.preventDefault()

        if (context.isSoundOn) {
            props.buttonSoundRef.current.play()
        }
        
        props.setNotes(prevState => {
            return prevState.map(giftNote => {
                if(e.target.dataset.note == giftNote.elId) {
                    return {
                        ...giftNote,
                        ideas: [
                            ...giftNote.ideas,
                            addIdeaFormData
                        ]
                    }
                } else {
                    return giftNote
                }
            })
            
        })
        
        setAddIdeaFormData({
            elId: nanoid(),
            gift: "",
            comments: "",
            url: "",
            image: ""
        })
    }

    function removeGiftIdea(e) {
        if (context.isSoundOn) {
            props.deleteSoundRef.current.play()
        }
        
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

    function toggleShowIdeaForm() {
        setIsAddIdeaFormVisible(prevState => !prevState)
    }


    const hobbiesEls = props.hobbies.map(hobby => hobby ? <li key={nanoid()}>{hobby}</li> : "")

    const formattedBirthday = props.birthday ? formatDate(props.birthday) : "Unknown"

    const giftEls = props.ideas.map(idea => (
        <div 
            className="gift" 
            key={nanoid()} 
            id={idea.elId} 
        >
            <i 
                class="fa-solid fa-xmark" 
                onClick={removeGiftIdea} 
                data-gift={props.elId}
            ></i>
            <h5>{idea.gift}</h5>
            <p>{idea.comments}</p>
            {idea.url && <a href={idea.url} target="_blank"><i class="fa-solid fa-link"></i> See here</a>}
        </div>
        )
    )

    
    return (
        <div className={`note-container`} id={props.elId}>
            <i 
                class={`fa-solid fa-trash ${props.isNoteExpanded ? "" : "hidden"}`} 
                onClick={props.deleteNote}
            ></i>
            <div className="info" >
                {/* HEADER */}
                <div className="header-el"  onClick={props.toggleExpandNote}>
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
                    
                    <i 
                        class={`fa-solid ${isAddIdeaFormVisible?
                         "fa-circle-minus" : 
                         "fa-circle-plus"}`
                        } 
                        onClick={toggleShowIdeaForm}
                    ></i>

                    <form 
                        data-note={props.elId} 
                        onSubmit={addGiftIdea} 
                        className={isAddIdeaFormVisible ? "extended" : ""}
                    >
                        <fieldset>
                            <legend>New gift idea:</legend>
                            <label htmlFor="gift-input">Gift:</label>
                            <input
                                id="gift-input"
                                type="text"
                                onChange={handleFormChange}
                                name="gift"
                                value={addIdeaFormData.gift}
                                required
                            />
                        
                            <label htmlFor="comments-input">Comments:</label>
                            <textarea
                                rows="4"
                                id="comments-input"
                                type="text"
                                onChange={handleFormChange}
                                name="comments"
                                value={addIdeaFormData.comments}
                            />

                            <label htmlFor="url-input">Link:</label>
                            <input
                                id="url-input"
                                type="url"
                                placeholder="https://"
                                onChange={handleFormChange}
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