import React, {useEffect, useState, useContext} from "react";
import Occasion from "../components/Occasion";
import "./Dates.css"
import { nanoid } from "nanoid";
import { Context } from "../Context";


// https://calendarific.com/api-documentation

function Dates() {
    const context = useContext(Context)
    const apiKey = process.env.REACT_APP_API_KEY
    
    const currentDate = new Date()
    const currentMonth = (currentDate.getMonth() + 1).toString()
    const currentYear = currentDate.getFullYear().toString()
    

    const [holidays, setHolidays] = useState([])
    const [datesFormData, setDatesFormData] = useState(
        {
            month: currentMonth,
            year: currentYear,
        }
    )

    const occasionEls = holidays.map(holiday => {
        return (
            <Occasion
                key={nanoid()}
                day={holiday.date.datetime.day}
                month={holiday.date.datetime.month}
                name={holiday.name}
                description={holiday.description}
                display="grey"
            />
        )
    })

    function filterBirthday(objArray) {
        // Filter the array by matching the month component of the "birthday" property
        const filteredArray = objArray.filter(obj => {
            const birthdayMonth = new Date(obj.birthday).getMonth() + 1
            const birthdayYear = new Date(obj.birthday).getFullYear()
            // Get rid of "negative" birthdays
            return birthdayMonth == datesFormData.month && datesFormData.year - birthdayYear > 0
        })
        // Sort the filtered array by the day component of the "birthday" property
        filteredArray.sort((a, b) => {
            const dayA = new Date(a.birthday).getDate()
            const dayB = new Date(b.birthday).getDate()
            return dayA - dayB
        });
        return filteredArray;
    }

    function getBirthdayEls() {
        const matchingBdays = filterBirthday(context.notes)
        console.log(matchingBdays)
        if (matchingBdays.length > 0) {
            return matchingBdays.map(bday => {
                const [year, month, day] = bday.birthday.split('-')
                const age = datesFormData.year - year
                return (
                    <Occasion
                        key={nanoid()}
                        day={day}
                        month={month}
                        name={bday.name}
                        description={`${bday.name} is turning ${age}!`}
                        display=""
                    />
                )
            })
        } else {
            return <div>No birthdays this month!</div>
        }
        

    }

    const birthdaysEls = getBirthdayEls()

    useEffect(() => {
        fetchData()
    }, [datesFormData])

    const fetchData = () => {
        fetch(`https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&country=GB&year=${datesFormData.year}&month=${datesFormData.month}`)
        .then(response => response.json())
        .then(data => setHolidays(data.response.holidays))
        .catch(error => console.log(error));
    };


    function handleFormChange(event) {
        const {name, value} = event.target
        setDatesFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return(
        <div className="main-container">
            
            <h2>Dates to remember</h2>
            <div className="columns">
            <div className="form-container">
                <h3>Select month:</h3>
                <select id="month-input" value={datesFormData.month} onChange={handleFormChange} name="month">
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
                        onChange={handleFormChange}
                        name="year"
                        value={datesFormData.year}
                    />
                <img 
                    src={require("../images/dates.png")} 
                    alt="cartoon person surrounded by calendar pages" 
                    className="corner-img" 
                />
            </div>
            <div className="dates-container">
                <div className="dates birthdays">
                    <h3>Birthdays:</h3>
                    {birthdaysEls}
                </div>
                <div className="dates occasions">
                    <h3>Celebrations:</h3>
                    {occasionEls}
                </div>
                
            </div>
            </div>
            
        </div>
    )
}

export default Dates