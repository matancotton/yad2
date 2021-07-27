import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SliderMenuBottom from "./SliderMenuBottom";
import SliderMenuTop from "./SliderMenuTop";

const SliderMenu = ({ setIsSliderOpen }) => {
    const [sliderCss, setSliderCss] = useState("slider-menu open-slider");
    const onCloseClick = () => {
        setSliderCss("slider-menu close-slider");
        setTimeout(() => {
            setIsSliderOpen(false);
        }, 500);
    };
    return (
        <div className="modal__container slider-menu__container">
            <div className={sliderCss}>
                <SliderMenuTop />
                <SliderMenuBottom />
                <div className="close-slider__button" onClick={onCloseClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
        </div>
    );
};

export default SliderMenu;
