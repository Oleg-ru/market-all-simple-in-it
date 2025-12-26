import React from "react";
import "./Content.css"
import Shopping from "../pages/Main/Tabs/Shopping/Shopping.jsx";

class Content extends React.Component {

    state = {
        cards: [
            {price: "5.99", cardName: "book"},
            {price: "1100.00", cardName: "smartphone"},
            {price: "1500.50", cardName: "laptop"},
        ]
    }
    
    addCard = () => {

        const newCard = this.state.cards.concat({
            price: "0.0",
            cardName: "product_test"
        });

        this.setState({
            cards: newCard
        })
    }

    render() {
        return (
            <div className="content-container">
                <button onClick={this.addCard}>test</button>
                <Shopping name="test" cards={this.state.cards}/>
            </div>
        )
    }
}

export default Content;