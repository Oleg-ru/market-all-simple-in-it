import React from 'react';
import {Input as AntdInput} from "antd";

function Input(props) {
    return (
        <AntdInput
            {...props}
            size={props.size ?? 'large'}
            style={props.style ?? {
                border: "1px solid #ededed",
                boxShadow: "2px 2px 5px #a3a3a3"
            }}
        />
    );
}

export default Input;