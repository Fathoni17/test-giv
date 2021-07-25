import React from "react";
import { useState } from "react";
import { SidePaneCard, SearchBar, ComponentCategory } from ".";

interface ComponentDetail {
    label: string,
    icon: any,
}
interface ComponentsCategoryData {
    title: string,
    components: ComponentDetail[],
}

export const ComponentsContainer = () => {
    const [selectedId, setSelectedId] = useState(0);

    const componentData: ComponentsCategoryData[] = [
        {
            title: 'Date and Time Components',
            components: [
                {
                    label: '',
                    icon: '',
                }
            ]
        },
    ];
    return (
        <SidePaneCard className='component-container' title='Add Fields'>
            <SearchBar />
            {componentData.map( (category, idx) => {
                return <ComponentCategory title={category.title} expanded={selectedId === 0} onClickExpand={() => setSelectedId(0)}>
                    {category.components.map((component, id) => {
                        return <p>{component.label}</p>
                    })}
                </ComponentCategory>
            })}
        </SidePaneCard>
    )
}