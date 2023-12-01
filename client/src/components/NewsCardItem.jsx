import React from "react";
import "../styles/LearnAboutCrypto.css";

const NewsCardItem = ({ title, description, link }) => {


    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + "...";
        }
        return text;
    }

    return (
        <div className="NewsCardItem">
            <div className="featuresInfoContainer">
                <div className="featuresHeaderContainer">
                    <h3>{title}</h3>
                </div>
                <div className="featuresDescriptionContainer">
                    <p>{truncateDescription(description, 40)}</p>
                </div>
            </div>
            <div className="featuresLinkContainer">
                <a href={link} target="_blank" rel="noreferrer">See Article <ion-icon name="arrow-forward-outline"></ion-icon></a>
            </div>
        </div>
    )
}


export default NewsCardItem;