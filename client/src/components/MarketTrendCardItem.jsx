import React from "react";
import "../styles/MarketTrend.css";


const MarketTrendCardItem = ({ symbol, name, price, percent }) => {


    return (
        <div className="MarketTrendCardItem">
            <div className="marketCardTopContainer">
                <div className="symbolContainer">
                    <p>{symbol}</p>
                </div>
                <div className="nameContainer">
                    <p className="cryptoName">{name}</p>
                </div>
            </div>
            <div className="marketCardBottomContainer">
                <div className="statsContainer">
                    <div className="priceContainer">
                        <h3>{price} $</h3>
                    </div>
                    <div className="percentageContainer">
                        <p>{percent} %</p>
                    </div>
                </div>
                <div className="statContainer">

                </div>
            </div>
        </div>
    )
}


export default MarketTrendCardItem;