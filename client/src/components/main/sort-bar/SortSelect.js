import React from "react";
import SelectInput from "../../general/SelectInput";
import OptionContainer from "../search/inputs/OptionContainer";
import SortOption from "./SortOption";

const SortSelect = () => {
    return (
        <div className="sort-select__container">
            <span>מיין לפי</span>
            <SelectInput cssClass="sort-select" placeHolder="לפי תאריך">
                <OptionContainer cssClass="sort-option__container">
                    <SortOption value="date" name="לפי תאריך" />
                    <SortOption value="low-to-high" name="מחיר - מהזול ליקר" />
                    <SortOption value="high-to-low" name="מחיר מהיקר לזול" />
                </OptionContainer>
            </SelectInput>
        </div>
    );
};

export default SortSelect;
