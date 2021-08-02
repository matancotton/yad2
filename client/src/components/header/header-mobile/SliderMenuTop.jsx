import {
    faArrowsAltH,
    faBell,
    faHeart,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { logoutAction } from "../../../actions/LoginAction";
import { LoginContext } from "../../../contexts/LoginContext";
import { deleteUserFromCookie } from "../../../cookies/cookie";
import { logout } from "../../../server/auth";
import NewAdButton from "../headerTop/NewAdButton";

const SliderMenuTop = () => {
    const { userState, userDispatch, setIsModalOpen } =
        useContext(LoginContext);

    const onLoginClicked = () => {
        setIsModalOpen(true);
    };

    const onLogoutClicked = () => {
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
        <div className="slider-menu__top">
            <div className="content">
                {!!userState.user ? (
                    <div className="login">
                        <div className="icon">
                            <span>{userState.user.username[0]}</span>
                        </div>
                        <div className="login__text">לאזור האישי</div>
                        <div className="login__text" onClick={onLogoutClicked}>
                            התנתק
                        </div>
                    </div>
                ) : (
                    <div className="login" onClick={onLoginClicked}>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="login__text">התחברות</div>
                    </div>
                )}
            </div>
            <NewAdButton />
            <div className="icons">
                <div>
                    <FontAwesomeIcon icon={faBell} />
                    <span>התראות שלי</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faHeart} />
                    <span>מודעות שאהבתי</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faSearch} />
                    <span>חיפושים אחרונים</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowsAltH} />
                    <span>השוואת רכבים</span>
                </div>
            </div>
        </div>
    );
};

export default SliderMenuTop;
