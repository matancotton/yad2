import React from "react";

const HeaderItem = ({ value }) => {
    return (
        <div className="header-item__container">
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
