import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBarTitle = () => {
    return (
        <div className="search-bar__title">
            <div className="large-text">
                איזה נכס <span>למכירה</span> תרצו לחפש?
            </div>
            <div>
                <button>
                    <FontAwesomeIcon icon={faBell} />
                    קבלו התראות במייל על החיפוש
                </button>
            </div>
        </div>
    );
};

export default SearchBarTitle;
