// import React from "react";
// import GiftCardMini from "../components/GiftCardMini";
// import './Main.css'

// function Main() {
//     return(
//         <div className="main-container">
            
//             <div className="cards-container">
//                 <GiftCardMini />
//                 <GiftCardMini />
//                 <GiftCardMini />
//                 <GiftCardMini />
//                 <GiftCardMini />
//                 <GiftCardMini />
//                 <GiftCardMini />
//                 <GiftCardMini />
    
//             </div>
//             <div className="add-card-container">
//                 <form>
//                     <h3>New Card</h3>
//                     <input
//                         type="text"
//                         placeholder="Name"
//                     />
//                     <i class="fa-solid fa-user"></i>
                    
//                     <input
//                         type="date"
//                         placeholder="birthday"
//                     />
//                     <i class="fa-solid fa-cake-candles"></i>
//                     <input
//                         type="text"
//                         placeholder="Hobby 1"
//                     />
//                     <i class="fa-solid fa-gamepad"></i>
//                     <input
//                         type="text"
//                         placeholder="Hobby 2"
//                     />
//                     <i class="fa-solid fa-guitar"></i>
//                     <input
//                         type="text"
//                         placeholder="Hobby 1"
//                     />
//                     <i class="fa-solid fa-palette"></i>
//                     <fieldset>
//                         <input
//                             type="radio"
//                             id="radio-green"
//                             name="green"
//                         />
//                         <label htmlFor="radio-blue" className="radio-label"></label>
//                         <input
//                             type="radio"
//                             id="radio-blue"
//                             name="colour"
//                             value="blue"
//                         />
//                         <label htmlFor="radio-yellow" className="radio-label"></label>
//                         <input
//                             type="radio"
//                             id="radio-yellow"
//                             name="yellow"
//                         />
//                         <label htmlFor="radio-green" className="radio-label"></label>
//                     </fieldset>
                    
//                     <button className="add-card-btn">Add</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Main


import React from "react";
import GiftCardMini from "../components/GiftCardMini";
import './Main.css'

function Main() {
    return(
        <div class="parent">
            <div class="main-btn gift-ideas"> Gift ideas</div>
            <div class="main-btn gift-inspiration">Gift inspiration</div>
            <div class="main-btn change-pin">Change PIN</div>
            <div class="main-btn occasions">Occasions reminder</div>
        </div> 
    )
}

export default Main