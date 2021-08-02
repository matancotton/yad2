import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SliderMenu from "./header-mobile/SliderMenu";

const HeaderTablet = () => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    return (
        <div className="tablet-menu">
            <div
                className="hamburger"
                onClick={() => {
                    setIsSliderOpen(true);
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="tablet-header__text">תפריט</div>

            {isSliderOpen && <SliderMenu setIsSliderOpen={setIsSliderOpen} />}
        </div>
    );
};

export default HeaderTablet;
