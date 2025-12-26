import React from 'react';
import Purchases from "../../../../Purchases/Purchases.jsx";
import {Card} from "../../../../Card/Card.jsx";

function Home(props) {
    return (
        <div>
            <Purchases />
            <Card />
        </div>
    );
}

export default Home;