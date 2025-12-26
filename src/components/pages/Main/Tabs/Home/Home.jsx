import React from 'react';
import Purchases from "../../../../Purchases/Purchases.jsx";
import {Card} from "../../../../Card/Card.jsx";
import "./Home.css"

function Home({buyCards, buyCard}) {
    return (
        <div className="home-container">
            <Purchases />
            {
                buyCards.map(({id, cardName, price, isAdded}) => (
                    <Card
                        key={id}
                        cardName={cardName}
                        price={price}
                        isAdded={isAdded}
                        buyCard={() => {
                            buyCard(id)
                        }}
                    />)
                )
            }
        </div>
    );
}

export default Home;