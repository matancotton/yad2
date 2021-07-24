import React, { useContext, useState } from "react";
import TextInput from "./inputs/TextInput";
import PasswordInput from "./inputs/PasswordInput";
import { LoginContext } from "../../contexts/LoginContext";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { login, subscribe } from "../../server/auth";
import { loginAction } from "../../actions/LoginAction";
import { saveUserOnCookie } from "../../cookies/cookie";

const LoginForm = ({ setServerError }) => {
    const { userDispatch, setIsModalOpen, isLoginMode, setIsLoginMode } =
        useContext(LoginContext);
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

    const onSubscribeClick = () => {
        if (isLoginMode) {
            setIsLoginMode(false);
        } else {
            setIsLoginMode(true);
        }
    };

    const isValidForm = () => {
        if (isLoginMode) return isValidEmail && isValidPassword;
        return isValidEmail && isValidPassword && isValidRepeatedPassword;
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (isLoginMode) {
            login(email, password)
                .then(({ data }) => {
                    userDispatch(loginAction(data.user, data.token));
                    saveUserOnCookie(data);
                    setIsModalOpen(false);
                })
                .catch((err) => {
                    setServerError("שם משתמש או סיסמה לא נכונים");
                    setTimeout(() => setServerError(""), 2000);
                });
        } else {
            subscribe(email, password)
                .then(({ data }) => {
                    userDispatch(loginAction(data.user, data.token));
                    saveUserOnCookie(data);
                    setIsModalOpen(false);
                })
                .catch((err) => {
                    setServerError("אחד או יותר מהפרטים אינם תקינים");
                    setTimeout(() => setServerError(""), 2000);
                });
        }
    };

    return (
        <form className="login-form" onSubmit={onSubmitForm}>
            <div>
                <h2>{isLoginMode ? "התחברות" : "הרשמה"}</h2>
                <p>הזן את הפרטים כדי {isLoginMode ? "להתחבר" : "להירשם"}</p>
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
                        isLoginMode
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

            {!isLoginMode && (
                <div>
                    {isValidRepeatedPassword && (
                        <FontAwesomeIcon className="check" icon={faCheck} />
                    )}
                    <PasswordInput
                        password={password}
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
                    {isLoginMode ? "התחבר" : "הרשמה"}
                </button>
                <div className="login-form__signup">
                    {isLoginMode ? "לא רשום?" : "כבר רשום?"}
                    <span onClick={onSubscribeClick}>
                        {isLoginMode ? " להרשמה" : " להתחברות"}
                    </span>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
