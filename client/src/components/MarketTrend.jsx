import React, { useState, useEffect } from "react";
import MarketTrendCardItem from "./MarketTrendCardItem";
import axios from "axios";
import "../styles/MarketTrend.css";


const MarketTrend = () => {

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
        <div className="MarketTrend">
            <div className="marketTrendHeaderContainer">
                <h2>Market Trends</h2>
            </div>
            <div className="marketTrendsContainer">
                {portfolio.data && portfolio.data.length > 0 && portfolio.data.slice(0, 4).map((item) => (
                    <MarketTrendCardItem 
                        key={item.id}
                        symbol={item.symbol}
                        name={item.name}
                        price={item.quote.USD.price.toFixed(2)}
                        percent={item.quote.USD.percent_change_24h.toFixed(2)}
                    />
                ))}
            </div>
        </div>
    )
}


export default MarketTrend;