import React from 'react';
import {Card} from "../../../../Card/Card.jsx";

function Shopping({cards}) {

    return (
        <>
            {cards.map(({cardName, price}) => <Card cardName={cardName} price={price} />)}
        </>
    );
}

export default Shopping;