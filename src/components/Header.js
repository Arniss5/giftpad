import React, {useContext} from "react";
import Logo from '../components/Logo'
import { Context } from "../Context";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    const context = useContext(Context)

    return (
        <header>
            {context.isPinCorrect? <Link to="/giftpad"><Logo className="logo"/></Link> : <Logo className="logo"/>}
            <span>GiftPad</span>
        </header>
    )
}

export default Header