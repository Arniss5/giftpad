import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
const Context = React.createContext()


function ContextProvider(props) {
    
    const [pin, setPin] = useState(
        localStorage.getItem("pin") === null? "" : localStorage.getItem("pin")
    )
    const [enteredPin, setEnteredPin] = useState("")
    const [isPinCorrect, setIsPinCorrect] = useState(false)

    const [isSoundOn, setIsSoundOn] = useState(true)


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
            name: "John",
            hobby1: "horror movies",
            hobby2: "British history",
            hobby3: "boardgames",
            birthday: "1991-04-16",
            ideas: [
                {
                    elId: nanoid(),
                    gift: "History book",
                    comments: "'A Short History of England' by Simon Jenkins, seen in Waterstones for £9.99, recommended by Adam",
                    url: "https://www.waterstones.com/book/a-short-history-of-england/simon-jenkins/9781788160896",
                },
                {
                    elId: nanoid(),
                    gift: "Everdell",
                    comments: "Awesome looking warker placement boardgame. We played it in Dice cafe and John loved it. Can be ordered online for around £50.",
                    url: "hhttps://www.board-game.co.uk/product/everdell/",
                }
            ],
            isHidden: true
        },
        {
            elId: nanoid(),
            name: "Jane",
            hobby1: "warhammer",
            hobby2: "magic the gathering",
            hobby3: "video games",
            birthday: "1991-05-01",
            ideas: [{
                    elId: nanoid(),
                    gift: "Hogwarts Legacy",
                    comments: "Jane said she loves Harry Potter, might be a great game for her. Can buy on Steam for 50 quid",
                    url: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
                }],
            isHidden: true
        }
    ] : JSON.parse(localStorage.getItem("notes")))

    return(
        <Context.Provider 
            value={{pin, setPin, enteredPin, setEnteredPin, isPinCorrect, setIsPinCorrect, resetPin, notes, setNotes, isSoundOn, setIsSoundOn}}
        >
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}