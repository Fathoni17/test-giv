import React from "react";
import '../style/menu-bar.css';
import { UserProfilePic } from ".";
import user1pic from '../assets/png/user1.png'; 
import { useState } from "react";
import home_ic from '../assets/svg/icons/home.svg';
import papers_ic from '../assets/svg/icons/papers.svg';
import folder_ic from '../assets/svg/icons/folder.svg';
import option_ic from '../assets/svg/icons/option.svg';
import file_ic from '../assets/svg/icons/file.svg';
import report_data_ic from '../assets/svg/icons/report-data.svg';
import pie_chart_ic from '../assets/svg/icons/pie-chart.svg';
import calendar_ic from '../assets/svg/icons/calendar.svg';
import document_view_ic from '../assets/svg/icons/document-view.svg';
import book_ic from '../assets/svg/icons/book.svg';
import archive_box_ic from '../assets/svg/icons/archive-box.svg';
import round_sensor_ic from '../assets/svg/icons/round-sensors.svg';
import book_information_ic from '../assets/svg/icons/book-information.svg';
import people_outline_ic from '../assets/svg/icons/people-outline.svg';
import paper_plane_ic from '../assets/svg/icons/paper-plane.svg';

interface MenuItemParams {
    image: any,
    selected?: boolean,
    onClick?: Function,
}
export const MenuItem = ({image, selected, onClick}: MenuItemParams) => {
    return (
        <div className={'menu-item-bg'.concat(selected ? ' selected': '')}
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            <div className='menu-item-shade-bg'>
                <div className='menu-item-shade' />
            </div>
            <img src={image} alt='menu-item-icon' />
        </div>
    )
}

export const MenuBar = () => {
    const [selectedId, setSelected] = useState(1);
    const menuList = [home_ic, papers_ic, folder_ic, option_ic, file_ic, report_data_ic, pie_chart_ic, calendar_ic, document_view_ic, book_ic, archive_box_ic, round_sensor_ic, book_information_ic, people_outline_ic, paper_plane_ic];
    return (
        <div className='menu-container'>
            <div className='menu-user-pic-wrapper'>
                <UserProfilePic image={user1pic} size={42} highlight={false} />
            </div>
            {menuList.map((menu, id) => <MenuItem image={menu} selected={id === selectedId} onClick={() => setSelected(id)} />)}
        </div>
    );
}