import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {
    HeaderContainer,
    MenuBar,
    TitleBar,
    FormInformation,
    ComponentsContainer,
    Workspace,
} from '../components'

export const PageEditor = () => {
    return (
        <>
        <DndProvider backend={HTML5Backend}>
            <HeaderContainer />
            <div className='page-wrapper'>
                <MenuBar />
                <div className='page-container'>
                    <TitleBar />
                    <div className='main-container'>
                        <div className="main-pane">
                            <div className='thumbnail'></div>
                            <div className='workspace'>
                                <Workspace />
                            </div>
                        </div>
                        <div className='side-pane'>
                            <ComponentsContainer />
                            <FormInformation />
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
        </>
    );
}