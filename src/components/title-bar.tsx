import React from "react";
import '../style/title-bar.css';
import '../style/button.css';
import cloud_upload from '../assets/svg/icons/cloud-upload-outline.svg';
import backButton from '../assets/svg/icons/back-button.svg';
import pencil from '../assets/svg/icons/pencil.svg';
import folder from '../assets/svg/icons/folder-opened.svg';

export const TitleBar = () => {
    return (
        <div className='title-bar-container'>
            <div className='title-bar-nav'>
                <img src={backButton} alt='back-button' className='back-button'></img>
                <div className='title'>Charter Log</div>
                <img src={pencil} alt='edit-ic' className='edit-icon'></img>
                <div className='location'>
                    <img src={folder} alt='folder-icon' className='location-ic' />
                    <div className='location-text'>Templates - Draft - Charter Log</div>
                </div>
            </div>
            <div className='title-bar-button'>
                <div className='saving-indicator'>
                    <img src={cloud_upload} alt="save indicator" />
                    <p>Saving..</p>
                </div>
                <button className={'button outline'} name={'save'} style={{marginInlineStart: '10px'}} >Save</button>
                <button className={'button'} name={'publish'} style={{marginInlineStart: '10px'}} >Publish</button>
            </div>
        </div>
    )
}