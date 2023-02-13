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

    // useEffect(()=> {
    //     if(pin.length === 4) {
    //         alert("PIN set! Please enter your new PIN:")
    //     }
    // }, [pin])
    
    useEffect(()=> {
        if(enteredPin.length === 4) {
            setIsPinCorrect(true)
        }
    }, [enteredPin])

    return(
        <Context.Provider value={{pin, setPin, enteredPin, setEnteredPin, isPinCorrect, setIsPinCorrect, resetPin}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}