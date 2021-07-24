import React from "react";
import plans from "../../../../../values/adValues/plansValues";
import Plan from "./Plan";

const Publish = () => {
    return (
        <div className="stage__container">
            <div className="publish__title">
                זהו, אנחנו בסוף. לנו נשאר לשמור את המודעה שלך, לך נשאר לבחור את
                מסלול הפרסום.
            </div>
            <div className="plans__container">
                <div>באיזה מסלול לפרסם את המודעה? זה הזמן לבלוט מעל כולם</div>
                <div className="plan__list">
                    {plans.map((plan) => (
                        <Plan key={plan.title} plan={plan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Publish;
