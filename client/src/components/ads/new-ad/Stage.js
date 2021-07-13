import React, { useEffect, useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stage = ({ stage, component }) => {
    const [cssState, setCssState] = useState(
        !!stage.isEnable ? "stage" : "stage disabled"
    );
    useEffect(() => {
        if (stage.isDone) setCssState("stage disabled pointer");
        if (stage.isEnable) setCssState("stage");
    }, [stage.isDone, stage.isEnable]);

    return (
        <div className={cssState}>
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

            {!!stage.isEnable && component}
        </div>
    );
};

export default Stage;
