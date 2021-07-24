import React from "react";
import CounterButton from "./CounterButton";
const values = [0,1,2,3];

const Counter = ({ counter, setCounter }) => {
    return (
        <div className="counter__container">
            {values.map((value) => (
                <CounterButton
                    key={value}
                    counter={counter}
                    setCounter={setCounter}
                    value={value}
                />
            ))}
        </div>
    );
};

export default Counter;
