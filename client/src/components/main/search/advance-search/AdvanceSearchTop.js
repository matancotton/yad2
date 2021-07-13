import React from "react";
import { appartmentValues } from "../../../../values/search-bar/advance-search-values";
import CheckBox from "../../../general/CheckBox";

const AdvanceSearchTop = () => {
    return (
        <div className="advance-search__top">
            <div className="title">מאפייני דירה</div>
            <div className="appartment-details">
                {appartmentValues.map((value) => (
                    <span className="item">
                        <CheckBox isChecked={false} />
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AdvanceSearchTop;
