import React from "react";

const OptionContainer = (props) => {
    return (
        <div
            className={"option-container " + props.cssClass || ""}
            onClick={(e) => e.stopPropagation()}
        >
            {props.children}
        </div>
    );
};

export default OptionContainer;
