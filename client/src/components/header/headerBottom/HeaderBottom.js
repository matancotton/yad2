import React from "react";
import HeaderBottomMenu from "./HeaderBottomMenu";
import HeaderBottomIcons from "./HeaderBottomIcons";

const HeaderBottom = () => {
    return (
        <div className="header-bottom">
            <HeaderBottomMenu />
            <HeaderBottomIcons />
        </div>
    );
};

export default HeaderBottom;
