import React from "react";
import HeaderMobileBar from "./header-mobile/HeaderMobileBar";
import SearchBarMobile from "../main/search/search-bar-mobile/SearchBarMobile";
import HeaderBottom from "./headerBottom/HeaderBottom";
import HeaderTop from "./headerTop/HeaderTop";

const Header = () => {
    return (
        <>
            <header className="header">
                <HeaderTop />
                <HeaderBottom />
            </header>
            <header className="header-mobile">
                <HeaderMobileBar />
            </header>
        </>
    );
};

export default Header;
