import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect } from "react";
import { logoutAction } from "../../actions/LoginAction";
import { LoginContext } from "../../contexts/LoginContext";
import { deleteUserFromCookie } from "../../cookies/cookie";
import { logout } from "../../server/auth";
import LoginModal from "../login/LoginModal";

const HeaderIcons = () => {
    const { isModalOpen, setIsModalOpen, userState, userDispatch } =
        useContext(LoginContext);
    const onLoginClick = () => {
        setIsModalOpen(true);
    };

    const logoutClick = () => {
        logout(userState.token)
            .then(() => {
                userDispatch(logoutAction());
                deleteUserFromCookie();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className="header-menu__icons">
            <div className="icon-container">
                <img
                    alt="notification"
                    src="https://img.icons8.com/windows/32/000000/bell.png"
                />
                <span className="extra">התראות</span>
            </div>
            <div className="icon-container">
                <img
                    alt="ads"
                    src="https://img.icons8.com/windows/32/000000/like--v1.png"
                />
                <span className="extra">מודעות שאהבתי</span>
            </div>
            {!userState.user ? (
                <div className="icon-container" onClick={onLoginClick}>
                    <img
                        alt="user"
                        id="user"
                        src="https://img.icons8.com/windows/32/000000/user.png"
                    />
                    <span className="extra">התחברות</span>
                </div>
            ) : (
                <div className="icon-container drop">
                    <div className="logged-in__user">
                        {userState.user.username[0]}
                    </div>
                    <span className="extra">{userState.user.username}</span>
                    <div className="user-dropdown">
                        <div>
                            <FontAwesomeIcon icon={faUser} />
                            <span>אזור אישי</span>
                        </div>
                        <div onClick={logoutClick}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span>התנתקות</span>
                        </div>
                    </div>
                </div>
            )}
            {isModalOpen && <LoginModal />}
        </div>
    );
};

export default HeaderIcons;
