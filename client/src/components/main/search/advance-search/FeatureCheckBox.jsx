import React, { useState, useContext, useEffect } from "react";
import CheckBox from "../../../general/CheckBox";
import { PostsContext } from "../../../../contexts/PostsContext";
import { editFeaturesAction } from "../../../../actions/searchFilterAction";

const FeatureCheckBox = ({ value }) => {
    const { searchFilterState, searchFilterDispatch } =
        useContext(PostsContext);
    const [isChecked, setIsChecked] = useState(false);

    const onCheckClicked = () => {
        const features = [...searchFilterState.features];
        if (features.includes(value)) {
            features.splice(features.indexOf(value), 1);
            setIsChecked(false);
        } else {
            features.push(value);
            setIsChecked(true);
        }

        searchFilterDispatch(editFeaturesAction(features));
    };

    useEffect(() => {
        if (searchFilterState.features.includes(value)) setIsChecked(true);
        else setIsChecked(false);
    }, [searchFilterState.features]);

    return (
        <span className="item" onClick={onCheckClicked}>
            <CheckBox isChecked={isChecked} />
            {value}
        </span>
    );
};

export default FeatureCheckBox;
