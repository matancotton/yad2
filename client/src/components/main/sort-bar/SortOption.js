import React from "react";

const SortOption = ({ value, name }) => {
    return (
        <div className="sort-option">
            <input type="radio" value={value} />
            <span>{name}</span>
        </div>
    );
};

export default SortOption;
