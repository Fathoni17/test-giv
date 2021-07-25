import React from "react";
import form_ic from '../assets/svg/icons/form-info-ic.svg';
import '../style/side-pane-card.css';

interface SidePaneCardParams {
    children?: any
    className?: string
}

export const SidePaneCard = ({children, className}: SidePaneCardParams) => {
    return (
        <div className={'side-pane-card-container '.concat(className ?? '')}>
        <div className='title'>
            <img src={form_ic} alt="side-pane-card-icon" />
            <p>Form Assignee</p>
        </div>
        {children}
    </div>
    );
}