import React, { useState } from "react";

const PropertyTextArea = ({ placeHolder, value, setValue }) => {
    const onInputText = (e) => {
        const input = e.target.value;
        setValue(input);
    };

    return (
        <div className="textarea">
            <div className="textarea__header">
                <span>פרוט הנכס</span>
                <span className="fade">{value.length}/400</span>
            </div>
            <textarea
                className="textarea__input"
                onInput={onInputText}
                placeholder={placeHolder}
            ></textarea>
        </div>
    );
};

export default PropertyTextArea;
