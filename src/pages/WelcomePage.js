import React, {useState, useContext} from "react";
import { Context } from "../Context";
import "./WelcomePage.css"

function WelcomePage() {
    const context = useContext(Context)

    function enterPin(e) {
        if(context.pin.length < 4) {
            context.setPin(prevPin => prevPin + e.target.innerText)
        } else if(context.enteredPin.length < 4) {
            context.setEnteredPin(prevPin => prevPin + e.target.innerText
            )       
        }
        
    }

    return (
        <div class="panels-container">
            <img 
                src={require("../images/giftshop.png")} 
                alt="gift shop cartoon" 
                className="panel panel-img" 
            />
            <div class="panel panel-main">
                <h1>Thoughful <span>gifts</span> at your finger tips</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam dolores qui repudiandae veritatis iste tempore, velit esse vero nobis.</p>
                <h2>{context.pin.length === 4 ? "Enter your PIN:" : "Set your PIN:"}</h2>
                <div class="pin-container">
                    <div class="pin-num" onClick={enterPin}>1</div>
                    <div class="pin-num" onClick={enterPin}>2</div>
                    <div class="pin-num" onClick={enterPin}>3</div>
                    <div class="pin-num" onClick={enterPin}>4</div>
                    <div class="pin-num" onClick={enterPin}>5</div>
                    <div class="pin-num" onClick={enterPin}>6</div>
                    <div class="pin-num" onClick={enterPin}>7</div>
                    <div class="pin-num" onClick={enterPin}>8</div>
                    <div class="pin-num" onClick={enterPin}>9</div>
                    <div class="pin-num" onClick={enterPin}>0</div>
                </div>
            </div>
        </div> 
    )
}

export default WelcomePage