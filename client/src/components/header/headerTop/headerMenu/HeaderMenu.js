import React from "react";
import headerMenuValues from "../../../../values/header/headerMenuValues.json";
import HeaderItem from "./HeaderItem";

const HeaderMenu = () => {
    return (
        <div className="header-menu">
            <div className="img-container">
                <img
                    alt="yad2"
                    src="https://assets.yad2.co.il/yad2site/y2assets/images/header/yad2Logo.png"
                />
            </div>
            {headerMenuValues.map((menuItem) => (
                <HeaderItem key={menuItem.name} value={menuItem} />
            ))}
        </div>
    );
};

export default HeaderMenu;
