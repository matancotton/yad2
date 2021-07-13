import React, { useEffect, useState } from "react";

const CounterButton = ({ initialValue, counter, setCounter }) => {
    const [value, setValue] = useState(initialValue);
    const [cssClass, setCssClass] = useState(
        initialValue === 0 ? "button selected" : "button"
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
    }, [counter]);

    return (
        <button type="button" className={cssClass} onClick={onButtonClick}>
            {value}
        </button>
    );
};

export default CounterButton;
