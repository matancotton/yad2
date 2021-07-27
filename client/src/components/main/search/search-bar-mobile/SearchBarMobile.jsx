import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBarMobile = () => {
    return (
        <div className="search-bar-mobile__container">
            <div className="search-bar-mobile">
                <div className="search-text">
                    <FontAwesomeIcon icon={faSearch} />
                    <div>נדלן למכירה</div>
                </div>

                <div className="search">חיפוש</div>
            </div>
        </div>
    );
};

export default SearchBarMobile;
