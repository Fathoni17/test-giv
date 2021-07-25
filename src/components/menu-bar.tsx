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
}
export const MenuItem = ({image, selected}: MenuItemParams) => {
    const [ isSelected, setSelected] = useState(selected ?? false);

    return (
        <div className={'menu-item-bg'.concat(isSelected ? ' selected': '')} onClick={() => setSelected(!isSelected)}>
            <div className='menu-item-shade-bg'>
                <div className='menu-item-shade' />
            </div>
            <img src={image} alt='menu-item-icon' />
        </div>
    )
}

export const MenuBar = () => {
    return (
        <div className='menu-container'>
            <div className='menu-user-pic-wrapper'>
                <UserProfilePic image={user1pic} size={42} highlight={false} />
            </div>
            <MenuItem image={home_ic} />
            <MenuItem image={papers_ic} selected={true} />
            <MenuItem image={folder_ic} />
            <MenuItem image={option_ic} />
            <MenuItem image={file_ic} />
            <MenuItem image={report_data_ic} />
            <MenuItem image={pie_chart_ic} />
            <MenuItem image={calendar_ic} />
            <MenuItem image={document_view_ic} />
            <MenuItem image={book_ic} />
            <MenuItem image={archive_box_ic} />
            <MenuItem image={round_sensor_ic} />
            <MenuItem image={book_information_ic} />
            <MenuItem image={people_outline_ic} />
            <MenuItem image={paper_plane_ic} />
        </div>
    );
}