import React, { useState, useEffect } from "react";
import "../styles/MarketUpdate.css";
import axios from "axios";
import Button from "./Button";

const MarketUpdate = () => {

    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/rates');
                setPortfolio(response.data);
            } catch (error) {
                console.error('loading...');
            }
        };    
        
        fetchPortfolio();
    }, []);


    return (
        <div className="MarketUpdate">
            <div className="marketUpdateHeader">
                <h1>Market Update</h1>
            </div>
            <div className="cryptoCategoriesContainer">
                <div>
                    <p>Cryptocurrency Categories</p>
                </div>
                <div className="cryptoCategoriesNavContainer">
                    <ul className="cryptoCategories">
                        <li className="cryptoCategory">Popular</li>
                        <li className="cryptoCategory">Metaverse</li>
                        <li className="cryptoCategory">Entertainment</li>
                        <li className="cryptoCategory">Energy</li>
                        <li className="cryptoCategory">Gaming</li>
                        <li className="cryptoCategory">Music</li>
                        <li className="cryptoCategory">See All 12+</li>
                    </ul>
                    <div className="inputContainer">
                        <input 
                            placeholder="Search Coin..."
                            className="searchInput"
                        />
                    </div>
                </div>
            </div>
            <div className="cryptosContainer">
                <div className="cryptoContainer">
                    <h4 style={{ width: "7%" }}>NO</h4>
                    <h4 style={{ width: "24%" }}>NAME</h4>
                    <h4 style={{ width: "17%" }}>LAST PRICE</h4>
                    <h4 style={{ width: "17%" }}>CHANGE</h4>
                    <h4 className="mobileDisplay" style={{ width: "17%" }}>MARKET STATS 7d</h4>
                    <h4>TRADE</h4>
                </div>
                {portfolio.data && portfolio.data.length > 0 && portfolio.data.slice(0, 7).map((item) => (
                    <div className="cryptoContainer" key={item.id}>
                        <p style={{ width: "7%" }}>{item.cmc_rank}</p>
                        <p style={{ width: "24%" }}>{item.name}</p>
                        <p style={{ width: "17%" }}>{item.quote.USD.price.toFixed(2)}</p>
                        <p style={{ width: "17%" }}>{item.quote.USD.percent_change_24h.toFixed(2)}</p>
                        <p className="mobileDisplay" style={{ width: "17%" }}>{item.quote.USD.percent_change_7d.toFixed(2)}</p>
                        <Button text={"Trade"} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MarketUpdate;