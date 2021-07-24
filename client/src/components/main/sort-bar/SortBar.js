import React from "react";
import SortButtons from "./SortButtons";
import SortSelect from "./SortSelect";

const SortBar = () => {
    return (
        <div className="sort-bar">
            <SortSelect />
            <SortButtons />
        </div>
    );
};

export default SortBar;
