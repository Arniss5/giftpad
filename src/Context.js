import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
const Context = React.createContext()


function ContextProvider(props) {
    
    const [pin, setPin] = useState(localStorage.getItem("pin") === null? "" : localStorage.getItem("pin"))

    const [enteredPin, setEnteredPin] = useState("")
    const [isPinCorrect, setIsPinCorrect] = useState(false)
 

    function resetPin() {
       setPin("")
       setEnteredPin("")
       setIsPinCorrect(false)
    }

    useEffect(() => {
        localStorage.setItem('pin', pin);
      }, [pin]);
    
    useEffect(()=> {
        if(enteredPin.length === 4 && enteredPin === pin) {
            setIsPinCorrect(true)
        } else if (enteredPin.length === 4) {
            alert("Incorrect PIN!")
            setEnteredPin("")
        }
    }, [enteredPin])


    const [notes, setNotes] = useState(localStorage.getItem("notes") == null? [
        {
            elId: nanoid(),
            name: "Kasia",
            hobby1: "coding",
            hobby2: "films",
            hobby3: "boardgames",
            birthday: "1991-03-16",
            ideas: [
                {
                    elId: nanoid(),
                    gift: "shoes",
                    comments: "Supper pretty shoes that I saw in CCC last time I was in Poland. They cost 139PLN",
                    url: "https://www.google.com",
                },
                {
                    elId: nanoid(),
                    gift: "Hogwards Legacy",
                    comments: "That PC game that's just come out. Would be a good bday idea. Can be bought on Amazon (see link) or in GAME",
                    url: "https://www.amazon.com",
                }
            ],
            isHidden: true
        },
        {
            elId: nanoid(),
            name: "Ross",
            hobby1: "warhammer",
            hobby2: "magic",
            hobby3: "video games",
            birthday: "1991-01-02",
            ideas: [{
                    elId: nanoid(),
                    gift: "warhammer",
                    comments: "whatever",
                    url: "https://www.google.com",
                }],
            isHidden: true
        }
    ] : JSON.parse(localStorage.getItem("notes")))

    return(
        <Context.Provider value={{pin, setPin, enteredPin, setEnteredPin, isPinCorrect, setIsPinCorrect, resetPin, notes, setNotes}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}