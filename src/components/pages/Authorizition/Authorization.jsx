import React, {Component} from 'react';
import './Authorization.css'
import LoginForm from "../../LoginForm/LoginForm.jsx";
import RegistrationForm from "../../RegistrationForm/RegistrationForm.jsx";
import {Typography} from 'antd'

class Authorization extends Component {
    render() {

        const {toggleForm, auth: {isSignIn}} = this.props;

        const toggleTitle = isSignIn ? 'Sign Up' : 'Sign In';

        return (
            <div className="auth-window">
                <LoginForm/>
                <RegistrationForm/>
                <div
                    onClick={toggleForm}
                    className="toggle-box"
                    style={{
                        right: isSignIn ? '0' : '50%'
                    }}
                >
                    <Typography.Title
                        level={2}
                        style={{
                            color: 'white',
                        }}
                    >
                        {toggleTitle}
                    </Typography.Title>
                </div>
            </div>
        );
    }
}

export default Authorization;