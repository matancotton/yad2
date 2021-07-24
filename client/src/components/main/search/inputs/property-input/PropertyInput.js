import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../../../../contexts/PostsContext";
import properties from "../../../../../values/search-bar/properties";
import SelectInput from "../../../../general/SelectInput";
import OptionContainer from "../OptionContainer";
import PropertyInputOption from "./PropertyInputOption";

const PropertyInput = () => {
    const { searchFilterState } = useContext(PostsContext);
    const [placeHolder, setPlaceHolder] = useState("בחרו סוגי נכסים");

    useEffect(() => {
        if (searchFilterState.property.length > 0)
            setPlaceHolder(
                `נבחרו ${searchFilterState.property.length} סוגי נכסים`
            );
        else setPlaceHolder("בחרו סוגי נכסים");
    }, [searchFilterState.property]);

    return (
        <div className="search-bar__input">
            <span className="title">סוג נכס</span>
            <SelectInput placeHolder={placeHolder} cssClass="property-select">
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
