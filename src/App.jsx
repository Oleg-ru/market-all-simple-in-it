import './App.css'
import React from 'react';
import Main from "./components/pages/Main/Main.jsx";
import Authorization from "./components/pages/Authorizition/Authorization.jsx";

class App extends React.Component {

    state = {
        activeTab: "shopping", //home | shopping | statistics

        cash: 19542,
        currentData: new Date(),

        cards: [
            {id: 1, price: "5.99", cardName: "book", isAdded: false},
            {id: 2, price: "1100.00", cardName: "smartphone", isAdded: false},
            {id: 3, price: "1500.50", cardName: "laptop", isAdded: false},
        ],

        buyCards: [],
    }

    setActiveTab = (activeTab) => {
        this.setState({activeTab})
    }

    buyCard = (id) => {
        this.setState((prevState) => {
            const newCards = prevState.cards.map((card) => {
                if (id !== card.id) {
                    return card;
                }
                return {
                    ...card,
                    isAdded: !card.isAdded
                }
            })

            const newBuyCards = newCards.filter((cards) => cards.isAdded);

            return {
                ...prevState,
                cards: newCards,
                buyCards: newBuyCards
            }
        })
    }

  render() {
      return (
          <div className="app-window-container">
                  <Authorization />
                  {/*<Main state={this.state} setActiveTab={this.setActiveTab} buyCard={this.buyCard}/>*/}
          </div>
      )
  }
}


export default App;
