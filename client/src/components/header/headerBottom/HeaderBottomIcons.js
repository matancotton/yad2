import React from "react";
import { faGavel, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderBottomIcons = () => {
    return (
        <div className="header-bottom__icons">
            <div className="header-bottom__icon-container">
                <FontAwesomeIcon icon={faGavel} />
                <span>כונס נכסים</span>
            </div>
            <div className="header-bottom__icon-container">
                <FontAwesomeIcon icon={faChartLine} />
                <span>מדד הנדל"ן</span>
            </div>
            <div className="header-bottom__icon-container">
                <div className="img-container">
                    <img
                        src="//assets.yad2.co.il/yad2site/y2assets/images/logos/yad1/yad1_logo.svg"
                        alt="yad1"
                    />
                </div>

                <span>יד1 דירות חדשות</span>
            </div>
            <div className="header-bottom__icon-container">
                <div className="img-container">
                    <img
                        src="//assets.yad2.co.il/yad2site/y2assets/images/logos/yadata/yadata_logo_black.svg"
                        alt="yadata"
                    />
                </div>
                <span>הערכת שווי מס</span>
            </div>
        </div>
    );
};

export default HeaderBottomIcons;
