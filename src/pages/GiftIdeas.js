import React, {useEffect, useState} from "react";
import "./GiftIdeas.css"
import { nanoid } from "nanoid";


function GiftIdeas() {
    return(
        <div className="ideas-container">
            <h2>Gift ideas</h2>
            <div className="columns">
            <div className="column">
                <div className="idea-text">I need an idea for a...</div>
                <div class="wrapper">
                    <input type="radio" name="select" id="option-1" />
                    <input type="radio" name="select" id="option-2" />
                    <input type="radio" name="select" id="option-3" />
                    <input type="radio" name="select" id="option-4" />
                    <label for="option-1" class="option option-1" >
                        <div class="dot"></div>
                        <span>Romantic</span>
                    </label>
                    <label for="option-2" class="option option-2">
                        <div class="dot"></div>
                        <span>Practical</span>
                    </label>
                    <label for="option-3" class="option option-3">
                        <div class="dot"></div>
                        <span>Silly</span>
                    </label>
                    <label for="option-4" class="option option-4">
                        <div class="dot"></div>
                        <span>Geeky</span>
                    </label>
                </div>
                <div className="flex-container">
                    <span className="idea-text">... gift</span>
                    <input className="tickbox-input" type="checkbox" id="cb01"></input>
                    <label for="cb01" className="idea-text">under £20</label>
                </div>
                

            </div>
                <div className="column">
                    <img 
                        src={require("../images/confused.jpg")} 
                        alt="a person looking confused" 
                        className="" 
                    />
                </div>
                
            </div>

        </div>
    )
}

export default GiftIdeas