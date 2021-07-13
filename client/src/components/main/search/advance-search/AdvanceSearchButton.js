import React, { useEffect, useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdvanceSearchButton = ({ isDropDownOpen, setIsDropDownOpen }) => {
    const [iconState, setIconState] = useState("icon");
    const onButtonClicked = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    useEffect(() => {
        if (isDropDownOpen) {
            setIconState("icon rotate-plus_circle__fowards");
        } else {
            setIconState("icon rotate-plus_circle__backwords");
        }
    }, [isDropDownOpen]);
    return (
        <button
            type="button"
            onClick={onButtonClicked}
            className="button advanced-search__botton"
        >
            <FontAwesomeIcon
                id="plusCircle"
                className={iconState}
                icon={faPlusCircle}
            />
            <span>חיפוש מתקדם</span>
        </button>
    );
};

export default AdvanceSearchButton;
