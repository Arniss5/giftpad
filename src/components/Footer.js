import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            
                <div className="author">Developed by <strong>Arniss5</strong> © 2023</div>
                <div className="socials-container">
                    <a href="https://github.com/Arniss5" target="_blank" >
                        <i class="fa-brands fa-github social-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kasia-dobrowolska-151223256/" target="_blank" >
                        <i class="fa-brands fa-linkedin social-icon"></i>
                    </a>
                    <a href="mailto:kat.dobr@gmail.com" >
                        <i class="fa-solid fa-envelope social-icon"></i>
                    </a>
                </div>
            <div className="credits">
                <a href="https://www.freepik.com/author/stories" target="_blank">Images by storyset on Freepik</a> <br></br>
                <a href="https://www.zapsplat.com" target="_blank">Sounds from Zapsplat</a> 
            </div>
        </footer>
    )
}

export default Footer