import React from "react";
import '../style/search-field.css';
import search_ic from '../assets/svg/icons/search.svg';

export const SearchBar = () => {
    return <div className='search-field'>
        <img src={search_ic} alt="search-icon" />
        <input name='search' id='search-text' type='text' placeholder='Search Components'></input>
    </div>
}