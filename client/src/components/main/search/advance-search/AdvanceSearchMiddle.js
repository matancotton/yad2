import React from "react";
import { floor } from "../../../../values/search-bar/advance-search-values";
import CheckBox from "../../../general/CheckBox";

const AdvanceSearchMiddle = () => {
    return (
        <div className="advance-search__middle">
            <div className="floor">
                <div className="title">קומה</div>
                <select className="input">
                    <option value="" disabled selected hidden>
                        מ-
                    </option>
                    {floor.map((size) => (
                        <option>{size}</option>
                    ))}
                </select>
                <select className="input">
                    <option value="" disabled selected hidden>
                        עד-
                    </option>
                    {floor.map((size) => (
                        <option>{size}</option>
                    ))}
                </select>
            </div>
            <div className="appartment-size">
                <div className="title">גודל דירה (במ"ר)</div>
                <input type="text" className="input" placeholder="מ-" />
                <input type="text" className="input" placeholder="עד-" />
            </div>
            <div className="date">
                <div className="title">תאריך כניסה</div>
                <input
                    type="date"
                    className="input"
                    placeholder="החל מ- הזינו תאריך"
                />
            </div>
            <div className="item">
                <CheckBox isChecked={false} />
                <span>כניסה מיידית</span>
            </div>
        </div>
    );
};

export default AdvanceSearchMiddle;
