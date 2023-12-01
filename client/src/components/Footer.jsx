import React from "react";
import "../styles/Footer.css";

const Footer = () => {


    return (
        <div className="Footer">
            <div>
                <h3>Crypto<span>Cap</span></h3>
                <div className="socialLinksContainer">
                    <a href="https://instagram.com/marcel_revo" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="https://linkedin.com/in/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://linkedin.com/in/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="https://linkedin.com/in/itsKiiro" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                </div>
                <p>2023 karallSoziety. All rights reserved</p>
            </div>
            <div>
                <h4>About Us</h4>
                <ul className="footerLinks">
                    <li className="footerLink">About</li>
                    <li className="footerLink">Careers</li>
                    <li className="footerLink">Blog</li>
                    <li className="footerLink">Legal & privacy</li>
                </ul>
            </div>
            <div>
                <h4>Services</h4>
                <ul className="footerLinks">
                    <li className="footerLink">Applications</li>
                    <li className="footerLink">Buy Crypto</li>
                    <li className="footerLink">Affilliate</li>
                    <li className="footerLink">Institutional Services</li>
                </ul>

            </div>
            <div>
                <h4>Learn</h4>
                <ul className="footerLinks">
                    <li className="footerLink">What is Cryptocurrency?</li>
                    <li className="footerLink">Crypto Basic</li>
                    <li className="footerLink">Tips and Tutorials</li>
                    <li className="footerLink">Market Update</li>
                </ul>
            </div>
        </div>
    )
}


export default Footer;