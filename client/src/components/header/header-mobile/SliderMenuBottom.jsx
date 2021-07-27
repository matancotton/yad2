import React from "react";
import headerMobileIcons from "../../../values/header/headerMobileIcons";

const SliderMenuBottom = () => {
    return (
        <div className="slider-menu__bottom">
            <div>חיפוש מהיר באתר </div>
            <div className="slider-navigate">
                {headerMobileIcons.map((item) => (
                    <div key={item.value}>
                        <span>{item.icon}</span>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderMenuBottom;
