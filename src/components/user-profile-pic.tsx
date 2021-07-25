import React from "react";
import '../style/user-profile.css';

interface UserProfilePicParams {
    image: any,
    size: number,
    highlight: boolean,
}

export const UserProfilePic = ({image, size, highlight}: UserProfilePicParams) => {
    return (
            <img
                src={image}
                style={{width: `${size ?? '34'}px`, height: `${size ?? '34'}px`}}
                className={`user-pic ${highlight ? 'highlight' : ''}`}
                alt="user-pic"
                />
    )
}