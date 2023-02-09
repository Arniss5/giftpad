import React from "react";
import GiftCardMini from "../components/GiftCardMini";
import './Main.css'

function Main() {
    return(
        <div className="main-container">
            
            <div className="cards-container">
                <GiftCardMini />
                <GiftCardMini />
                <GiftCardMini />
                <GiftCardMini />
                <GiftCardMini />
                <GiftCardMini />
                <GiftCardMini />
                <GiftCardMini />
    
            </div>
            <div className="add-card-container">
                <form>
                    <h3>Add Card</h3>
                </form>
            </div>
        </div>
    )
}

export default Main