import React from "react";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainTitle = () => {
    return (
        <div className="main__title">
            <div>ראשי \ נדל"ן למכירה</div>
            <button>
                <FontAwesomeIcon icon={faChild} />
                נגישות
            </button>
        </div>
    );
};

export default MainTitle;
