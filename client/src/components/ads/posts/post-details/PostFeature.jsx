import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const PostFeature = ({ feature, features }) => {
    const [cssClass, setCssClass] = useState("feature");

    useEffect(() => {
        if (!features.includes(feature.value)) setCssClass("feature disabled");
    }, [features]);
    return (
        <div className={cssClass}>
            <span>
                <FontAwesomeIcon icon={feature.icon} />
            </span>
            <span className="feature-value">{feature.value}</span>
        </div>
    );
};

export default PostFeature;
