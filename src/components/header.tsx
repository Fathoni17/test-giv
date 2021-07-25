import React from "react";
import '../style/header.css';
import { Logo } from "./logo";
import {ReactComponent as IconDetail} from '../assets/svg/icons/icon-details.svg';
import {ReactComponent as RefreshInd} from '../assets/svg/icons/refresh-line.svg';
import logout from '../assets/svg/icons/shutdown.svg';
import setting from '../assets/svg/icons/settings.svg';
import issue from '../assets/svg/icons/ticket.svg';
import message from '../assets/svg/icons/chatbubbles.svg';
import balance from '../assets/svg/icons/coins.svg';
import profile from '../assets/svg/icons/user.svg';

interface HeaderMenuItemParams {
    id: String,
    icon: any,
    label: String,
}

export const HeaderMenuItem = ({id, icon, label} : HeaderMenuItemParams) => {
    return (
        <div className='menu-items'>
            <img src={icon} alt={`icon-${id}`} />
            <p>{label}</p>
        </div>
    )
}

export const HeaderContainer = () => {
    return (
        <div className='header-container'>
            <Logo />
            <div className='header-icons-list'>
                <IconDetail />
                <RefreshInd />
            </div>
            <div className='header-spacer' />
            <div className='header-menu-list'>
                <HeaderMenuItem id='profile' icon={profile} label="My Profile" />
                <HeaderMenuItem id='balance' icon={balance} label="My Balance" />
                <HeaderMenuItem id='messages' icon={message} label="Messages" />
                <HeaderMenuItem id='issue' icon={issue} label="Issue" />
                <HeaderMenuItem id='settings' icon={setting} label="Settings" />
                <HeaderMenuItem id='logout' icon={logout} label="Logout" />
            </div>
        </div>
    );
}