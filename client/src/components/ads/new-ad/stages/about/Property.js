import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Property = ({ icon, text, featuresState, setFeaturesState }) => {
    const [cssState, setCssState] = useState("property");

    const onFeatureClick = () => {
        const features = [...featuresState];
        if (features.includes(text)) {
            features.splice(features.indexOf(text), 1);
            setCssState("property");
        } else {
            features.push(text);
            setCssState("property selected");
        }
        setFeaturesState(features);
    };
    return (
        <div className={cssState} onClick={onFeatureClick}>
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </div>
    );
};

export default Property;
