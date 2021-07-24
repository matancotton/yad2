import React, { useState } from "react";
import validator from "validator";

const TextInput = ({ setEmail, setIsValidEmail, setErrorEmailMessage }) => {
    const [emailCssClass, setEmailCssClass] = useState("input-container");

    const onInputEmail = (e) => {
        let email = e.target.value.trim();
        if (validator.isEmail(email)) {
            setIsValidEmail(true);
            setEmailCssClass("input-container");
            setErrorEmailMessage("");
            setEmail(email);
            return;
        } else if (email === "") {
            setIsValidEmail(false);
            setErrorEmailMessage("שדה חובה");
        } else {
            setIsValidEmail(false);
            setErrorEmailMessage("אימייל לא תקין");
        }
        setEmailCssClass("input-container input-error");
    };

    return (
        <div className={emailCssClass}>
            <input
                type="text"
                placeholder="your@mail.com"
                onInput={onInputEmail}
                onBlur={onInputEmail}
            />
        </div>
    );
};

export default TextInput;
