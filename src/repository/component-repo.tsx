import InputField from '../assets/svg/components/input-field.svg';
import Number from '../assets/svg/components/number.svg';
import ImageIc from '../assets/svg/components/image.svg';
import VideoIc from '../assets/svg/components/video.svg';
import CheckboxesIc from '../assets/svg/components/checkboxes.svg';
import RadioButtonIc from '../assets/svg/components/radio-button.svg';
import DropdownMenu from '../assets/svg/components/dropdown-menu.svg';
import CalendarDate from '../assets/svg/components/calendar-date.svg';
import CalendarTime from '../assets/svg/components/calendar-date-time.svg';
import CalendarBirth from '../assets/svg/components/calendar-birth.svg';
import CalendarMonthly from '../assets/svg/components/calendar-monthly.svg';
import Time from '../assets/svg/components/time.svg';
import Table from '../assets/svg/components/table.svg';
import Blank from '../assets/svg/components/blank.svg';
import TitleIc from '../assets/svg/components/title.svg';
import Caption from '../assets/svg/components/caption.svg';
import Hints from '../assets/svg/components/hints.svg';
import Geolocation from '../assets/svg/components/geolocation.svg';
import ColorPicker from '../assets/svg/components/color-picker.svg';
import AttachmentsIc from '../assets/svg/components/attachment.svg';
import Signature from '../assets/svg/components/signature.svg';

export interface ComponentDetail {
    id: string,
    label: string,
    categoryId: string,
    Icon: any,
}
export interface ComponentsCategoryData {
    id: string,
    title: string,
    components: ComponentDetail[],
}

const componentAllData: ComponentDetail[] = [
    { id: 'short-text', label: 'Short Text', Icon: {InputField}, categoryId: 'basic' },
    { id: 'long-text', label: 'Long Tex', Icon: {InputField}, categoryId: 'basic' },
    { id: 'number', label: 'Number', Icon: {Number}, categoryId: 'basic' },
    { id: 'telephone-number', label: 'Telephone Number', Icon: {Number}, categoryId: 'basic' },
    { id: 'image-upload', label: 'Image Upload', Icon: {ImageIc}, categoryId: 'basic' },
    { id: 'video-upload', label: 'Video Upload', Icon: {VideoIc}, categoryId: 'basic' },
    { id: 'checkboxes', label: 'Checkboxes', Icon: {CheckboxesIc}, categoryId: 'basic' },
    { id: 'radio-button', label: 'Radio Buttons', Icon: {RadioButtonIc}, categoryId: 'basic' },
    { id: 'drop-down', label: 'Drop-down Menus', Icon: {DropdownMenu}, categoryId: 'basic' },
    { id: 'today', label: 'Today\'s Date', Icon: {CalendarDate}, categoryId: 'date-time' },
    { id: 'date-calendar', label: 'Date Calendar', Icon: {CalendarDate}, categoryId: 'date-time' },
    { id: 'date-time-calendar', label: 'Date and Time Calendar', Icon: {CalendarTime}, categoryId: 'date-time' },
    { id: 'birth', label: 'Date of Birth', Icon: {CalendarBirth}, categoryId: 'date-time' },
    { id: 'monthly-calendar', label: 'Monthly Calendar', Icon: {CalendarMonthly}, categoryId: 'date-time' },
    { id: 'time', label: 'Time', Icon: {Time}, categoryId: 'date-time' },
    { id: 'table', label: 'Table Layout', Icon: {Table}, categoryId: 'miscellaneous' },
    { id: 'blank', label: 'Blank Space', Icon: {Blank}, categoryId: 'miscellaneous' },
    { id: 'title', label: 'Title', Icon: {TitleIc}, categoryId: 'miscellaneous' },
    { id: 'caption', label: 'Caption', Icon: {Caption}, categoryId: 'miscellaneous' },
    { id: 'hints', label: 'Hints', Icon: {Hints}, categoryId: 'miscellaneous' },
    { id: 'geolocation', label: 'Geolocation', Icon: {Geolocation}, categoryId: 'miscellaneous' },
    { id: 'color-picker', label: 'Color Picker', Icon: {ColorPicker}, categoryId: 'miscellaneous' },
    { id: 'attachments', label: 'Attachments', Icon: {AttachmentsIc}, categoryId: 'miscellaneous' },
    { id: 'signature', label: 'Signature', Icon: {Signature}, categoryId: 'miscellaneous' },
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
        console.log(1349, componentCategoryData[2])
        return componentCategoryData;
    }

    componentById(id: string): ComponentDetail | null {
        return componentAllData.find(item => item.id === id) ?? null;
    }

    componentsByCategory(id: string): ComponentDetail[] {
        return componentAllData.filter(item => item.categoryId === id);
    }
}