import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const PublishModal = () => {
    const history = useHistory();

    const onButtonClicked = () => {
        history.push("/");
    };

    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        }, 1500);
    }, []);

    return (
        <div className="modal__container">
            <div className="publish-modal">
                <h2 className="title">
                    המודעה פורסמה בהצלחה, הינך מועבר לדף הבית
                </h2>
                <button onClick={onButtonClicked} className="button">
                    אישור
                </button>
            </div>
        </div>
    );
};

export default PublishModal;
