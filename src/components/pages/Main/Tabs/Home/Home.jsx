import React from 'react';
import Purchases from "../../../../Purchases/Purchases.jsx";
import {Card} from "../../../../Card/Card.jsx";
import "./Home.css"

function Home(props) {
    return (
        <div className="home-container">
            <Purchases />
            <Card />
        </div>
    );
}

export default Home;