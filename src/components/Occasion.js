import React from "react";
import "./Occasion.css"


function Occasion(props) {

    return(
        <div className={`date-container ${props.display}`}>
            <div className={`day ${props.display}`}>{props.day}/{props.month}</div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Occasion