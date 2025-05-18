import React, { ChangeEvent, useState } from "react";
import './sortBy.css';
import Arrow from "../../utils/arrowIcon";

type SortBy = {
    sendSortToParent: (sortBy: string) => void;
}
const SortBy = (props: SortBy) => {
    const [sortBy, setSortBy] = useState('year');
    const [focused, setFocused] = useState(false);

    const onChangeSortBy = (event: ChangeEvent<HTMLSelectElement>) => {
        setFocused(false);
        props.sendSortToParent(event.target.value);
        setSortBy(event.target.value);

    }
    return (
        <div className="sortBy">
            <label htmlFor="sortBy">Sort By:</label>
            <select
                defaultValue={sortBy}
                id='sortBy'
                onChange={onChangeSortBy}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            >
                <option value={'episode'}>Episode</option>
                <option value={'year'}>Year</option>
            </select>
            <span className={`arrowicon ${focused ? "rotated" : ""}`}><Arrow /></span>
        </div>
    );
}
export default SortBy;