import React from "react";
import form_ic from '../assets/svg/icons/form-info-ic.svg';
import '../style/side-pane-card.css';

interface SidePaneCardParams {
    title: string,
    children?: any,
    className?: string,
}

export const SidePaneCard = ({children, title, className}: SidePaneCardParams) => {
    return (
        <div className={'side-pane-card-container '.concat(className ?? '')}>
        <div className='title'>
            <img src={form_ic} alt="side-pane-card-icon" />
            <p>{title}</p>
        </div>
        {children}
    </div>
    );
}