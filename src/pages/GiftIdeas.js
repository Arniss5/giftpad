import React, {useState} from "react";
import "./GiftIdeas.css"
import giftData from "../utils/giftData";


function GiftIdeas() {

    const [sideImg, setSideImg] = useState("confused.jpg")
    const [displayedIdea, setDisplayedIdea] = useState("")
    const [formData, setFormData] = useState(
        {
            giftType: "",
            isUnder20: false,
        }
    )

    function handleFormChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function getInspired(e) {
        e.preventDefault()
        const idea = getGiftIdea()
        setDisplayedIdea(idea)

        if(idea.type === "romantic") {
            setSideImg("romantic.jpg")
        } else if(idea.type === "silly") {
            setSideImg("silly.jpg")
        } else if(idea.type === "geeky") {
            setSideImg("geeky.jpg")
        } else if(idea.type === "practical") {
            setSideImg("practical.jpg")
        }

    }

    function getGiftIdea() {
        const filteredGiftsAr = giftData.filter(gift => 
            (gift.type === formData.giftType && gift.isUnder20 === formData.isUnder20))
        const randomIndex = Math.floor(Math.random() * filteredGiftsAr.length)

        return filteredGiftsAr[randomIndex]
    }

    function getGiftEl() {
        const textLength = displayedIdea.name ? displayedIdea.name.length : 0
        let ideaClass = ""
      
        if (textLength > 21) {
            ideaClass = "long"
        }
        
        return (
            <div className={`idea-container ${ideaClass}`}>
                <div>How about...</div>
                <div className="gift-idea-name">{displayedIdea.name}</div>
            </div>
        )
    }

    const ideaEl = getGiftEl()
    
    return(
        <div className="ideas-container">
            <h2>Gift ideas</h2>
            <div className="columns">
            <div className="column">
                <form className="column column-1" onSubmit={getInspired}>
                
                <div className="idea-text">I need an idea for a ...</div>
                <div class="wrapper">
                    <input 
                        type="radio" 
                        name="giftType" 
                        id="option-1"
                        value="romantic"
                        checked={formData.giftType === "romantic"}
                        onChange={handleFormChange} 
                    />
                    <input 
                        type="radio" 
                        name="giftType" 
                        id="option-2"
                        value="silly"
                        checked={formData.giftType === "silly"}
                        onChange={handleFormChange} 
                    />
                    <input 
                        type="radio" 
                        name="giftType" 
                        id="option-3"
                        value="geeky"
                        checked={formData.giftType === "geeky"}
                        onChange={handleFormChange} 
                    />
                    <input 
                        type="radio" 
                        name="giftType" 
                        id="option-4"
                        value="practical"
                        checked={formData.giftType === "practical"}
                        onChange={handleFormChange} 
                    />
                    <label for="option-1" className="option option-1" >
                        <div className="dot"></div>
                        <span>romantic</span>
                    </label>
                    <label for="option-2" className="option option-2">
                        <div className="dot"></div>
                        <span>silly</span>
                    </label>
                    <label for="option-3" className="option option-3">
                        <div className="dot"></div>
                        <span>geeky</span>
                    </label>
                    <label for="option-4" className="option option-4">
                        <div className="dot"></div>
                        <span>practical</span>
                    </label>
                </div>
                <div className="flex-container">
                    <span className="idea-text">... gift</span>
                    <input 
                        className="tickbox-input" 
                        type="checkbox" 
                        id="cb01"
                        name="isUnder20"
                        checked={formData.isUnder20}
                        onChange={handleFormChange}
                    />
                    <label for="cb01" className="idea-text checkbox-label">under £20</label>
                </div>
                <button className="submit-btn" >Get inspired</button>

                </form>
                {displayedIdea && ideaEl}
            </div>
                <div className="column column-2">
                    <img 
                        src={require(`../images/${sideImg}`)} 
                        alt="a person looking confused" 
                    />
                </div>
                
            </div>

        </div>
    )
}

export default GiftIdeas