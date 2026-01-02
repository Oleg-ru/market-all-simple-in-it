import React, {Component} from 'react';
import "./Header.css"
import Button from "../../../../Button/Button.jsx";
import {NavLink} from "react-router";

class Header extends Component {
    render() {
        return (
            <div className="overview-header-container">
                <NavLink to="/auth/0" >
                    <Button size={'normal'}>Sign in</Button>
                </NavLink>
                <NavLink to="/auth/1" >
                    <div>Registration</div>

                </NavLink>
            </div>
        );
    }
}

export default Header;