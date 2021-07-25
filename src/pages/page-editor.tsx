import React from 'react';
import { HeaderContainer, MenuBar, TitleBar } from '../components'

export const PageEditor = () => {
    return (
        <>
            <HeaderContainer />
            <div className='page-wrapper'>
                <MenuBar />
                <div className='page-container'>
                    <TitleBar />
                    <div className='main-container'>
                        <div className="main-pane">

                        </div>
                        <div className='side-pane'></div>
                    </div>
                </div>
            </div>
        </>
    );
}