import React from "react";
import "./Main.css"
import Menu from "../../Menu/Menu.jsx";
import Header from "../../Header/Header.jsx";
import Content from "../../Content/Content.jsx";

class Main extends React.Component {
    render() {

        const {
            setActiveTab,
            buyCard,
            state: {
                activeTab,
                cash,
                currentData,
                cards,
                buyCards,
            }
        } = this.props;

        return (
            <div className="main-container">
                <Menu activeTab={activeTab} setActiveTab={setActiveTab}/>
                <div className="main-content">
                    <Header cash={cash} currentData={currentData}/>
                    <Content buyCards={buyCards} activeTab={activeTab} cards={cards} buyCard={buyCard}/>
                </div>
            </div>
        )
    }
}

export default Main;