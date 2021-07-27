import React, { createRef, useState } from "react";
import useClose from "../../hooks/useClose";
import Arrow from "./Arrow";

const SelectInput = (props) => {
    const dropdownRef = createRef();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const openDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    useClose(dropdownRef, () => setIsDropDownOpen(false));

    return (
        <div
            className={"input pointer select " + props.cssClass || ""}
            onClick={openDropDown}
            ref={dropdownRef}
        >
            <div className="select-title">
                <span className="place-holder">{props.placeHolder}</span>
            </div>
            <Arrow
                setIsDropDownOpen={setIsDropDownOpen}
                isDropDownOpen={isDropDownOpen}
            />
            {!!isDropDownOpen && props.children}
        </div>
    );
};

export default SelectInput;
