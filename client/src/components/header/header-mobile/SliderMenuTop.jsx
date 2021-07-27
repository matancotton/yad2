import {
    faArrowsAltH,
    faBell,
    faHeart,
    faSearch,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { LoginContext } from "../../../contexts/LoginContext";
import NewAdButton from "../headerTop/NewAdButton";

const SliderMenuTop = () => {
    const { userState } = useContext(LoginContext);
    return (
        <div className="slider-menu__top">
            <div className="content">
                {!!userState.user ? (
                    <div className="icon">{userState.user.username[0]}</div>
                ) : (
                    <div className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                )}

                {!!userState.user ? <div>לאזור האישי</div> : <div>התחברות</div>}

                <div></div>
                <div></div>
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
