import React from "react";

function WelcomePage() {
    return (
        <div class="panels-container">
    
            <img 
                src={require("../images/giftshop.png")} 
                alt="gift shop cartoon" 
                className="panel panel-img" />

            <div class="panel panel-main">
                <h1>Thoughful <span>gifts</span> at your finger tips</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam dolores qui repudiandae veritatis iste tempore, velit esse vero nobis.</p>
                <h2>Enter your PIN:</h2>
                <div class="pin-container">
                    <div class="pin-num">1</div>
                    <div class="pin-num">2</div>
                    <div class="pin-num">3</div>
                    <div class="pin-num">4</div>
                    <div class="pin-num">5</div>
                    <div class="pin-num">6</div>
                    <div class="pin-num">7</div>
                    <div class="pin-num">8</div>
                    <div class="pin-num">9</div>
                    <div class="pin-num">0</div>
                </div>
            </div>
        </div> 
    )
}

export default WelcomePage