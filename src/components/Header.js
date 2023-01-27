import React from "react";
import Logo from '../components/Logo'
import "./Header.css"

function Header() {
    return (
        <header>
            <Logo className="logo"/>
            <span>GiftPad</span>
        </header>
    )
}

export default Header