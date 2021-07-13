import React, { useContext, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginModeContext } from "../../../contexts/LoginModeContext";

const PasswordInput = ({
    password,
    setPassword,
    placeHolder,
    isRepeatedPassword,
    setIsValidPassword,
    setErrorPasswordMessage,
}) => {
    const [passwordCssClass, setPasswordCssClass] = useState("input-container");
    const [showPassword, setShowPassword] = useState(false);
    const { loginModeState } = useContext(LoginModeContext);

    const onInputPasswordLogin = (e) => {
        onInputPasswordSignup(e);
    };

    const onInputPasswordSignup = (e) => {
        let input = e.target.value;
        if (!!isRepeatedPassword) {
            if (input == "") {
                setErrorPasswordMessage("שדה חובה");
            } else if (input !== password) {
                setErrorPasswordMessage("סיסמה לא תואמת");
            } else {
                setIsValidPassword(true);
                setErrorPasswordMessage("");
                setPasswordCssClass("input-container");
                return;
            }

            setIsValidPassword(false);
            setPasswordCssClass("input-container input-error");
            return;
        }

        let hasNumber = new RegExp(/[0-9]+/);
        let hasLetter = new RegExp(/[a-zA-Z]+/);
        if (input == "") {
            setErrorPasswordMessage("שדה חובה");
        } else if (input.length < 6) {
            setErrorPasswordMessage("מינימום 6 תווים");
        } else if (!hasLetter.test(input)) {
            setErrorPasswordMessage("לפחות אות גדולה אחת");
        } else if (!hasNumber.test(input)) {
            setErrorPasswordMessage("לפחות ספרה אחת");
        } else if (input.length > 20) {
            setErrorPasswordMessage("מקסימום 20 תווים");
        } else {
            setIsValidPassword(true);
            setPassword(input);
            setErrorPasswordMessage("");
            setPasswordCssClass("input-container");
            return;
        }
        setIsValidPassword(false);
        setPasswordCssClass("input-container input-error");
    };

    return (
        <div className={passwordCssClass}>
            <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder={placeHolder}
                onInput={
                    loginModeState
                        ? onInputPasswordLogin
                        : onInputPasswordSignup
                }
                onBlur={
                    loginModeState
                        ? onInputPasswordLogin
                        : onInputPasswordSignup
                }
            />
            <span onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
        </div>
    );
};

export default PasswordInput;
