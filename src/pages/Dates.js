import React, {useEffect, useState} from "react";
import "./Dates.css"
import { nanoid } from "nanoid";

// https://calendarific.com/api-documentation

function Dates() {

    const apiKey = process.env.REACT_APP_API_KEY
    
    // Current month&year
    const [date, setDate] = useState(new Date()) 
    const month = (date.getMonth() + 1).toString()
    const year = date.getFullYear().toString()
    
    // const [month, setMonth] = useState((date.getMonth() + 1).toString())

    const [holidays, setHolidays] = useState([])
    const [formData, setFormData] = useState(
        {
            month: month,
            year: year,
        }
    )
    
    console.log(formData)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(`https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=GB&year=2023&month=3`)
        .then(response => response.json())
        .then(data => setHolidays(data))
        .catch(error => console.log(error));
    };


    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // console.log(holidays)
    return(
        <div className="dates-container">
            <h2>Dates to remember</h2>
            <div className="form-container">
                <select id="month-input" value={formData.month} onChange={handleChange} name="month">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <input
                        id="year-input"
                        type="number"
                        placeholder="Year"
                        onChange={handleChange}
                        name="year"
                        value={formData.year}
                    />
                <img 
                    src={require("../images/dates.png")} 
                    alt="cartoon person surrounded by calendar pages" 
                    className="corner-img" 
                />
            </div>
            <div className="dates-container">
                <div className="birthdays"></div>
                <div className="celebrations"></div>
            </div>

            
        </div>
    )
}

export default Dates