import React, { useState } from "react";
import { faBell, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NewAdButton from "./headerTop/NewAdButton";
import LoginModal from "../login/LoginModal";

const HeaderIcons = () => {
    const [isLoginModalOpen, setIsLoginModal] = useState(false);
    const onLoginClick = () => {
        setIsLoginModal(true);
    };
    return (
        <div className="header-menu__icons">
            <div className="icon-container">
                <img src="https://img.icons8.com/windows/32/000000/bell.png" />
                <span>התראות</span>
            </div>
            <div className="icon-container">
                <img src="https://img.icons8.com/windows/32/000000/like--v1.png" />
                <span>מודעות שאהבתי</span>
            </div>
            <div className="icon-container" onClick={onLoginClick}>
                <img
                    id="user"
                    src="https://img.icons8.com/windows/32/000000/user.png"
                />
                <span>התחברות</span>
            </div>
            {isLoginModalOpen && (
                <LoginModal setShowLoginModal={setIsLoginModal} />
            )}
        </div>
    );
};

export default HeaderIcons;
