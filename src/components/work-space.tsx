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
import '../style/workspace.css';

export const Workspace = () => {
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
                        <div className="m-component component-field title-item">
                            <b>Premier Transportation</b>
                            <p>Charter Log</p>
                        </div>
                        <div className="m-component component-field empty-item"></div>
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
                            <div className="s-component component-field">
                                <img src={input_field_ic} alt="" />
                                <div className="label">Employee Name; Employee List</div>
                                <img src={more_ic} alt="" />
                            </div>
                        </div>
                        <div className="component-wrapper">
                            <div className="title">Coach Number :</div>
                            <div className="s-component component-field">
                                <img src={dropdown_ic} alt="" />
                                <div className="label">Employee ID; Employee List</div>
                                <img src={more_ic} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="component-container">
                        <img src={component1} alt="copy-component component-field" />
                        <img src={component2} alt="copy-component component-field" />
                        <img src={component3} alt="copy-component component-field" />
                    </div>
                </div>
            </div>
        </div>
    )
}