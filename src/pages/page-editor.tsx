import React from 'react';
import { HeaderContainer, MenuBar, TitleBar, FormInformation, ComponentsContainer } from '../components'

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
                            <div className='thumbnail'></div>
                            <div className='workspace'></div>
                        </div>
                        <div className='side-pane'>
                            <ComponentsContainer />
                            <FormInformation />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}