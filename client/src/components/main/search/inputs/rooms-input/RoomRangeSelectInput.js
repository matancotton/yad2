import React, { useContext } from "react";
import { PostsContext } from "../../../../../contexts/PostsContext";

import OptionContainer from "../OptionContainer";
import roomNumber from "../../../../../values/search-bar/roomsNumber";
import {
    editMaxRoomsAction,
    editMinRoomsAction,
} from "../../../../../actions/searchFilterAction";

const RoomRangeSelectInput = () => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);

    const onChangeMinValue = (e) => {
        const minRooms = e.target.value;
        searchFilterDispatch(editMinRoomsAction(minRooms));
    };

    const onChangeMaxValue = (e) => {
        const maxRooms = e.target.value;
        searchFilterDispatch(editMaxRoomsAction(maxRooms));
    };

    return (
        <OptionContainer cssClass="rooms-options__container">
            <select
                className="rooms-options__select"
                placeholder="מ-"
                value={searchFilterState.minRooms}
                onChange={onChangeMinValue}
            >
                {roomNumber.map((room) => (
                    <option key={room}>{room}</option>
                ))}
            </select>
            <select
                className="rooms-options__select"
                placeholder="עד-"
                value={searchFilterState.maxRooms}
                onChange={onChangeMaxValue}
            >
                {roomNumber.map((room) => (
                    <option key={room}>{room}</option>
                ))}
            </select>
        </OptionContainer>
    );
};

export default RoomRangeSelectInput;
