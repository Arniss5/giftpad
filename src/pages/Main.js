
import React, {useContext} from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import './Main.css'

function Main() {
    const context = useContext(Context)


    return(
        <div className="main-container">
            <h2>MENU</h2>
            <div class="parent">
                <Link to="/gift-notes"><div class="main-btn gift-notes">Gift notes</div></Link>
                <div class="main-btn dates">Dates</div>
                <div class="main-btn change-pin" onClick={context.resetPin}>change PIN</div>
                <div class="main-btn ideas">Gift ideas</div>
            </div> 
        </div>
    )
}

export default Main