import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ApiTextInput = ({
    state,
    setState,
    inputTextApi,
    index,
    cssClass,
    placeHolder,
}) => {
    const [values, setValues] = useState([]);

    const setValueState = (value) => {
        if (!index) {
            setState(value);
            return;
        }

        const newState = [...state];
        newState[index] = value;
        setState(newState);
    };

    const onValueClicked = (value) => {
        setValueState(value);
        setValues([]);
    };

    const onInputText = (e) => {
        setValueState(e.target.value);
        if (e.target.value === "") {
            setValues([]);
            return;
        }
        inputTextApi(e.target.value).then((result) => {
            setValues(result);
        });
    };

    return (
        <div className="api-input">
            <input
                type="text"
                className={!!cssClass ? cssClass : "input"}
                placeholder={placeHolder}
                value={!!index ? state[index] : state}
                onInput={onInputText}
            />
            {values.length > 0 && (
                <div className="api-values">
                    {values.map((value) => (
                        <div
                            className="value-item"
                            key={value.id}
                            onClick={() => {
                                onValueClicked(value.value);
                            }}
                        >
                            {value.value}
                        </div>
                    ))}
                </div>
            )}

            <span className="close-icon">
                <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => setValueState("")}
                />
            </span>
        </div>
    );
};

export default ApiTextInput;
