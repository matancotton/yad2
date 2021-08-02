import React from "react";
import HeaderMenu from "./headerMenu/HeaderMenu";
import HeaderIcons from "../HeaderIcons";
import NewAdButton from "./NewAdButton";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <HeaderMenu />
            <div className="header-icons__container">
                <HeaderIcons />
                <NewAdButton />
            </div>
        </div>
    );
};

export default HeaderTop;
