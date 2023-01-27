import React from "react";

function GiftCardMini() {
    return(
        <div className="card-mini">
            <div className="card-mini-contents">
                <div className="card-mini-title">
                    <img src={require("../images/adam.jpg")} alt="avatar" className="card-mini-logo"/>
                    <h3>Adam</h3>
                </div>
                <div className="card-mini-main">
                    Date of Birth: 01/04/93<br/>
                    Hobbies: PC, Warhammer, Clothes
                </div>
                <button>Open</button>
            </div>
        </div>
    )
}

export default GiftCardMini