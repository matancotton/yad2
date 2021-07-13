import React, { useEffect, useState } from "react";
import CounterButton from "./CounterButton";
const values = [0, 1, 2, 3];

const Counter = ({ counter, setCounter }) => {
    return (
        <div className="counter__container">
            {values.map((value) => (
                <CounterButton
                    key={value}
                    counter={counter}
                    setCounter={setCounter}
                    initialValue={value === 0 ? "ללא" : value}
                />
            ))}
        </div>
    );
};

export default Counter;
