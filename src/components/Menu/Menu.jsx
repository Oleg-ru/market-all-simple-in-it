import React from "react";
import "./Menu.css"
import homeIcon from "../../assets/icons/home.svg"
import shoppingIcon from "../../assets/icons/shopping.svg"
import statisticsIcon from "../../assets/icons/statistics.svg"
import singoutIcon from "../../assets/icons/signout.svg"

class Menu extends React.Component {
    render() {
        return (
            <div className="menu-container">
                <div className="menu-items">
                    <div className="menu-item">
                        <img className="menu-item-icon" src={homeIcon} alt=""/>
                    </div>
                    <div className="menu-item">
                        <img className="menu-item-icon" src={shoppingIcon} alt=""/>
                    </div>
                    <div className="menu-item">
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