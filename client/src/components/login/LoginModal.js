import React, { useState } from "react";
import { useHistory } from "react-router";
import LoginMessage from "./LoginMessage";
import LoginForm from "./LoginForm";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginModal = ({ setShowLoginModal }) => {
    const history = useHistory();

    const closeModal = () => {
        if (history.location !== "/") {
            history.push("/");
        }
        setShowLoginModal(false);
    };

    return (
        <div className="modal__container" onClick={closeModal}>
            <div className="login-modal" onClick={(e) => e.stopPropagation()}>
                <div className="close-modal">
                    <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
                </div>
                <LoginMessage />
                <LoginForm setShowLoginModal={setShowLoginModal} />
            </div>
        </div>
    );
};

export default LoginModal;
