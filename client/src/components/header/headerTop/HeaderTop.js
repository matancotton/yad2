import React, { useState } from "react";
import HeaderMenu from "./headerMenu/HeaderMenu";
import HeaderIcons from "../HeaderIcons";
import NewAdButton from "./NewAdButton";
import LoginModal from "../../login/LoginModal";

const HeaderTop = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    return (
        <div className="header-top">
            <HeaderMenu />
            <div className="header-icons__container">
                <HeaderIcons />
                <NewAdButton setShowLoginModal={setShowLoginModal} />
                {!!showLoginModal && (
                    <LoginModal setShowLoginModal={setShowLoginModal} />
                )}
            </div>
        </div>
    );
};

export default HeaderTop;
