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
            </div>
        </div>
    )
}

export default Main