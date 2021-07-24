import React from "react";

const StepsButtons = ({ onNextSubmit, onPreviewSubmit }) => {
    return (
        <div className="buttons__container">
            <button type="button" className="back">
                חזרה
            </button>
            <button className="next" onClick={onNextSubmit}>
                להמשיך לשלב הבא
            </button>
        </div>
    );
};

export default StepsButtons;
