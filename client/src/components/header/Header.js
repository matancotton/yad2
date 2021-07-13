import React from "react";
import HeaderBottom from "./headerBottom/HeaderBottom";
import HeaderTop from "./headerTop/HeaderTop";

const Header = () => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
};

export default Header;
