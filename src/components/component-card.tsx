import React from "react";
import { useState } from "react";
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ComponentRepository } from "../repository/component-repo";
import { SidePaneCard, SearchBar, ComponentCategory } from ".";
import drg_ic from '../assets/svg/icons/drag-outlined.svg';
import { ItemType } from "../variables";

export interface ComponentItemParams {
    id: string,
    Icon: any,
    label: string,
}
export const ComponentItem = ({id, Icon, label}: ComponentItemParams) => {
    const [{ opacity }, drag] = useDrag(() => ({
        type: ItemType.COMPONENT_CARD,
        item: { id, Icon, label },
        collect: (monitor: DragSourceMonitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }))

    const key =Object.keys(Icon)[0];
    console.log(1349, Icon[key]);

    return (
        // eslint-disable-next-line jsx-a11y/aria-role
        <div ref={drag} role='ComponentItem' style={{ opacity, cursor: 'move', }} id={id.toString()} className='component-item'>
            <img className='component-icon' src={Icon[key]} alt="" />
            <p className='component-label'>{label}</p>
            <img className='drg-icon' src={drg_ic} alt="drg-ic" />
        </div>
    );
}

export const ComponentsContainer = () => {
    const [selectedId, setSelectedId] = useState(2);

    const componentRepo = new ComponentRepository();
    const componentData = componentRepo.allcomponents;

    return (
        <SidePaneCard className='component-container' title='Add Fields'>
            <div style={{height: '19px', width: '100%'}} />
            <SearchBar />
            {componentData.map( (category, idx) => {
                return <ComponentCategory title={category.title} expanded={selectedId === idx} onClickExpand={() => setSelectedId(selectedId === idx? -1: idx)}>
                    {category.components.map(cmp => {
                        return <ComponentItem id={cmp.id} Icon={cmp.Icon} label={cmp.label} />
                    })}
                </ComponentCategory>
            })}
        </SidePaneCard>
    )
}