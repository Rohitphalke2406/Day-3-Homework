import React from "react";
import './Navbar.css';

function Navbar(){
    return(
        <div className='nav'>
            <div className='home'>
                <ul>
                    <a href="#home">Home</a>
                </ul>
            </div>
        
            <div className="list-item"><ul><a href="#about">About</a></ul></div>
            <div className="list-item"><ul><a href="#services">Services</a></ul></div>
            <div className="list-item"><ul><a href="#FAQ">FAQ</a></ul></div>
            <div className="list-item"><ul><a href="#contact">Contact</a></ul></div>
    </div>
    );
}

export default  Navbar; 