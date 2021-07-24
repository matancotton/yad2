import React from "react";

const SortButton = ({ icon, text, onButtonClick }) => {
    return (
        <button onClick={onButtonClick} className="sort-button">
            <span>{icon}</span>
            <span>{text}</span>
        </button>
    );
};

export default SortButton;
