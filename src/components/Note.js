import React, {useState} from "react";
import "./Note.css"
import formatDate from "../utils/utils";
import { nanoid } from "nanoid";

function Note(props) {

    // EXPAND CARD?
    const [isHidden, setIsHidden] = useState(true);
    const [isExtended, setIsExtended] = useState(false)
    
    const [gifts, setGifts] = useState(props.ideas)

    // [{
    //     elId: nanoid(),
    //     gift: "warhammer",
    //     comments: "whatever",
    //     url: "https://www.google.com",
    // }]

    // FORMAT PROPS BEFORE RENDERING
    const hobbiesEls = props.hobbies.map(hobby => hobby ? <li key={nanoid()}>{hobby}</li> : "")
    const formattedBirthday = props.birthday ? formatDate(props.birthday) : "Unknown"
    const giftEls = gifts.map(idea => (
        <div className="gift" key={nanoid()}>
            
            <h5>{idea.gift}</h5>
            <p>{idea.comments}</p>
            {idea.url && <a href={idea.url} target="_blank"><i class="fa-solid fa-link"></i> See here</a>}
            {/* <div class="imagearea">{idea.image}</div> */}
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
        //    setIsHidden(prevState => !prevState)
    }

    console.log(isHidden)
    // const [imageSrc, setImageSrc] = useState(localStorage.getItem("theImage"));
  
//   function handleFileChange(event) {
//     const fileInput = event.target;
//     const file = fileInput.files[0];
//     const reader = new FileReader();

//     reader.onload = function(e) {
//       const img = new Image();
//       img.src = reader.result;
//       localStorage.setItem("theImage", reader.result); //stores the image to localStorage
//       setImageSrc(reader.result);
//     }

//     reader.readAsDataURL(file);

    // const {name} = event.target
    // setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [name]: imageSrc
    //         }
    //     })
    // }
    
    function toggleExtend() {
        setIsExtended(prevState => !prevState)
    }
    function toggleHidden() {
        setIsHidden(prevState => !prevState)
    }

    return(
        <div className={`note-container`} id={props.elId}>
            <i class={`fa-solid fa-trash ${isHidden ? "hidden" : ""}`} onClick={props.deleteNote}></i>
            <div className="info" >
                
                <div className="header-el" onClick={toggleHidden} >
                    <h3>{props.name}</h3>   
                    <p> <i class="fa-solid fa-cake-candles"></i>   {formattedBirthday}</p>
                </div>
                <div className={`hobbies ${isHidden ? "hidden" : ""}`}>
                <h4> <i class="fa-solid fa-palette"></i> Hobbies:</h4>
                <ul>
                    {hobbiesEls}
                </ul>
                </div>
            </div>
            
            <div className={`gifts-container ${isHidden ? "hidden" : ""}`}>
                <h4> <i class="fa-solid fa-gift"></i> Gift ideas:</h4>
                <div className="gifts">
                    {giftEls}
                    
                    <i class={`fa-solid ${isExtended? "fa-circle-minus" : "fa-circle-plus"}`} onClick={toggleExtend}></i>

                    <form data-note={props.elId} onSubmit={addGiftIdea} className={isExtended ? "extended" : ""}>
                        <fieldset>
                            <legend>New gift idea:</legend>
                            <label htmlFor="name-input">Gift:</label>
                            <input
                                id="gift-input"
                                type="text"
                                // placeholder="Gift idea"
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