import React from "react";
import SortButton from "./SortButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShekelSign, faImage } from "@fortawesome/free-solid-svg-icons";

const shekels = <FontAwesomeIcon icon={faShekelSign} />;
const image = <FontAwesomeIcon icon={faImage} />;

const SortButtons = () => {
    const onPriceClicked = () => {};

    const onImageClicked = () => {};

    return (
        <div className="sort-buttons">
            <div>הצג מודעות</div>
            <SortButton
                icon={shekels}
                text={"עם מחיר"}
                onButtonClick={onPriceClicked}
            />
            <SortButton
                icon={image}
                text={"עם תמונה"}
                onButtonClick={onImageClicked}
            />
        </div>
    );
};

export default SortButtons;
