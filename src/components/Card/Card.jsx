import React, {Component} from "react";
import "./Card.css"
import cardIcon from "../../assets/icons/book.svg"

export class Card extends Component {
    render() {
        const {price, cardName} = this.props;

        return (
            <div className="card-container">
                <img src={cardIcon} alt="book" className="card-icon"/>
                <div className="card-price">{price}</div>
                <div className="card-name">{cardName}</div>
            </div>
        );
    }
}