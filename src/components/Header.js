import React, {useContext} from "react";
import Logo from '../components/Logo'
import { Context } from "../Context";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"

function Header() {
    const context = useContext(Context)

    const location = useLocation();
    const isCurrentPageMain = location.pathname === "/giftpad";
    console.log(isCurrentPageMain)

    return (
        <header>
            {!isCurrentPageMain ? <Link to="/giftpad"><Logo className="logo"/></Link> : <Logo className="logo"/>}
            <span>GiftPad</span>
        </header>
    )
}

export default Header