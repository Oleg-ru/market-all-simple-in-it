import React, {Component} from "react";
import "./Card.css"
import cardIcon from "../../assets/icons/book.svg"
import addCardIcon from "../../assets/icons/addCard.svg"

export class Card extends Component {

    state = {
        isAdded: false
    }

    toggleIsAdded = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isAdded: !this.state.isAdded
            }
        })
    }

    render() {
        const {price, cardName} = this.props;

        const cardClass = this.state.isAdded
            ? "card-container card-violet-background"
            : "card-container card-orange-background";

        return (
            <div className={cardClass}>
                <img className="card-add-icon" onClick={this.toggleIsAdded}  src={addCardIcon} alt="add-card" />
                <img className="card-icon"  src={cardIcon} alt="book" />
                <div className="card-price">{price}</div>
                <div className="card-name">{cardName}</div>
            </div>
        );
    }
}