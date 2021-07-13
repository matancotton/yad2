import React from "react";
import { Link, useHistory } from "react-router-dom";

const NewAdButton = () => {
    const history = useHistory();
    const onAdButtonClick = () => {
        history.push("/publish");
    };

    return (
        <button className="new-ad-button" onClick={onAdButtonClick}>
            <span className="plus">+</span>
            <span>פרסום מודעה חדשה</span>
        </button>
    );
};

export default NewAdButton;
