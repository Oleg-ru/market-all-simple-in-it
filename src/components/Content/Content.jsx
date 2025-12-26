import React from "react";
import "./Content.css"
import Shopping from "../pages/Main/Tabs/Shopping/Shopping.jsx";
import Home from "../pages/Main/Tabs/Home/Home.jsx";
import Statistics from "../pages/Main/Tabs/Statistics/Statistics.jsx";

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
        const {activeTab} = this.props;

        return (
            <div className="content-container">
                {activeTab === "home" && <Home />}
                {activeTab === "shopping" && <Shopping name="test" cards={this.state.cards}/>}
                {activeTab === "statistics" && <Statistics />}

            </div>
        )
    }
}

export default Content;