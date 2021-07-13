import React from "react";
import AdvanceSearchMiddle from "./AdvanceSearchMiddle";
import AdvanceSearchTop from "./AdvanceSearchTop";
import AdvanceSearchBottom from "./AdvanceSearchBottom";

const AdvanceSearchContainer = () => {
    return (
        <div className="advance-search__container">
            <AdvanceSearchTop />
            <AdvanceSearchMiddle />
            <AdvanceSearchBottom />
            <div className="advance-search__submit">
                <button className="button search-button">חיפוש</button>
            </div>
        </div>
    );
};

export default AdvanceSearchContainer;
