export interface ComponentDetail {
    label: string,
    icon: any,
}
export interface ComponentsCategoryData {
    title: string,
    components: ComponentDetail[],
}

const componentCategoryData: ComponentsCategoryData[] = [
    {
        title: 'Basic Components',
        components: [
            { label: 'Short Text', icon: '' },
            { label: 'Long Tex', icon: '' },
            { label: 'Number', icon: '' },
            { label: 'Telephone Number', icon: '' },
            { label: 'Image Upload', icon: '' },
            { label: 'Video Upload', icon: '' },
            { label: 'Checkboxes', icon: '' },
            { label: 'Radio Buttons', icon: '' },
            { label: 'Drop-down Menus', icon: '' },
        ]
    },
    {
        title: 'Date and Time Components',
        components: [
            { label: 'Today\'s Date', icon: '' },
            { label: 'Date Calendar', icon: '' },
            { label: 'Date and Time Calendar', icon: '' },
            { label: 'Date of Birth', icon: '' },
            { label: 'Monthly Calendar', icon: '' },
            { label: 'Time', icon: '' },
        ]
    },
    {
        title: 'Miscellaneous Components',
        components: [
            { label: 'Table Layout', icon: '' },
            { label: 'Blank Space', icon: '' },
            { label: 'Title', icon: '' },
            { label: 'Caption', icon: '' },
            { label: 'Hints', icon: '' },
            { label: 'Geolocation', icon: '' },
            { label: 'Color Picker', icon: '' },
            { label: 'Attachments', icon: '' },
            { label: 'Signature', icon: '' },
        ]
    },
];

export class ComponentRepository {
    ComponentRepository() {}

    get allcomponents(): ComponentsCategoryData[] {
        return componentCategoryData;
    }
}