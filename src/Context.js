import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider(props) {
    
    const [pin, setPin] = useState("")
    const [enteredPin, setEnteredPin] = useState("")
    const [isPinCorrect, setIsPinCorrect] = useState(false)
    console.log(pin)
    console.log(enteredPin)
    console.log(isPinCorrect)
    
    useEffect(()=> {
        if(enteredPin.length === 4) {
            setIsPinCorrect(true)
        }
    }, [enteredPin])

    return(
        <Context.Provider value={{pin, setPin, enteredPin, setEnteredPin, isPinCorrect, setIsPinCorrect}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}