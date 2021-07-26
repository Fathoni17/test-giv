import React from "react";
import header_bg from '../assets/svg/paper-header.svg';
import toolbar from '../assets/svg/toolbar/tool-bar.svg';
import image_ic from '../assets/svg/components/image.svg';
import more_ic from '../assets/svg/icons/more-opt.svg';
import plus_ic from '../assets/svg/icons/plus-grey.svg';
import component1 from '../assets/svg/components/1.svg';
import component2 from '../assets/svg/components/2.svg';
import component3 from '../assets/svg/components/3.svg';
import input_field_ic from '../assets/svg/components/input-field.svg';
import dropdown_ic from '../assets/svg/components/dropdown-menu.svg';
import { ItemType, DragItem } from '../variables';
import '../style/workspace.css';
import { useDrop, DropTargetMonitor } from "react-dnd";

interface ComponentFieldParams {
    icon: any,
    text: string,
    className?: string,
    onClick?: Function,
}
export const ComponentField = ({icon, text, className, onClick}: ComponentFieldParams) => {
    return (
        <div className={"component-field ".concat(className ?? '')}>
            <img src={icon} alt="" />
            <div className="label">{text}</div>
            <img src={more_ic} alt="" onClick={() => {if (onClick) onClick();}} />
        </div>
    )
}

interface DropTragerProps {
    children: any,
}
export const DropComponentTarget = ({children}: DropTragerProps) => {
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemType.COMPONENT_CARD,
            drop(_item: DragItem, monitor) {
                console.log(1349, monitor.getItem())
                return undefined
            },
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        })
    )
    
    const opacity = isOver ? 1 : 0;
    return (
        <div ref={drop} className="drop-target">
            {children}
            {isOver ?
                <div className="placeholder" style={{ opacity }}>
                    <p className="hint">Drop here to add section</p>
                </div> : <></>
            }
        </div>
    );
}

export const Workspace = () => {
    return (
        <div className='workspace-wrapper'>
            <img className='workspace-header-bg' src={header_bg} alt="header-bg" />
            <div className='workspace-container'>
                <img className='toolbar' src={toolbar} alt='toolbar-img' />
                <DropComponentTarget>
                    <div className="header-item">
                        <div className="m-component component-field image-item">
                            <img src={image_ic} alt="imagecmp-ic" />
                            <p className="label">Image Upload</p>
                            <img src={more_ic} alt="more-ic" />
                        </div>
                        <div className="m-component title-item">
                            <b>Premier Transportation</b>
                            <p>Charter Log</p>
                        </div>
                        <div className="m-component empty-item"></div>
                    </div>
                    <div className="spacer">
                        <div className="line"></div>
                        <div className="plus-btn">
                            <img src={plus_ic} alt="plus-ic" />
                        </div>
                    </div>
                    <div className="component-container">
                        <div className="component-wrapper">
                            <div className="title">Driver Name :</div>
                            <ComponentField className='s-component' icon={input_field_ic} text='Employee Name; Employee List' />
                        </div>
                        <div className="component-wrapper">
                            <div className="title">Coach Number :</div>
                            <ComponentField className='s-component' icon={dropdown_ic} text='Employee ID; Employee List' />
                        </div>
                    </div>
                    <div className="component-container">
                        <img src={component1} alt="copy-component component-field" />
                        <img src={component2} alt="copy-component component-field" />
                        <img src={component3} alt="copy-component component-field" />
                    </div>
                </DropComponentTarget>
            </div>
        </div>
    )
}