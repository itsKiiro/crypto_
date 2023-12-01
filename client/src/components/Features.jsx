import React from "react";
import "../styles/Features.css";
import FeaturesCardItem from "./FeaturesCardItem";


const Features = () => {

    return (
        <div className="Features">
            <div className="featuresHeaderContainer">
                <h1>CryptoCap's Amazing Features</h1>
                <p>Explore sensational features to prepare your best investment in cryptocurrency</p>
            </div>
            <div className="articlesContainer">
                <FeaturesCardItem 
                    link={"https://karall.dev"}
                    title={"Manage Portfolio"}
                    description={"Buy and sell popular digital currencies, keep track of them in one place."}
                    icon={"bookmarks-outline"}
                />
                <FeaturesCardItem 
                    link={"https://karall.dev"}
                    title={"Protected Securely"}
                    description={"All cash balances are covered by FDIC insurance, up to a maximum of $250,000."}
                    icon={"shield-checkmark-outline"}
                />
                <FeaturesCardItem 
                    link={"https://karall.dev"}
                    title={"Cryptocurrency Variety"}
                    description={"Supports a variety of the most popular digital currencies and always uptodate."}
                    icon={"logo-bitcoin"}
                />
                <FeaturesCardItem 
                    link={"https://karall.dev"}
                    title={"Learn Best Practice"}
                    description={"Easy to know how crytocurrency works and friendly to newbies."}
                    icon={"document-text-outline"}
                />
            </div>
        </div>
    )
}

export default Features;