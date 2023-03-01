
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
                <Link to="/dates"><div class="main-btn celebrations">Dates</div></Link>
                <div class="main-btn change-pin" onClick={context.resetPin}>change PIN</div>
                <Link to="/gift-ideas"><div class="main-btn ideas">Gift ideas</div></Link>
            </div> 
        </div>
    )
}

export default Main