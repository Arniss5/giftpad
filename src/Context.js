import React, {useState, useEffect} from 'react'
const Context = React.createContext()

function ContextProvider(props) {
    
    const [pin, setPin] = useState(localStorage.getItem("pin") === null? "" : localStorage.getItem("pin"))

    const [enteredPin, setEnteredPin] = useState("")
    const [isPinCorrect, setIsPinCorrect] = useState(false)
    console.log(pin)
    console.log(enteredPin)
    console.log(isPinCorrect)

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

    return(
        <Context.Provider value={{pin, setPin, enteredPin, setEnteredPin, isPinCorrect, setIsPinCorrect, resetPin}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}