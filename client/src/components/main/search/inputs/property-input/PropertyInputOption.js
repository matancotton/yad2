import React, { useContext, useEffect, useState } from "react";
import { editPropertySearchAction } from "../../../../../actions/searchFilterAction";
import { PostsContext } from "../../../../../contexts/PostsContext";
import Arrow from "../../../../general/Arrow";
import CheckBox from "../../../../general/CheckBox";
import OptionContainer from "../OptionContainer";
import { propertyChoice } from "../../../../../values/adValues/address";

const PropertyInputOption = ({ property, cssClass }) => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);
    const [isChecked, setIsChecked] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const onOptionClicked = (e) => {
        e.stopPropagation();
        let properties = [...searchFilterState.property];
        if (property.value === "כל סוגי הנכסים") {
            if (isChecked) {
                properties = [];
            } else {
                properties = propertyChoice;
            }
        } else {
            if (isChecked) {
                if (!!property.data) {
                    property.data.forEach((prop) => {
                        if (properties.includes(prop.value))
                            properties.splice(
                                properties.indexOf(prop.value),
                                1
                            );
                    });
                } else if (properties.includes(property.value))
                    properties.splice(properties.indexOf(property.value), 1);
            } else {
                if (!!property.data) {
                    property.data.forEach((prop) => {
                        if (!properties.includes(prop.value))
                            properties.push(prop.value);
                    });
                } else properties.push(property.value);
            }
        }
        searchFilterDispatch(editPropertySearchAction(properties));
    };

    useEffect(() => {
        if (property.value === "כל סוגי הנכסים") {
            if (searchFilterState.property.length === 20) setIsChecked(true);
            else setIsChecked(false);
            return;
        }
        if (!!property.data) {
            let isChiledClicked = true;
            property.data.forEach((child) => {
                if (!searchFilterState.property.includes(child.value)) {
                    isChiledClicked = false;
                    return;
                }
            });
            setIsChecked(isChiledClicked);
            return;
        }
        if (searchFilterState.property.includes(property.value))
            setIsChecked(true);
        else setIsChecked(false);
    }, [searchFilterState.property]);

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
                <OptionContainer cssClass="option-container__relative">
                    {property.data.map((property, i) => (
                        <PropertyInputOption
                            key={i}
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
