import React, { useState } from "react";
import properties from "../../../../../values/search-bar/properties";
import SelectInput from "../../../../general/SelectInput";
import OptionContainer from "../OptionContainer";
import PropertyInputOption from "./PropertyInputOption";

const PropertyInput = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const openDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };

    return (
        <div className="search-bar__input">
            <span>סוג נכס</span>
            <SelectInput placeHolder={properties.title}>
                <OptionContainer>
                    {properties.data.map((property, i) => (
                        <PropertyInputOption key={i} property={property} />
                    ))}
                </OptionContainer>
            </SelectInput>
        </div>
    );
};

export default PropertyInput;
