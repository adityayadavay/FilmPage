import React, { useState, ChangeEvent } from "react";
import './searchText.css'
import SearchIcon from "../../utils/searchIcon";

type SearchTextProps = {
    sendSearchText: (searchText: string) => void
}
const SearchText = (props: SearchTextProps) => {
    const [searchText, setSearchText] = useState('');
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.sendSearchText(event.target.value);
        setSearchText(event.target.value);
    };
    return (
        <div className="searchText">
            <input type="text" placeholder="Search.." name="search" value={searchText} onChange={handleSearchChange} />
            {
                searchText ? null : <SearchIcon />
            }
        </div>
    );
}
export default SearchText;