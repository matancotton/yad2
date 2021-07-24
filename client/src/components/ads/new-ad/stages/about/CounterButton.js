import React, { useEffect, useState } from "react";

const CounterButton = ({ value, counter, setCounter }) => {
    const [cssClass, setCssClass] = useState(
        value === 0 ? "button selected" : "button"
    );

    const onButtonClick = () => {
        setCounter(value);
    };

    useEffect(() => {
        if (value === counter) {
            setCssClass("button selected");
        } else {
            setCssClass("button");
        }
    }, [counter, value]);

    return (
        <div className={cssClass} onClick={onButtonClick}>
            {value === 0 ? "ללא" : value}
        </div>
    );
};

export default CounterButton;
