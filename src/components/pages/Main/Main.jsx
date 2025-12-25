import React from "react";
import "./Main.css"
import Menu from "../../Menu/Menu.jsx";
import Header from "../../Header/Header.jsx";
import Content from "../../Content/Content.jsx";

class Main extends React.Component {
    render() {
        return (
            <div className="main-container">
                <Menu />
                <div className="main-content">
                    <Header />
                    <Content />
                </div>
            </div>
        )
    }
}

export default Main;