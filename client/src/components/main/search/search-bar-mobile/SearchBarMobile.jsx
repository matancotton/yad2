import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import HeaderMobileBar from "../../../header/header-mobile/HeaderMobileBar";
import SearchBar from "../SearchBar";

const SearchBarMobile = () => {
    const [isSearchBarOpend, setIsSearchBarOpend] = useState(false);

    return (
        <div className="search-bar-mobile__container">
            <div
                className="search-bar-mobile"
                onClick={() => {
                    setIsSearchBarOpend(true);
                }}
            >
                <div className="search-text">
                    <FontAwesomeIcon icon={faSearch} />
                    <div>נדלן למכירה</div>
                </div>

                <div className="search">חיפוש</div>
            </div>
            {isSearchBarOpend && (
                <div className="search-bar-mobile__extended">
                    <HeaderMobileBar />
                    <SearchBar />
                    <div
                        className="go-back"
                        onClick={() => {
                            setIsSearchBarOpend(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBarMobile;
