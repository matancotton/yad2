import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import TextInput from "./inputs/TextInput";
import PasswordInput from "./inputs/PasswordInput";
import { LoginModeContext } from "../../contexts/LoginModeContext";
import {
    loginModeAction,
    logoutModeAction,
} from "../../actions/changeLoginModeAction";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login, subscribe } from "../../server/auth";
import { LoginContext } from "../../contexts/LoginContext";
import { loginAction } from "../../actions/LoginAction";
import { saveUserOnCookie } from "../../cookies/cookie";

const LoginForm = ({ setShowLoginModal }) => {
    const { userState, userDispatch } = useContext(LoginContext);
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [errorEmailMessage, setErrorEmailMessage] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const [isValidRepeatedPassword, setIsValidRepeatedPassword] =
        useState(false);
    const [errorRepeatedPasswordMessage, setErrorRepeatedPasswordMessage] =
        useState("");
    const { loginModeState, loginModeDispatch } = useContext(LoginModeContext);

    const onSubscribeClick = () => {
        if (loginModeState) {
            loginModeDispatch(logoutModeAction());
        } else {
            loginModeDispatch(loginModeAction());
        }
    };

    const isValidForm = () => {
        if (loginModeState) return isValidEmail && isValidPassword;
        return isValidEmail && isValidPassword && isValidRepeatedPassword;
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (loginModeState) {
            login(email, password)
                .then(({ data }) => {
                    userDispatch(loginAction(data.user, data.token));
                    saveUserOnCookie(data);
                    setShowLoginModal(false);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            subscribe(email, password)
                .then(({ data }) => {
                    userDispatch(loginAction(data.user, data.token));
                    saveUserOnCookie(data);
                    setShowLoginModal(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <form className="login-form" onSubmit={onSubmitForm}>
            <div>
                <h2>{loginModeState ? "התחברות" : "הרשמה"}</h2>
                <p>הזן את הפרטים כדי {loginModeState ? "להתחבר" : "להירשם"}</p>
            </div>
            <div className="login-form__field">
                {isValidEmail && (
                    <FontAwesomeIcon className="check" icon={faCheck} />
                )}
                <label htmlFor="email">כתובת מייל</label>
                <TextInput
                    setIsValidEmail={setIsValidEmail}
                    setErrorEmailMessage={setErrorEmailMessage}
                    setEmail={setEmail}
                />
                {errorEmailMessage.length > 0 && (
                    <span className="error-message">{errorEmailMessage}</span>
                )}
            </div>
            <div>
                {isValidPassword && (
                    <FontAwesomeIcon className="check" icon={faCheck} />
                )}
                <label htmlFor="password">סיסמה</label>
                <PasswordInput
                    setPassword={setPassword}
                    setIsValidPassword={setIsValidPassword}
                    setErrorPasswordMessage={setErrorPasswordMessage}
                    placeHolder={
                        loginModeState
                            ? "הקלד סיסמה"
                            : "6 תווים, אותיות באנגלית וספרה"
                    }
                />
                {errorPasswordMessage.length > 0 && (
                    <span className="error-message">
                        {errorPasswordMessage}
                    </span>
                )}
            </div>

            {!loginModeState && (
                <div>
                    {isValidRepeatedPassword && (
                        <FontAwesomeIcon className="check" icon={faCheck} />
                    )}
                    <PasswordInput
                        password={password}
                        setIsValidPassword={setIsValidPassword}
                        placeHolder={"חזור על הסיסמה שהקלדת"}
                        isRepeatedPassword={true}
                        setIsValidPassword={setIsValidRepeatedPassword}
                        setErrorPasswordMessage={
                            setErrorRepeatedPasswordMessage
                        }
                    />
                    {errorRepeatedPasswordMessage.length > 0 && (
                        <span className="error-message">
                            {errorRepeatedPasswordMessage}
                        </span>
                    )}
                </div>
            )}

            <div>
                <button
                    className="button"
                    type="submit"
                    disabled={!isValidForm()}
                >
                    {loginModeState ? "התחבר" : "הרשמה"}
                </button>
                <div className="login-form__signup">
                    {loginModeState ? "לא רשום?" : "כבר רשום?"}
                    <span onClick={onSubscribeClick}>
                        {loginModeState ? " להרשמה" : " להתחברות"}
                    </span>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
