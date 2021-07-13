import React from "react";
import SelectInput from "../../../../general/SelectInput";
import OptionContainer from "../OptionContainer";
import roomNumber from "../../../../../values/search-bar/roomsNumber";

const RoomRangeSelectInput = () => {
    return (
        <OptionContainer cssClass="rooms-options__container">
            <select className="rooms-options__select" placeholder="מ-">
                {roomNumber.map((room) => (
                    <option key={room}>{room}</option>
                ))}
            </select>
            <select className="rooms-options__select" placeholder="עד-">
                {roomNumber.map((room) => (
                    <option key={room}>{room}</option>
                ))}
            </select>
        </OptionContainer>
    );
};

export default RoomRangeSelectInput;
