import React, { useContext, useEffect } from "react";
import {
    editMaxApartmentAction,
    editMaxFloorAction,
    editMinApartmentAction,
    editMinFloorAction,
    editDateAction,
    entryNowAction,
} from "../../../../actions/searchFilterAction";
import { PostsContext } from "../../../../contexts/PostsContext";
import { floor } from "../../../../values/search-bar/advance-search-values";
import CheckBox from "../../../general/CheckBox";

const AdvanceSearchMiddle = () => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);

    const onMinFloorChange = (e) => {
        searchFilterDispatch(editMinFloorAction(e.target.value));
    };

    const onMaxFloorChange = (e) => {
        searchFilterDispatch(editMaxFloorAction(e.target.value));
    };

    const onMinApartmentChange = (e) => {
        searchFilterDispatch(editMinApartmentAction(e.target.value));
    };

    const onMaxApartmentChane = (e) => {
        searchFilterDispatch(editMaxApartmentAction(e.target.value));
    };

    const onDateInput = (e) => {
        searchFilterDispatch(editDateAction(e.target.value));
    };

    const onCheckBoxClicked = () => {
        const value = searchFilterState.entryNow;
        searchFilterDispatch(entryNowAction(!value));
    };

    useEffect(() => {}, [searchFilterState.date]);

    return (
        <div className="advance-search__middle">
            <div className="advance-search__input">
                <div className="title">קומה</div>
                <select
                    className="input select-input"
                    value={searchFilterState.minFloor || "מ-"}
                    onChange={onMinFloorChange}
                >
                    <option value="מ-" disabled hidden>
                        מ-
                    </option>
                    {floor.map((size) => (
                        <option key={size}>{size}</option>
                    ))}
                </select>
                <select
                    className="input select-input"
                    value={searchFilterState.maxFloor || "עד-"}
                    onChange={onMaxFloorChange}
                >
                    <option value="עד-" disabled hidden>
                        עד-
                    </option>
                    {floor.map((size) => (
                        <option key={size}>{size}</option>
                    ))}
                </select>
            </div>
            <div className="advance-search__input">
                <div className="title">גודל דירה (במ"ר)</div>
                <input
                    type="text"
                    className="input select-input"
                    placeholder="מ-"
                    onInput={onMinApartmentChange}
                    value={searchFilterState.minApartment}
                />
                <input
                    type="text"
                    className="input select-input"
                    placeholder="עד-"
                    onInput={onMaxApartmentChane}
                    value={searchFilterState.maxApartment}
                />
            </div>
            <div className="advance-search__input">
                <div className="title">תאריך כניסה</div>
                <input
                    type="date"
                    className="input"
                    placeholder="החל מ- הזינו תאריך"
                    onInput={onDateInput}
                    value={searchFilterState.date}
                />
            </div>
            <div className="item" onClick={onCheckBoxClicked}>
                <CheckBox isChecked={searchFilterState.entryNow} />
                <span>כניסה מיידית</span>
            </div>
        </div>
    );
};

export default AdvanceSearchMiddle;
