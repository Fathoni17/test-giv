import React from 'react';
import logo from '../assets/svg/logo.svg';
import '../style/logo.css';

export const Logo = () => {
    return (
        <img src={logo} className="logo" alt="logo" />
    )
}