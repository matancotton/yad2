import React, { useContext } from "react";
import CheckBox from "../../../general/CheckBox";
import { PostsContext } from "../../../../contexts/PostsContext";
import {
    editFreeTextAction,
    villagesOnlyAction,
} from "../../../../actions/searchFilterAction";

export const AdvanceSearchBottom = () => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);

    const onInputText = (e) => {
        searchFilterDispatch(editFreeTextAction(e.target.value));
    };

    const onVillagesOnlyClicked = () => {
        const value = searchFilterState.villagesOnly;
        searchFilterDispatch(villagesOnlyAction(!value));
    };

    return (
        <div className="advance-search__bottom">
            <div className="free-text">
                <div className="title">חיפוש חופשי</div>
                <input
                    type="text"
                    className="input"
                    onInput={onInputText}
                    value={searchFilterState.freeText}
                />
            </div>
            <div className="item" onClick={onVillagesOnlyClicked}>
                <CheckBox isChecked={searchFilterState.villagesOnly} />
                <span>הצגת מושבים וקיבוצים בלבד</span>
            </div>
        </div>
    );
};

export default AdvanceSearchBottom;
