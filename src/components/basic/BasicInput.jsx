

import { Input } from 'antd';
import React from 'react';
import'./BasicInput.css'

function BasicInput({ onChange, isDisabled , value, size, type, maxLength , className}){

    return(
        <Input
        className={className}
        disabled={isDisabled}
        onChange={onChange}
        value={value}
        size={size}
        type={type}
        maxLength={maxLength}
        />
    )}

export default BasicInput;