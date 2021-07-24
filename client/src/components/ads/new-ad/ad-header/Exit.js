import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PublishContext } from "../../../../contexts/PublishAdContext";
import { resetAdAction } from "../../../../actions/publishAdAction";

const Exit = () => {
    const history = useHistory();
    const { dispatchAd } = useContext(PublishContext);

    const onExitClick = () => {
        dispatchAd(resetAdAction());
        history.push("/");
    };

    return (
        <button className="exit pointer" onClick={onExitClick}>
            <span>יציאה</span>
            <FontAwesomeIcon icon={faTimes} />
        </button>
    );
};

export default Exit;
