import React, { createRef, useState } from "react";
import useClose from "../../../hooks/useClose";
import AdvanceSearchContainer from "./advance-search/AdvanceSearchContainer";
import SearchBarForm from "./SearchBarForm";
import SearchBarTitle from "./SearchBarTitle";

const SearchBar = () => {
    const advanceSearchRef = createRef();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    useClose(advanceSearchRef, () => setIsDropDownOpen(false));

    return (
        <div className="search-bar" ref={advanceSearchRef}>
            <SearchBarTitle />
            <SearchBarForm
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
            />
            {!!isDropDownOpen && (
                <AdvanceSearchContainer setIsDropDownOpen={setIsDropDownOpen} />
            )}
        </div>
    );
};

export default SearchBar;
