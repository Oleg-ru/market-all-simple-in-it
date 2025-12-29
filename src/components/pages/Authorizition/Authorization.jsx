import React, {Component} from 'react';
import './Authorization.css'
import LoginForm from "../../LoginForm/LoginForm.jsx";
import RegistrationForm from "../../RegistrationForm/RegistrationForm.jsx";

class Authorization extends Component {
    render() {
        return (
            <div className="auth-window">
                <LoginForm />
                <RegistrationForm />
            </div>
        );
    }
}

export default Authorization;