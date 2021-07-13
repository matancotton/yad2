import React, { useState } from "react";

const HeaderItem = ({ value }) => {
    const [isSubVisible, setIsSubVisible] = useState(false);
    return (
        <div
            className="header-item__container"
            onMouseLeave={() => setIsSubVisible(false)}
            onMouseEnter={() => setIsSubVisible(true)}
        >
            <div
                className={
                    !!value.href ? "header-item active-link" : "header-item"
                }
            >
                <div className="header-item__name">{value.name}</div>
            </div>
        </div>
    );
};

export default HeaderItem;
