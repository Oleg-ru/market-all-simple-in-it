import React from 'react';
import {Card} from "../../../../Card/Card.jsx";
import "./Shopping.css"

function Shopping({cards}) {

    return (
        <div className="shopping-container">
            {cards.map(({cardName, price}) => <Card cardName={cardName} price={price} />)}
        </div>
    );
}

export default Shopping;