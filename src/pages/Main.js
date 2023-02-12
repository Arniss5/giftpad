import React from "react";
// import GiftCardMini from "../components/GiftCardMini";
import './Main.css'

function Main() {
    return(
        <div className="main-container">
            <h2>MENU</h2>
            <div class="parent">
                <div class="main-btn gift-ideas">Gift notes</div>
                <div class="main-btn gift-inspiration">Dates</div>
                <div class="main-btn change-pin">PIN</div>
                <div class="main-btn occasions">Gift ideas</div>
            </div> 
        </div>
    )
}

export default Main