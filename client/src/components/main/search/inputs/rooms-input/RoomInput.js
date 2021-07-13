import React from "react";
import SelectInput from "../../../../general/SelectInput";
import OptionContainer from "../OptionContainer";
import RoomRangeSelectInput from "./RoomRangeSelectInput";

const RoomInput = () => {
    return (
        <div className="search-bar__input">
            <span>חדרים</span>
            <SelectInput placeHolder="חדרים">
                <OptionContainer>
                    <RoomRangeSelectInput />
                </OptionContainer>
            </SelectInput>
        </div>
    );
};

export default RoomInput;
