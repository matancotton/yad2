import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PhoneNumber = ({ contact }) => {
    const [showContact, setShowContact] = useState(false);

    const onContactClick = (e) => {
        e.stopPropagation();
        setShowContact(!showContact);
    };

    return (
        <div className="phone-number" onClick={onContactClick}>
            <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            <span>הצגת מספר טלפון</span>
            {showContact && (
                <div
                    className="contact-info"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div>{contact.mainName}</div>
                    <div>{contact.mainPhone}</div>
                    <div>שלחית דוא"ל למפרסם</div>
                </div>
            )}
        </div>
    );
};

export default PhoneNumber;
