import React from "react";
// import { toSvg } from 'html-to-image';
import '../style/thumbnail-page.css';
import thumbnail from '../assets/svg/thumb.svg';

export const ThumbnailPage = ({ children }: { children: any}) => {
    
    
    return (
        <div className="thumb-wrapper">
            <div className="page-number">1</div>
            <div className="thumb-container">
                <img src={thumbnail} alt='' />
            </div>
        </div>
    );
}