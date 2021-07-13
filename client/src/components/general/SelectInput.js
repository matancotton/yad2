import React, { useState } from "react";
import Arrow from "./Arrow";

const SelectInput = (props) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const openDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };
    return (
        <div className="input pointer select" onClick={openDropDown}>
            <div className="select-title">
                <span className="place-holder">{props.placeHolder}</span>
                <Arrow
                    setIsDropDownOpen={setIsDropDownOpen}
                    isDropDownOpen={isDropDownOpen}
                />
            </div>
            {!!isDropDownOpen && props.children}
        </div>
    );
};

export default SelectInput;
