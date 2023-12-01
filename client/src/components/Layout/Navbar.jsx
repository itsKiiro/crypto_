import React from "react";
import "./Navbar.css";
import Button from "../Button";


const Navbar = () => {


    return (
        <div className="Navbar">
            <div className="logoContainer">
                <h2 className="logo">Crypto<span style={{ color: "rgb(25, 182, 182)" }}>Cap</span></h2>
            </div>
            <div className="navLinksContainer">
                <ul className="navLinks"> 
                    <li className="navLink">Home</li>
                    <li className="navLink">Businesses</li>
                    <li className="navLink">Trade</li>
                    <li className="navLink">Market</li>
                    <li className="navLink">Learn</li>
                </ul>
            </div>
            <div className="loginContainer">
                <div className="languageContainer">
                    <div>
                        <ion-icon name="globe-outline"></ion-icon>
                    </div>
                    <div className="languageSelectContainer">
                        <h3>EN</h3>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </div>
                </div>
                <div>
                    <Button text={"Login"} />
                </div>
            </div>
        </div>
    )
}


export default Navbar;