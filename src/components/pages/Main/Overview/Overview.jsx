import React, {Component} from 'react';
import "./Overview.css"
import Header from "./Header/Header.jsx";

class Overview extends Component {
    render() {
        return (
            <div className="overview-container">
                <Header/>
            </div>
        );
    }
}

export default Overview;