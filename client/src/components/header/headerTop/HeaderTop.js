import React, { useContext } from "react";
import HeaderMenu from "./headerMenu/HeaderMenu";
import HeaderIcons from "../HeaderIcons";
import NewAdButton from "./NewAdButton";
import LoginModal from "../../login/LoginModal";
import { LoginContext } from "../../../contexts/LoginContext";

const HeaderTop = () => {
    const { isModalOpen } = useContext(LoginContext);

    return (
        <div className="header-top">
            <HeaderMenu />
            <div className="header-icons__container">
                <HeaderIcons />
                <NewAdButton />
                {!!isModalOpen && <LoginModal />}
            </div>
        </div>
    );
};

export default HeaderTop;
