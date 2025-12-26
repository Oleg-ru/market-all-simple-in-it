import React from "react";
import "./Main.css"
import Menu from "../../Menu/Menu.jsx";
import Header from "../../Header/Header.jsx";
import Content from "../../Content/Content.jsx";

class Main extends React.Component {

    state = {
        activeTab: "shopping", //home | shopping | statistics
    }
    
    setActiveTab = (activeTab) => {
        this.setState({activeTab})
    }

    render() {
        return (
            <div className="main-container">
                <Menu activeTab={this.state.activeTab} setActiveTab={this.setActiveTab}/>
                <div className="main-content">
                    <Header />
                    <Content activeTab={this.state.activeTab}/>
                </div>
            </div>
        )
    }
}

export default Main;