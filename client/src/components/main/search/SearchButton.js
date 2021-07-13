import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchButton = () => {
    return (
        <button type="submit" className="button search-button">
            <FontAwesomeIcon icon={faSearch} />
            <span>חיפוש</span>
        </button>
    );
};

export default SearchButton;
