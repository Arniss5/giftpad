import React from "react";
import "./Occasion.css"


function Occasion(props) {
    // console.log(props.day)
    return(
        <div className="date-container">
            <div className="day">{props.day}/{props.month}</div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Occasion