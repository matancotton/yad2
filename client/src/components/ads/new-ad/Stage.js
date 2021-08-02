import React, { useContext, useEffect, useState } from "react";
import { faCheckCircle, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PublishContext } from "../../../contexts/PublishAdContext";
import { updateStageAction } from "../../../actions/publishAdAction";

const Stage = ({ stage, component, index }) => {
    const { dispatchAd } = useContext(PublishContext);
    const [cssState, setCssState] = useState(
        !!stage.isEnable ? "stage" : "stage disabled"
    );
    useEffect(() => {
        if (stage.isDone) setCssState("stage disabled pointer");
        else if (stage.isEnable) setCssState("stage");
        else setCssState("stage disabled");
    }, [stage.isDone, stage.isEnable]);

    const onStageClicked = () => {
        if (!stage.isDone) return;
        dispatchAd(updateStageAction(index));
    };

    return (
        <div className={cssState} onClick={onStageClicked}>
            <h2>
                {stage.isDone ? (
                    <div className="icon__container">
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="icon"
                        />
                    </div>
                ) : (
                    <span className="number">{stage.number}</span>
                )}

                <span className="stage__title">{stage.title}</span>
            </h2>
            {!!stage.isDone && (
                <div className="edit">
                    <span>
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                    <span className="edit-text">עריכה</span>
                </div>
            )}

            {stage.isEnable && component}
        </div>
    );
};

export default Stage;
