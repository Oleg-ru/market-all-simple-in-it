import React, {Component} from 'react';
import Authorization from "../components/pages/Authorizition/Authorization.jsx";
import Main from "../components/pages/Main/Main.jsx";
import {Route, Routes} from "react-router";
import Overview from "../components/pages/Main/Overview/Overview.jsx";

class AppRoutes extends Component {
    render() {

        const {state, buyCard, setActiveTab, toggleForm} = this.props;
        
        return (
            <Routes>
                <Route path="/" element={<Overview/>}/>

                <Route path="auth/:isRegistration" element={<Authorization auth={state.auth} toggleForm={toggleForm}/>}/>
                <Route path="main" element={<Main state={state} setActiveTab={setActiveTab} buyCard={buyCard}/>}/>
            </Routes>
        );
    }
}

export default AppRoutes;