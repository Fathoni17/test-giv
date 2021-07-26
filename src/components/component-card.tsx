import React from "react";
import { useState } from "react";
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ComponentRepository } from "../repository/component-repo";
import { SidePaneCard, SearchBar, ComponentCategory } from ".";
import drg_ic from '../assets/svg/icons/drag-outlined.svg';
import { ItemType } from "../variables";

export interface ComponentItemParams {
    id: string,
    icon: any,
    label: string,
}
export const ComponentItem = ({id, icon, label}: ComponentItemParams) => {
    const [{ opacity }, drag] = useDrag(() => ({
        type: ItemType.COMPONENT_CARD,
        item: {  id, icon, label },
        collect: (monitor: DragSourceMonitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }))

    return (
        // eslint-disable-next-line jsx-a11y/aria-role
        <div ref={drag} role='ComponentItem' style={{ opacity, cursor: 'move', }} id={id.toString()} className='component-item'>
            <img className='component-icon' src={icon} alt="" />
            <p className='component-label'>{label}</p>
            <img className='drg-icon' src={drg_ic} alt="drg-ic" />
        </div>
    );
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
                        return <ComponentItem id={cmp.id} icon={cmp.icon} label={cmp.label} />
                    })}
                </ComponentCategory>
            })}
        </SidePaneCard>
    )
}