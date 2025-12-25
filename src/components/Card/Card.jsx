import React, {Component} from "react";
import "./Card.css"
import cardIcon from "../../assets/icons/book.svg"

export class Card extends Component {
    cardName = 'Имя товара'
    price = '0.0'

    render() {
        return (
            <div className="card-container">
                <img src={cardIcon} alt="book" className="card-icon"/>
                <div className="card-price">{this.price}</div>
                <div className="card-name">{this.cardName}</div>
            </div>
        );
    }
}