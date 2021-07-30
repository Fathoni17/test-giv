import React from "react";
import header_bg from '../assets/svg/paper-header.svg';
import toolbar from '../assets/svg/toolbar/tool-bar.svg';
import image_ic from '../assets/svg/components/image.svg';
import more_ic from '../assets/svg/icons/more-opt.svg';
import plus_ic from '../assets/svg/icons/plus-grey.svg';
import input_field_ic from '../assets/svg/components/input-field.svg';
import dropdown_ic from '../assets/svg/components/dropdown-menu.svg';
import { ItemType, DragItem } from '../variables';
import '../style/workspace.css';
import { useDrop, DropTargetMonitor, useDrag, DragSourceMonitor } from "react-dnd";
import { useState } from "react";
import { ComponentDetail } from "../repository/component-repo";

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

export const ComponentFieldView = ({ id, order }: {id: string, order: number}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType.COMPONENT_VIEW,
        item: {  id, order },
        collect: (monitor: DragSourceMonitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }))

    const cursor = isDragging ? 'grabbing' : 'grab';
    switch (id) {
        case 'table':            
        return (
                <div ref={drag} style={{ cursor }} className="component-wrapper">
                    <div className="component-table">
                        <table>
                            <tr>
                                <th>Table Title</th>
                                <th>Table Title</th> 
                            </tr>
                            <tr>
                                <td>Table Content</td>
                                <td>Table Content</td>
                            </tr>
                        </table>
                    </div>
                </div>
            )
        case 'short-text':
            return (
                <div ref={drag} style={{ cursor }} className="component-wrapper">
                    <div className="title">Title :</div>
                    <ComponentField className='s-component' icon={input_field_ic} text='Short Text' />
                </div>
            );
        case 'drop-down':
            return (
                <div ref={drag} style={{ cursor }} className="component-wrapper">
                    <div className="title">Title :</div>
                    <ComponentField className='s-component' icon={dropdown_ic} text='Drop-down Menus' />
                </div>
            );
        default:
            break;
        }
        return <></>
    }

export const PlaceHolder = ({ display, gridColumn }: { display: string, gridColumn?: string }) => {
    return (
        <div className="placeholder" style={{ display, gridColumn }}>
            <p className="hint">Drop here to add section</p>
        </div>
    );
}
interface DropTragerProps {
    id: string,
    componentList: ComponentDetail[], 
    onItemDrop: (id: string, componentDetail: ComponentDetail) => void,
}
export const DropComponentTarget = ({id, componentList, onItemDrop}: DropTragerProps) => {
    const hasTable = componentList.findIndex(item => item.id === 'table') !== -1;
    const [{ isOver, moveOnly, canDrop }, drop] = useDrop(
        () => ({
            accept: [ItemType.COMPONENT_CARD, ItemType.COMPONENT_VIEW],
            canDrop(_item: DragItem, monitor) {
                const item: ComponentDetail = monitor.getItem();
                if (item.id === 'table' && componentList.length > 0)
                    return false;
                if (hasTable)
                    return false;

                return true;
            },
            drop(_item: DragItem, monitor) {
                const item: ComponentDetail = monitor.getItem();
                console.log(1349, item)
                if (monitor.getItemType() === ItemType.COMPONENT_CARD) {
                    if ((item.id === 'short-text' ||
                         item.id === 'drop-down') 
                        && componentList.length < 3) {
                        onItemDrop(id, monitor.getItem());
                    }
                }
                return undefined
            },
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver(),
                moveOnly: monitor.getItemType() === ItemType.COMPONENT_VIEW,
                canDrop: monitor.canDrop(),
                isTable: monitor.getItem<ComponentDetail>()?.id ?? false,
            }),
        })
    )
    
    const display = isOver ? 'flex' : 'none';
    return (
        <div ref={drop} id={id} className={`component-container column-${(hasTable ? 1 : componentList.length) + (isOver && !moveOnly && componentList.length < 3? 1 : 0)}`} >
            {componentList.map((item, idx) => {
                return (
                    <ComponentFieldView order={idx} id={item.id} />
                )
            })}
            {isOver && !moveOnly && canDrop && componentList.length < 3?
                <PlaceHolder display={display} />
                : <></>
            }
        </div>
    );
}

interface pagesComponentProps {
    id: string,
    components: ComponentDetail[]
}

export const Workspace = () => {
    const [pagesComponent, setPageComponent] = useState<pagesComponentProps[]>([]);
    
    const newComponent = (component: ComponentDetail) => {
        const temp: pagesComponentProps = { id: `component-${pagesComponent.length}`, components: [component]}
        const retList = pagesComponent;
        retList.push(temp);
        setPageComponent(retList);
    }

    const onItemDrop = (id: string, componentDetail: ComponentDetail) => {
        const idx = pagesComponent.findIndex(item => item.id === id)
        const tempComponents = pagesComponent[idx];
        const tempRet = pagesComponent;

        tempComponents.components.push(componentDetail);
        tempRet[idx] = tempComponents;
        setPageComponent(tempRet);
    }

    const [{ isOver, moveOnly }, drop] = useDrop(
        () => ({
            accept: [ItemType.COMPONENT_CARD, ItemType.COMPONENT_VIEW],
            drop(_item: DragItem, monitor) {
                const item: ComponentDetail = monitor.getItem();
                if (monitor.getItemType() === ItemType.COMPONENT_CARD) {
                    if ((item.id === 'table' || 
                         item.id === 'short-text' ||
                         item.id === 'drop-down') 
                        && pagesComponent.length < 5) {
                        newComponent(monitor.getItem());
                    }
                }
                return undefined
            },
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver(),
                moveOnly: monitor.getItemType() === ItemType.COMPONENT_VIEW,
                canDrop: monitor.canDrop(),
            }),
        })
    )

    return (
        <div className='workspace-wrapper'>
            <img className='workspace-header-bg' src={header_bg} alt="header-bg" />
            <div className='workspace-container'>
                <img className='toolbar' src={toolbar} alt='toolbar-img' />
                <div className="drop-target">

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
                    {pagesComponent.map(item => {
                        return (
                            <DropComponentTarget id={item.id} componentList={item.components} onItemDrop={onItemDrop} />
                            )
                        })
                    }
                    <div ref={drop} className="component-container" style={{height: '100%'}}>
                        {isOver && !moveOnly ?
                            <PlaceHolder display={isOver ? 'flex' : 'none'} />:<></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}