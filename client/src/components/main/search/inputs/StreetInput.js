import React, { useContext, useState } from "react";
import { editAreaAction } from "../../../../actions/searchFilterAction";
import { PostsContext } from "../../../../contexts/PostsContext";
import { citysApi, streetsApi } from "../../../../server/govApi";
const StreetInput = () => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);
    const [streets, setstreets] = useState([]);
    const [cities, setCities] = useState([]);

    const onInputText = (e) => {
        const value = e.target.value;
        searchFilterDispatch(editAreaAction(value));
        if (value === "") {
            setstreets([]);
            setCities([]);
        } else {
            streetsApi(value).then((data) => {
                setstreets(data);
            });
            citysApi(value).then((data) => {
                setCities(data);
            });
        }
    };

    const onValueClicked = (value) => {
        searchFilterDispatch(editAreaAction(value));
        setCities([]);
        setstreets([]);
    };

    return (
        <div className="search-bar__input street-input">
            <span>חפשו עיר או רחוב</span>
            <input
                type="text"
                className="input"
                placeholder="לדוגמה: פלורנטין"
                value={searchFilterState.area}
                onInput={onInputText}
            />
            {(streets.length > 0 || cities.length > 0) && (
                <div className="streets-values">
                    {streets.length > 0 && (
                        <>
                            <div className="street-value title">רחובות</div>
                            {streets.map((value) => (
                                <div
                                    className="street-value"
                                    key={value.id}
                                    onClick={() => onValueClicked(value.value)}
                                >
                                    {value.value}
                                </div>
                            ))}
                        </>
                    )}
                    {cities.length > 0 && (
                        <>
                            <div className="street-value title">ערים</div>
                            {cities.map((value) => (
                                <div
                                    key={value.id}
                                    className="street-value"
                                    onClick={() => onValueClicked(value.value)}
                                >
                                    {value.value}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default StreetInput;
