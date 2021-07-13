import React, { useState } from "react";
import AdvanceSearchContainer from "./advance-search/AdvanceSearchContainer";
import SearchBarForm from "./SearchBarForm";
import SearchBarTitle from "./SearchBarTitle";

const SearchBar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <div className="search-bar">
            <SearchBarTitle />
            <SearchBarForm
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
            />
            {!!isDropDownOpen && <AdvanceSearchContainer />}
        </div>
    );
};

export default SearchBar;
