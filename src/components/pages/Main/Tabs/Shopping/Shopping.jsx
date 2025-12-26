import React from 'react';
import {Card} from "../../../../Card/Card.jsx";
import "./Shopping.css"

function Shopping({cards, buyCard}) {

    return (
        <div className="shopping-container">
            {
                cards.map(({id, cardName, price, isAdded}) => (
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

export default Shopping;