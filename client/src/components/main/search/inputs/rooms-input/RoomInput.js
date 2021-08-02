import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../../../contexts/PostsContext";

import SelectInput from "../../../../general/SelectInput";
import RoomRangeSelectInput from "./RoomRangeSelectInput";

const RoomInput = () => {
    const { searchFilterState } = useContext(PostsContext);
    const [placeholder, setPlaceholder] = useState("חדרים");

    useEffect(() => {
        if (
            searchFilterState.minRooms !== 0 &&
            searchFilterState.maxRooms !== 0
        )
            setPlaceholder(
                `${searchFilterState.minRooms} - ${searchFilterState.maxRooms}`
            );
        else setPlaceholder("חדרים");
    }, [searchFilterState.minRooms, searchFilterState.maxRooms]);

    return (
        <div className="search-bar__input">
            <span>חדרים</span>
            <SelectInput placeHolder={placeholder}>
                <RoomRangeSelectInput />
            </SelectInput>
        </div>
    );
};

export default RoomInput;
