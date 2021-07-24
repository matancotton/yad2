import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { LoginContext } from "../../contexts/LoginContext";
import LoginMessage from "./LoginMessage";
import LoginForm from "./LoginForm";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = () => {
    const { setIsModalOpen } = useContext(LoginContext);
    const [serverError, setServerError] = useState("");
    const history = useHistory();

    const closeModal = () => {
        if (history.location !== "/") {
            history.push("/");
        }
        setIsModalOpen(false);
    };

    const closeError = (e) => {
        e.stopPropagation();
        setServerError("");
    };

    return (
        <div className="modal__container" onClick={closeModal}>
            {serverError !== "" && (
                <div className="server-error">
                    <span>{serverError}</span>
                    <span onClick={closeError}>
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </div>
            )}
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                <div className="close-modal">
                    <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
                </div>
                <LoginMessage />
                <LoginForm setServerError={setServerError} />
            </div>
        </div>
    );
};

export default LoginModal;
