import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBarMobile = () => {
    return (
        <div className="search-bar-mobile__container">
            <div className="search-bar-mobile">
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div>נדלן למכירה</div>
                <div>חיפוש</div>
            </div>
        </div>
    );
};

export default SearchBarMobile;
