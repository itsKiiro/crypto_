import React from "react";


const FeaturesCardItem = ({ link, title, description, imageUrl }) => {



    return (
        <div className="FeaturesCardItem">
            <div className="featuresImageContainer">
                <img src={imageUrl} alt="" />
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