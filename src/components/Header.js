import React, {useContext} from "react";
import Logo from '../components/Logo'
import { Context } from "../Context";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"

function Header() {
    const context = useContext(Context)

    const location = useLocation();
    const isCurrentPageMain = location.pathname === "/giftpad";

    function toggleSound() {
        context.setIsSoundOn(prevState => !prevState)
    }

    return (
        <header>
            {!isCurrentPageMain ? 
                <Link to="/giftpad"><Logo className="logo"/></Link> : 
                <Logo className="logo"/>
            }
            <span>GiftPad</span>
            <div className="toggle-container">
                <i class="fa-solid fa-volume-high"></i>
                <div className="toggle" onClick={toggleSound}>
                    <div className={`check ${context.isSoundOn? "checked" : "" }`}></div>
                    <b className="b switch"></b>
                    <b className="b track"></b>
                </div>
            </div>
            
        </header>
    )
}

export default Header