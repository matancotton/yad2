import React, { useEffect, useState } from "react";
import { propertyFeatures } from "../../../../values/adValues/aboutValues";
import FeatureCheckBox from "./FeatureCheckBox";

const AdvanceSearchTop = () => {
    return (
        <div className="advance-search__top">
            <div className="title">מאפייני דירה</div>
            <div className="appartment-details">
                {propertyFeatures.map(({ value }) => (
                    <FeatureCheckBox key={value} value={value} />
                ))}
            </div>
        </div>
    );
};

export default AdvanceSearchTop;
