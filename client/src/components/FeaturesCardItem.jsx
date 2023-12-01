import React from "react";


const FeaturesCardItem = ({ link, title, description, icon }) => {



    return (
        <div className="FeaturesCardItem">
            <div className="featuresImageContainer">
                <ion-icon style={{ fontSize: "2.7rem", color: "#fff", marginTop: "2rem" }} name={`${icon}`}></ion-icon>
            </div>
            <div className="featuresInfoContainer">
                <div className="featuresHeaderContainer">
                    <h3>{title}</h3>
                </div>
                <div className="featuresDescriptionContainer">
                    <p>{description}</p>
                </div>
            </div>
            <div className="featuresLinkContainer">
                <a href={link} target="_blank" rel="noreferrer">See Explained <ion-icon name="arrow-forward-outline"></ion-icon></a>
            </div>
        </div>
    )
}


export default FeaturesCardItem;