
import React, {useEffect, useState} from "react";

import "./Dates.css"
import { nanoid } from "nanoid";

// https://calendarific.com/api-documentation

function Dates() {

    const apiKey = process.env.REACT_APP_API_KEY
    
    const [holidays, setHolidays] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(`https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=GB&year=2023&month=03`)
        .then(response => response.json())
        .then(data => setHolidays(data))
        .catch(error => console.log(error));
    };


    console.log(holidays)
    return(
        <div className="dates-container">
            <h2>Dates to remember</h2>
            <img 
                src={require("../images/dates.png")} 
                alt="cartoon person surrounded by calendar pages" 
                className="corner-img" 
            />
        </div>
    )
}

export default Dates