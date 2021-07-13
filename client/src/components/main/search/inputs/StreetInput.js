import React from "react";
const StreetInput = () => {
    return (
        <div className="search-bar__input">
            <span>חפשו אזור, עיר, שכונה או רחוב</span>
            <input
                type="text"
                className="input"
                placeholder="לדוגמה: פלורנטין"
            />
        </div>
    );
};

export default StreetInput;
