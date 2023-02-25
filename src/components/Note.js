import React, {useState} from "react";
import "./Note.css"
import formatDate from "../utils/utils";
import { nanoid } from "nanoid";

function Note(props) {

    // STATES
    // 'add gift idea' display setting
    const [isExtended, setIsExtended] = useState(false)
    
    const [gifts, setGifts] = useState(props.ideas)


    // FORMAT PROPS BEFORE RENDERING
    const hobbiesEls = props.hobbies.map(hobby => hobby ? <li key={nanoid()}>{hobby}</li> : "")
    const formattedBirthday = props.birthday ? formatDate(props.birthday) : "Unknown"
    const giftEls = gifts.map(idea => (
        <div className="gift" key={nanoid()} id={idea.elId} >
            <i class="fa-solid fa-xmark" onClick={removeGiftIdea} data-gift={props.elId}></i>
            <h5>{idea.gift}</h5>
            <p>{idea.comments}</p>
            {idea.url && <a href={idea.url} target="_blank"><i class="fa-solid fa-link"></i> See here</a>}
        </div>
    ))

    const [formData, setFormData] = useState(
        {
            elId: nanoid(),
            gift: "",
            comments: "",
            url: "",
            image: ""
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
        // set entire note
        props.setNotes(prevState => {
            return prevState.map(giftNote => {
                // find the note you need

                if(e.target.dataset.gift  == giftNote.elId) {
                    // console.log(giftNote.ideas)
                    // const gifts = giftNote.ideas.filter(idea => idea.elId !== e.target.parentElement.id).length = 0 ? [] : giftNote.ideas.filter(idea => idea.elId !== e.target.parentElement.id).length = 0
                    // console.log(giftNote.ideas.filter(idea => idea.elId !== e.target.parentElement.id))
                    return {
                        ...giftNote,
                        ideas: giftNote.ideas.filter(idea => idea.elId !== e.target.parentElement.id) 
                        // ideas: []
                    }
                } else {
                    return giftNote
                }
            })
        })
        // console.log(props.notes)
    }

    
    function toggleExtend() {
        setIsExtended(prevState => !prevState)
    }


    return(
        <div className={`note-container`} id={props.elId}>
            <i class={`fa-solid fa-trash ${props.isNoteHidden ? "hidden" : ""}`} onClick={props.deleteNote}></i>
            <div className="info" onClick={props.toggleHiddenNote}>
                
                <div className="header-el"  >
                    <h3>{props.name}</h3>   
                    <p> <i class="fa-solid fa-cake-candles"></i>   {formattedBirthday}</p>
                </div>
                <div className={`hobbies ${props.isNoteHidden ? "hidden" : ""}`}>
                <h4> <i class="fa-solid fa-palette"></i> Hobbies:</h4>
                <ul>
                    {hobbiesEls}
                </ul>
                </div>
            </div>
            
            <div className={`gifts-container ${props.isNoteHidden ? "hidden" : ""}`}>
                <h4> <i class="fa-solid fa-gift"></i> Gift ideas:</h4>
                <div className="gifts" >
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
                                // placeholder="Comments"
                                onChange={handleChange}
                                name="comments"
                                value={formData.comments}
                            />

                            <label htmlFor="url-input">Link:</label>
                            <input
                                id="url-input"
                                type="url"
                                // placeholder="Link"
                                onChange={handleChange}
                                name="url"
                            />

                            {/* <label htmlFor="image-input" className="customUploadBtn">Image: <br></br> <i class="fas fa-upload"></i> Choose file</label>
                            <input
                                id="image-input"
                                type="file"
                                // placeholder="Link"
                                onChange={handleFileChange}
                                name="image"
                            /> */}
                       </fieldset>
                        <button>Add gift</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Note