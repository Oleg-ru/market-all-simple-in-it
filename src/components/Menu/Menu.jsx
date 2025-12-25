import React from "react";
import "./Menu.css"
import homeIcon from "../../assets/icons/home.svg"
import shoppingIcon from "../../assets/icons/shopping.svg"
import statisticsIcon from "../../assets/icons/statistics.svg"
import singoutIcon from "../../assets/icons/signout.svg"

class Menu extends React.Component {

    test = "test"

    constructor(props) {
        super(props);
        
        this.onMenuItemClick2 = () => {
            console.log("click 2", this.test)
        }
    }


    onMenuItemClick() {
        console.log("click 1", this.test)
    }

    onMenuItemClick3 = () => {
        console.log("click 3", this.test)
    }

    render() {
        return (
            <div className="menu-container">
                <div className="menu-items">
                    <div className="menu-item" onClick={this.onMenuItemClick.bind(this)}>
                        <img className="menu-item-icon" src={homeIcon} alt=""/>
                    </div>
                    <div className="menu-item" onClick={this.onMenuItemClick2}>
                        <img className="menu-item-icon" src={shoppingIcon} alt=""/>
                    </div>
                    <div className="menu-item" onClick={this.onMenuItemClick3}>
                        <img className="menu-item-icon" src={statisticsIcon} alt=""/>
                    </div>
                </div>
                <div className="menu-item">
                    <img className="menu-item-icon" src={singoutIcon} alt=""/>
                </div>
            </div>
        )
    }
}

export default Menu;