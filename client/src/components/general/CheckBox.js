import React, { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckBox = ({ isChecked }) => {
    const [cssState, setCssState] = useState("check-box");

    useEffect(() => {
        if (isChecked) {
            setCssState("check-box clicked");
        } else {
            setCssState("check-box");
        }
        return () => {};
    }, [isChecked]);
    return (
        <span className={cssState}>
            {isChecked && <FontAwesomeIcon icon={faCheck} />}
        </span>
    );
};

export default CheckBox;
