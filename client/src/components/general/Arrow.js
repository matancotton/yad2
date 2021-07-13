import React from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Arrow = ({ isDropDownOpen, setIsDropDownOpen }) => {
    const onArrowClick = (e) => {
        e.stopPropagation();
        setIsDropDownOpen(!isDropDownOpen);
    };
    return (
        <FontAwesomeIcon
            onClick={onArrowClick}
            className="arrow"
            icon={isDropDownOpen ? faAngleUp : faAngleDown}
        />
    );
};

export default Arrow;
