import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Exit from "./Exit";

const NewAdHeader = () => {
    return (
        <div className="new-ad-header__container">
            <div className="new-ad-header">
                <div>
                    <img
                        alt="yad2"
                        src="https://assets.yad2.co.il/personal/images/general/new_logo_orange.png"
                    />
                    <div>פרסום מודעה חדשה</div>
                </div>
                <div>
                    <div>
                        <FontAwesomeIcon className="icon" icon={faUser} />
                    </div>
                    <div>צור קשר</div>
                    <Exit />
                </div>
            </div>
        </div>
    );
};

export default NewAdHeader;
