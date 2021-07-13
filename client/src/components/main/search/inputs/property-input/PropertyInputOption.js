import React, { useState } from "react";
import Arrow from "../../../../general/Arrow";
import CheckBox from "../../../../general/CheckBox";
import OptionContainer from "../OptionContainer";

const PropertyInputOption = ({ property, cssClass }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const onOptionClicked = (e) => {
        e.stopPropagation();
        setIsChecked(!isChecked);
    };

    return (
        <div className={"option "} onClick={onOptionClicked}>
            <div className={"option-title " + cssClass || ""}>
                <CheckBox isChecked={isChecked} />
                <span>{property.value}</span>
                {!!property.data && (
                    <Arrow
                        setIsDropDownOpen={setIsDropDownOpen}
                        isDropDownOpen={isDropDownOpen}
                    />
                )}
            </div>
            {isDropDownOpen && (
                <OptionContainer cssClass="potion-container__relative">
                    {property.data.map((property) => (
                        <PropertyInputOption
                            property={property}
                            cssClass="inner-option"
                        />
                    ))}
                </OptionContainer>
            )}
        </div>
    );
};

export default PropertyInputOption;
