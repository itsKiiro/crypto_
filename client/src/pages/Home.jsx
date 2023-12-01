import React from "react";
import Start from "../components/Start";
import "../styles/Home.css";
import Navbar from "../components/Layout/Navbar";
import MarketTrend from "../components/MarketTrend";
import Features from "../components/Features";
import Ad from "../components/Ad";
import MarketUpdate from "../components/MarketUpdate";
import GetStarted from "../components/GetStarted";
import LearnAboutCrypto from "../components/LearnAboutCrypto";
import Footer from "../components/Footer";

const Home = () => {

    return (
        <div className="Home">
            <Navbar />
            <Start />
            <MarketTrend />
            <Features />
            <Ad />
            <MarketUpdate />
            <GetStarted />
            <LearnAboutCrypto />
            <Footer />
        </div>
    )
}


export default Home;