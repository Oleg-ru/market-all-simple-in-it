import React from "react";
import "./Content.css"
import Shopping from "../pages/Main/Tabs/Shopping/Shopping.jsx";

class Content extends React.Component {

    cards = [
        {price: "5.99", cardName: "book"},
        {price: "1100.00", cardName: "smartphone"},
        {price: "1500.50", cardName: "laptop"},
    ]

    render() {
        return (
            <div className="content-container">
                <Shopping name="test" cards={this.cards}/>
            </div>
        )
    }
}

export default Content;