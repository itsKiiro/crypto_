import React, { useEffect, useState } from "react";
import "../styles/Features.css";
import FeaturesCardItem from "./FeaturesCardItem";
import axios from "axios";


const Features = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('loading...');
            }
        };    
        
        fetchArticles();
    }, [])

    return (
        <div className="Features">
            <div className="featuresHeaderContainer">
                <h1>CryptoCap's Amazing Features</h1>
                <p>Explore sensational features to prepare your best investment in cryptocurrency</p>
            </div>
            <div className="articlesContainer">
                {articles.results && articles.results.length > 0 && articles.results.splice(0, 4).map((item) => (
                    <FeaturesCardItem 
                        key={item.article_id}
                        link={item.link}
                        title={item.title}
                        description={item.description}
                    />
                ))} 
            </div>
        </div>
    )
}

export default Features;