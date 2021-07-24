import React, { useContext } from "react";
import {
    editMaxPriceAction,
    editMinPriceAction,
} from "../../../../actions/searchFilterAction";
import { PostsContext } from "../../../../contexts/PostsContext";

const PriceInput = () => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);

    const onInputMinPrice = (e) => {
        const minPrice = e.target.value;
        searchFilterDispatch(editMinPriceAction(minPrice));
    };

    const onInputMaxPrice = (e) => {
        const maxPrice = e.target.value;
        searchFilterDispatch(editMaxPriceAction(maxPrice));
    };

    return (
        <>
            <div className="search-bar__input price_input">
                <span>מחיר</span>
                <input
                    type="number"
                    className="input"
                    placeholder="ממחיר"
                    value={
                        searchFilterState.minPrice > 0
                            ? searchFilterState.minPrice
                            : ""
                    }
                    onInput={onInputMinPrice}
                />
            </div>
            <div className="search-bar__input price-input">
                <input
                    type="number"
                    className="input"
                    placeholder="עד מחיר"
                    value={
                        searchFilterState.maxPrice > 0
                            ? searchFilterState.maxPrice
                            : ""
                    }
                    onInput={onInputMaxPrice}
                />
            </div>
        </>
    );
};

export default PriceInput;
