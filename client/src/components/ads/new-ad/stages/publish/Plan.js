import React, { useContext, useState } from "react";
import { LoginContext } from "../../../../../contexts/LoginContext";
import { PublishContext } from "../../../../../contexts/PublishAdContext";
import { uploadFiles } from "../../../../../server/files";
import { uploadPost } from "../../../../../server/posts";
import PublishModal from "./PublishModal";

const Plan = ({ plan }) => {
    const { userState } = useContext(LoginContext);
    const { adState } = useContext(PublishContext);
    const [planSubmited, setIsPlanSubmited] = useState(false);

    const onPublishClick = async (e) => {
        let post = [...adState.data];
        const files = post[3];
        post.splice(3, 1);
        post.splice(4, 1);
        post = post.map((data) => data.form);
        try {
            const { id } = await uploadPost(userState.token, {
                address: post[0],
                about: post[1],
                payment: post[2],
                contact: post[3],
            });
            const formData = new FormData();
            const filterdFiles = files.form.filter((file) => file != null);
            filterdFiles.forEach((file) => {
                formData.append("files", file);
            });
            await uploadFiles(formData, id, userState.token);
            setIsPlanSubmited(true);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className={plan.recommended ? "plan recommended" : "plan"}>
                <div className="plan__title">{plan.title}</div>
                {!!plan.recommended && (
                    <div className="crown">
                        {plan.recommended}
                        <span>מומלץ</span>
                    </div>
                )}
                <img className="plan__img" src={plan.image} alt={plan.title} />
                <ul className="plan-details">
                    {plan.details.map((detail, i) => (
                        <li key={i} className={detail.weak && "weak"}>
                            <span>{detail.icon}</span>
                            <span>{detail.text}</span>
                        </li>
                    ))}
                </ul>
                {!!plan.button.number ? (
                    <button
                        className={
                            plan.recommended
                                ? "plan__button button-recommended"
                                : "plan__button"
                        }
                    >
                        <span>{plan.button.number}</span>
                        <span>{plan.button.icon} / </span>
                        <span>{plan.button.days}</span>
                    </button>
                ) : (
                    <button onClick={onPublishClick} className="plan__button">
                        {plan.button}
                    </button>
                )}
            </div>

            {planSubmited && <PublishModal />}
        </>
    );
};

export default Plan;
