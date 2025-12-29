import React from 'react';
import {Input as AntdInput} from "antd";

function Input(props) {
    return (
        <AntdInput
            {...props}
            size={props.size ?? 'large'}
        />
    );
}

export default Input;