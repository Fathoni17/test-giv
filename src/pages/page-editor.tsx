import React from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import plus from '../assets/svg/icons/plus-ic.svg';
import {
    HeaderContainer,
    MenuBar,
    TitleBar,
    FormInformation,
    ComponentsContainer,
    Workspace,
    ThumbnailPage,
} from '../components'

export const PageEditor = () => {
    const workSpace = <Workspace />

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
                            <div className='thumbnail'>
                                <ThumbnailPage>{workSpace}</ThumbnailPage>
                                <div className="button-add-page">
                                    <img src={plus} alt="" />
                                    <p>Add More Pages</p>
                                </div>
                            </div>
                            <div className='workspace'>
                                {workSpace}
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