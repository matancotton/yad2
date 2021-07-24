import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeaderMobileBar = () => {
    return (
        <div className="header-mobile__bar">
            <div className="hamburger">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="header-img">
                <img
                    alt="yad2"
                    src="//assets.yad2.co.il/yad2site/y2assets/images/header/Yad2_logo_white2.svg"
                />
            </div>
        </div>
    );
};

export default HeaderMobileBar;
