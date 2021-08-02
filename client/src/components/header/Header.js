import React, { useContext, useEffect, useState } from "react";
import HeaderMobileBar from "./header-mobile/HeaderMobileBar";
import HeaderBottom from "./headerBottom/HeaderBottom";
import HeaderTop from "./headerTop/HeaderTop";
import { LoginContext } from "../../contexts/LoginContext";
import LoginModal from "../login/LoginModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderTablet from "./HeaderTablet";

const Header = () => {
    const { isModalOpen } = useContext(LoginContext);
    const [tabletMode, setTabletMode] = useState(false);
    const [mobileMode, setMobileMode] = useState(false);

    const isTabletMode = () => {
        if (window.innerWidth < 1280) setTabletMode(true);
        else setTabletMode(false);
    };

    const isMobileMode = () => {
        if (window.innerWidth < 650) setMobileMode(true);
        else setMobileMode(false);
    };

    useEffect(() => {
        isMobileMode();
        window.addEventListener("resize", isTabletMode);
        window.addEventListener("resize", isMobileMode);

        return () => {
            window.removeEventListener("resize", isTabletMode);
            window.removeEventListener("resize", isMobileMode);
        };
    }, []);

    return (
        <>
            {mobileMode ? (
                <header className="header-mobile">
                    <HeaderMobileBar />
                </header>
            ) : (
                <header className="header">
                    {tabletMode ? (
                        <HeaderTablet />
                    ) : (
                        <>
                            <HeaderTop />
                            <HeaderBottom />
                        </>
                    )}
                </header>
            )}

            {!!isModalOpen && <LoginModal />}
        </>
    );
};

export default Header;
