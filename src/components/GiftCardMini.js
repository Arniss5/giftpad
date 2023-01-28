import React from "react";
import "./GiftCardMini.css"

function GiftCardMini() {
    return(
        <div className="card-mini">
            <div className="card-mini-contents">
                <h3>Adam</h3>
                <div className="card-mini-main">
                    <div>
                        <span className="bold">Date of Birth: </span>01/04/93
                    </div>
                    <div className="card-mini-hobbies"><span className="bold">Hobbies: </span>PC, Warhammer, Clothes</div>
                </div>
                {/* <button>Open</button> */}
            </div>
        </div>
    )
}

export default GiftCardMini