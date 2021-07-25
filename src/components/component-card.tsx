import React from "react";
import { useState } from "react";
import { ComponentRepository } from "../repository/component-repo";
import { SidePaneCard, SearchBar, ComponentCategory } from ".";
import drag_ic from '../assets/svg/icons/drag-outlined.svg';

export interface ComponentItemParams {
    id: number,
    icon: any,
    label: string,
}
export const ComponentItem = ({id, icon, label}: ComponentItemParams) => {
    return <div id={id.toString()} className='component-item'>
        <img className='component-icon' src={icon} alt="" />
        <p className='component-label'>{label}</p>
        <img className='drag-icon' src={drag_ic} alt="drag-ic" />
    </div>
}

export const ComponentsContainer = () => {
    const [selectedId, setSelectedId] = useState(0);

    const componentRepo = new ComponentRepository();
    const componentData = componentRepo.allcomponents;

    return (
        <SidePaneCard className='component-container' title='Add Fields'>
            <div style={{height: '19px', width: '100%'}} />
            <SearchBar />
            {componentData.map( (category, idx) => {
                return <ComponentCategory title={category.title} expanded={selectedId === idx} onClickExpand={() => setSelectedId(selectedId === idx? -1: idx)}>
                    {category.components.map((cmp, id) => {
                        return <ComponentItem id={id} icon={cmp.icon} label={cmp.label} />
                    })}
                </ComponentCategory>
            })}
        </SidePaneCard>
    )
}