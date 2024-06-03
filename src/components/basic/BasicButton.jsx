import React from 'react';
import { Button } from 'antd';
import './BasicButton.css'


function BasicButton({ type , text , isDisabled , isDanger, size, onClick, className}){

    return(
        <Button className={className ||'button'}
        type={type}
        disabled={isDisabled}
        danger={isDanger}
        size={size}
        onClick={onClick}
        >{text}
        </Button>
    )}

export default BasicButton;