export interface ComponentDetail {
    id: string,
    label: string,
    categoryId: string,
    icon: any,
}
export interface ComponentsCategoryData {
    id: string,
    title: string,
    components: ComponentDetail[],
}

const componentAllData: ComponentDetail[] = [
    { id: 'short-text', label: 'Short Text', icon: '', categoryId: 'basic' },
    { id: 'long-text', label: 'Long Tex', icon: '', categoryId: 'basic' },
    { id: 'number', label: 'Number', icon: '', categoryId: 'basic' },
    { id: 'telephone-number', label: 'Telephone Number', icon: '', categoryId: 'basic' },
    { id: 'image-upload', label: 'Image Upload', icon: '', categoryId: 'basic' },
    { id: 'video-upload', label: 'Video Upload', icon: '', categoryId: 'basic' },
    { id: 'checkboxes', label: 'Checkboxes', icon: '', categoryId: 'basic' },
    { id: 'radio-button', label: 'Radio Buttons', icon: '', categoryId: 'basic' },
    { id: 'drop-down', label: 'Drop-down Menus', icon: '', categoryId: 'basic' },
    { id: 'today', label: 'Today\'s Date', icon: '', categoryId: 'date-time' },
    { id: 'date-calendar', label: 'Date Calendar', icon: '', categoryId: 'date-time' },
    { id: 'date-time-calendar', label: 'Date and Time Calendar', icon: '', categoryId: 'date-time' },
    { id: 'birth', label: 'Date of Birth', icon: '', categoryId: 'date-time' },
    { id: 'monthly-calendar', label: 'Monthly Calendar', icon: '', categoryId: 'date-time' },
    { id: 'time', label: 'Time', icon: '', categoryId: 'date-time' },
    { id: 'table', label: 'Table Layout', icon: '', categoryId: 'miscellaneous' },
    { id: 'blank', label: 'Blank Space', icon: '', categoryId: 'miscellaneous' },
    { id: 'title', label: 'Title', icon: '', categoryId: 'miscellaneous' },
    { id: 'caption', label: 'Caption', icon: '', categoryId: 'miscellaneous' },
    { id: 'hints', label: 'Hints', icon: '', categoryId: 'miscellaneous' },
    { id: 'geolocation', label: 'Geolocation', icon: '', categoryId: 'miscellaneous' },
    { id: 'color-picker', label: 'Color Picker', icon: '', categoryId: 'miscellaneous' },
    { id: 'attachments', label: 'Attachments', icon: '', categoryId: 'miscellaneous' },
    { id: 'signature', label: 'Signature', icon: '', categoryId: 'miscellaneous' },
]

const componentCategoryData: ComponentsCategoryData[] = [
    {
        id: 'basic',
        title: 'Basic Components',
        components: componentAllData.filter(cmp => cmp.categoryId === 'basic')
    },
    {
        id: 'date-time',
        title: 'Date and Time Components',
        components: componentAllData.filter(cmp => cmp.categoryId === 'date-time'),
    },
    {
        id: 'miscellaneous',
        title: 'Miscellaneous Components',
        components: componentAllData.filter(cmp => cmp.categoryId === 'miscellaneous'),
    },
];

export class ComponentRepository {
    ComponentRepository() {}

    get allcomponents(): ComponentsCategoryData[] {
        return componentCategoryData;
    }

    componentById(id: string): ComponentDetail | null {
        return componentAllData.find(item => item.id === id) ?? null;
    }

    componentsByCategory(id: string): ComponentDetail[] {
        return componentAllData.filter(item => item.categoryId === id);
    }
}