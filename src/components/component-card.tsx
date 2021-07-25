import React from "react";
import { SidePaneCard, SearchBar } from ".";

export const ComponentsContainer = () => {
    return (
        <SidePaneCard className='component-container' title='Add Fields'>
            <SearchBar />
        </SidePaneCard>
    )
}