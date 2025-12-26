import React, {Component} from "react";
import "./Card.css"
import cardIcon from "../../assets/icons/book.svg"
import addCardIcon from "../../assets/icons/addCard.svg"

export class Card extends Component {

    render() {
        const {price, cardName, isAdded, buyCard} = this.props;

        const cardClass = isAdded
            ? "card-container card-violet-background"
            : "card-container card-orange-background";

        return (
            <div className={cardClass}>
                <img className="card-add-icon" onClick={buyCard}  src={addCardIcon} alt="add-card" />
                <img className="card-icon"  src={cardIcon} alt="book" />
                <div className="card-price">{price}</div>
                <div className="card-name">{cardName}</div>
            </div>
        );
    }
}