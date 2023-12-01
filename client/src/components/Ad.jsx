import React from "react";
import "../styles/Ad.css";
import Button from "./Button";

const Ad = () => {


    return (
        <div className="Ad">
            <div className="adContainer">
                <div>
                    <div>
                        <h3>New In Cryptocurrency?</h3> 
                    </div>
                    <div>
                        <p style={{ margin: "0" }}>We'll tell you what cryptocurrencies are, how they work and why</p>
                        <p style={{ marginTop: "0" }}>you should own one right now. So let's do it.</p>                    
                    </div>                    
                </div>
                <div className="adButtonContainer">
                    <Button text={"Learn & Explore Now"} />
                </div>
            </div>
        </div>
    )
}


export default Ad;