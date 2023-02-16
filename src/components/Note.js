import React, {useState} from "react";
import "./Note.css"

function Note(props) {
    


    return(
        <div className={`note-container ${props.expanded}`}>
            <div className="info">
                <h3>Ross</h3>   
                <p>Birthday: 02/01/1991</p>
                <div className={`hobbies ${props.display}`}>
                <h4>Hobbies:</h4>
                <ul>
                    <li>Warhammer</li>
                    <li>Magic</li>
                    <li>Video games</li>
                </ul>
            </div>
            </div>
            
            <div className={`gifts-container ${props.display}`}>
                <h4>Gift ideas:</h4>
                <div className="gifts">
                    <div className="gift">
                        <h5>Shoes</h5>
                        <p>Such and such shoes seem here and here</p>
                        <div>www.blahblah.com</div>
                    </div>
                    <div className="gift">
                        <h5>Shoes</h5>
                        <p>Such and such shoes seem here and here</p>
                        <div>www.blahblah.com</div>
                    </div>
                    <div className="gift">
                        <h5>Shoes</h5>
                        <p>Such and such shoes seem here and here</p>
                        <div>www.blahblah.com</div>
                    </div>
                    <div className="gift">
                        <h5>Shoes</h5>
                        <p>Such and such shoes seem here and here</p>
                        <div>www.blahblah.com</div>
                    </div>
                    <button>Add gift</button>
                </div>
            </div>
        </div>
    )
}

export default Note