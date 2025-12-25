import React, {Component} from 'react';
import "./Purchases.css"
import BankCard from "../BankCard/BankCard.jsx";
import Buy from "./Buy/Buy.jsx";

class Purchases extends Component {
    render() {
        return (
            <div className="purchases-container">
                <div>
                    <Buy />
                </div>
                <BankCard />
            </div>
        );
    }
}

export default Purchases;