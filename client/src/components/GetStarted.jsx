import React from "react";
import "../styles/GetStarted.css";
import Button from "./Button";

const GetStarted = () => {


    return (
        <div className="GetStarted">
            <div className="getStartedLeftContainer">
                <div>
                    <h1>How To Get Started</h1>
                </div>
                <div>
                    <p>Simple and easy way to start your investment</p>
                    <p>in cryptocurrency</p>
                </div>
                <div className="getStartedButtonContainer">
                    <Button text={"Get Started"} />
                </div>
            </div>
            <div className="getStartedRightContainer">

                <div className="getStartedCard">
                    <div className="getStartedLogoContainer">
                        <ion-icon name="people-circle-outline"></ion-icon>
                    </div>
                    <div className="mobileDiv">
                        <h3>Create Your Account</h3>
                        <p style={{ marginBottom: "0" }}>Your Account and personal identity are</p>
                        <p style={{ marginTop: "0" }}>guarenteed safe.</p>
                    </div>
                </div>

                <div className="getStartedCard">
                    <div className="getStartedLogoContainer">
                        <ion-icon name="card-outline"></ion-icon>
                    </div>
                    <div className="mobileDiv">
                        <h3>Connect Bank Account</h3>
                        <p>Connect your bank account to start transactions.</p>                      
                    </div>
                </div>

                <div className="getStartedCard">
                    <div className="getStartedLogoContainer">
                        <ion-icon name="logo-bitcoin"></ion-icon>
                    </div>
                    <div className="mobileDiv">
                        <h3>Start Build Portfolio</h3>
                        <p style={{ marginBottom: "0" }}>Buy and sell popular currencies and keep track</p>
                        <p style={{ marginTop: "0" }}>of them.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default GetStarted;