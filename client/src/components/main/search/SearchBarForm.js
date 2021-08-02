import React from "react";
import AdvanceSearchButton from "./advance-search/AdvanceSearchButton";
import PriceInput from "./inputs/PriceInput";
import PropertyInput from "./inputs/property-input/PropertyInput";
import RoomInput from "./inputs/rooms-input/RoomInput";
import StreetInput from "./inputs/StreetInput";
import SearchButton from "./SearchButton";

const SearchBarForm = ({ isDropDownOpen, setIsDropDownOpen }) => {
    return (
        <form className="search-bar__form">
            <StreetInput />
            <PropertyInput />
            <RoomInput />
            <PriceInput />
            <div className="buttons">
                <AdvanceSearchButton
                    isDropDownOpen={isDropDownOpen}
                    setIsDropDownOpen={setIsDropDownOpen}
                />
                <SearchButton />
            </div>
        </form>
    );
};

export default SearchBarForm;
