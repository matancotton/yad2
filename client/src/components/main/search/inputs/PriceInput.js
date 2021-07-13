import React from "react";

const PriceInput = () => {
    return (
        <div className="search-bar__input price_input">
            <span>מחיר</span>
            <div>
                <input type="number" className="input" placeholder="ממחיר" />
                <input type="number" className="input" placeholder="עד מחיר" />
            </div>
        </div>
    );
};

export default PriceInput;
