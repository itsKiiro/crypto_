import React from "react";
import Button from "./Button";
import "../styles/Start.css";

const Start = () => {


    return (
        <div className="Start">
            <div className="startHeaderContainer">
                <h1>Start and Build Your Crypto Portfolio Here</h1>
                <div>
                    <p>Only at CryptoCap, you can build a good portfolio and learn</p>
                    <p>best practices about cryptocurrency.</p>                    
                </div>
                <Button text={"Get Started"} />
            </div>
        </div>
    )
}


export default Start;