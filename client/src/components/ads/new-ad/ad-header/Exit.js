import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Exit = () => {
    return (
        <button className="exit pointer">
            <span>יציאה</span>
            <FontAwesomeIcon icon={faTimes} />
        </button>
    );
};

export default Exit;
