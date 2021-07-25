import React from "react";
import { UserProfilePic, SidePaneCard } from ".";
import '../style/form-info.css';
import plus_ic from '../assets/svg/icons/plus-ic.svg';
import user1 from '../assets/png/user1.png';
import user2 from '../assets/png/user2.png';
import user3 from '../assets/png/user3.png';

interface DetailItemData { label: string, value: string };
export const FormInformation = () => {
    const data: DetailItemData[] = [
        { label: 'Template Name', value: 'Leave Form'},
        { label: 'Template Author', value: 'Admin Rita'},
        { label: 'Workflow', value: 'Leave Approval'},
        { label: 'Created', value: 'February 11, 2021'},
        { label: 'Last Modified', value: 'March 18, 2021'},
    ];
    return (
        <SidePaneCard title='Form Assignee' className='form-info-container'>
            <div className='users'>
                <UserProfilePic image={user1} size={32} highlight={true} />
                <UserProfilePic image={user2} size={32} highlight={false} />
                <UserProfilePic image={user3} size={32} highlight={false} />
                <div className='add-user-assignee'>
                    <img src={plus_ic} alt="plus-icon" />
                </div>
            </div>
            <div className='details'>
                {data.map( ({label, value}) => {
                    return <div className='detail-item'>
                        <p className='label'>{label}</p>
                        <p className='value'>{value}</p>
                    </div>
                })}
            </div>
        </SidePaneCard>
    )
}