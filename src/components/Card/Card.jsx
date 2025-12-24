import React, {Component} from "react";

export class Card extends Component {
    cardName = 'Все о React'
    price = '10000$'

    render() {
        return (
            <div>
                <div>Товар: {this.cardName}</div>
                <div>Цена: {this.price}</div>
            </div>
        );
    }
}