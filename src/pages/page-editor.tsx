import React from 'react';
import { HeaderContainer, MenuBar } from '../components'

export const PageEditor = () => {
    return (
        <>
            <HeaderContainer />
            <div className='page-wrapper'>
                <MenuBar />
                <div className='page-container'>
                    {/* <NavIndicator /> */}
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