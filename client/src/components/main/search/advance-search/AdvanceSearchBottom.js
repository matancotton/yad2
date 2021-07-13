import React from "react";
import CheckBox from "../../../general/CheckBox";

export const AdvanceSearchBottom = () => {
    return (
        <div className="advance-search__bottom">
            <div className="free-text">
                <div className="title">חיפוש חופשי</div>
                <input type="text" className="input" />
            </div>
            <div className="item">
                <CheckBox isChecked={false} />
                <span>הצגת מושבים וקיבוצים בלבד</span>
            </div>
        </div>
    );
};

export default AdvanceSearchBottom;
