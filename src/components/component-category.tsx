import React from "react";
import expand_ic from '../assets/svg/icons/bottom-chevron.svg';
import '../style/component-category.css';

interface ComponentCategoryParams {
    title: string,
    expanded: boolean,
    onClickExpand?: Function,
    children?: any,
}
export const ComponentCategory = ({title, expanded, onClickExpand, children}: ComponentCategoryParams) => {
    return (
        <div className={'component-category-wrapper'.concat(expanded ? ' selected': '')} >
            <div className='header'>
                <p className='title'>{title}</p>
                <img src={expand_ic} alt="expand-ic" onClick={() => {if (onClickExpand) onClickExpand()}} />
            </div>
            <div className='component-list'>{children}</div>
        </div>
    );
}