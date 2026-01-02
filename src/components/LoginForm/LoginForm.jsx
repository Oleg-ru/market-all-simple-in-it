import React, {Component} from 'react';
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import {Form} from "antd";
import "./LoginForm.css"
import signIn from "../../assets/icons/signIn.png"
import {NavLink} from "react-router";

class LoginForm extends Component {

    onFinish = (values) => {
        console.log(values)
    }

    onFinishFailed = (error) => {
        console.log(error)
    }

    render() {
        return (
            <div className="login-form">
                <div>
                    <img className="login-form-icon" src={signIn} alt="sign in icon"/>
                </div>
                <Form
                    name="signIn"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%"
                    }}
                    layout="vertical"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input type="password"/>
                    </Form.Item>

                    <Form.Item label={null} style={{margin: "auto"}}>
                        <NavLink to={'/main'}>
                            <Button htmlType="submit">
                                Sing in
                            </Button>
                        </NavLink>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default LoginForm;