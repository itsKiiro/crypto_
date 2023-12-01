import React, { useEffect, useState } from "react";
import "../styles/LearnAboutCrypto.css";
import axios from "axios";
import NewsCardItem from "./NewsCardItem";

const LearnAboutCrypto = () => {

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
        <div className="LearnAboutCrypto">
            <div className="learnHeaderContainer">
                <h1>Learn About Cryptocurrency</h1>
                <p>Learn all about cryptocurrency to start investing</p>
            </div>

            <div className="newsContainer">
                {articles.results && articles.results.length > 0 && articles.results.splice(0, 4).map((item) => (
                    <NewsCardItem 
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


export default LearnAboutCrypto;