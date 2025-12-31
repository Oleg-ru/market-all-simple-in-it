import React, {Component} from 'react';
import "./RegistrationForm.css"
import signUp from "../../assets/icons/signUpIcon.png"
import {Form} from "antd";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

class RegistrationForm extends Component {

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
                    <img className="login-form-icon signUp" src={signUp} alt="sign in icon"/>
                </div>
                <Form
                    name="signUp"
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

                    <Form.Item
                        label="Confirm password"
                        name="confirmPassword"
                        rules={[{required: true, message: 'Please confirm password!'}]}
                    >
                        <Input type="password"/>
                    </Form.Item>

                    <Form.Item
                        label="Mail"
                        name="mail"
                        rules={[{required: true, message: 'Please input your mail!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item label={null} style={{margin: "auto"}}>
                        <Button htmlType="submit">
                            Sing Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default RegistrationForm;