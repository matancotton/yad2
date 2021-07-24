import React, { useContext, useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInfo from "./ContactInfo";
import StepsButtons from "../StepsButtons";
import { moveToNextStageAction } from "../../../../../actions/publishAdAction";
import { PublishContext } from "../../../../../contexts/PublishAdContext";

const Contact = () => {
    const { adState, dispatchAd } = useContext(PublishContext);
    const [data] = useState(adState.data[4].form);
    const [mainName, setMainName] = useState(data?.mainName || "");
    const [mainPhone, setMainPhone] = useState(data?.mainPhone || "");
    const [secondName, setSecondName] = useState(data?.secondName || "");
    const [secondPhone, setSecondPhone] = useState(data?.secondPhone || "");
    const [addContact, setAddContact] = useState(data?.addContact || false);

    const onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const form = {
            mainName,
            mainPhone,
            secondName,
            secondPhone,
            addContact,
        };
        dispatchAd(moveToNextStageAction(form, 4));
    };

    return (
        <div className="stage__container contact__container">
            <ContactInfo
                name={mainName}
                phone={mainPhone}
                main={true}
                setName={setMainName}
                setPhone={setMainPhone}
            />
            {addContact ? (
                <ContactInfo
                    name={secondName}
                    phone={secondPhone}
                    setName={setSecondName}
                    setPhone={setSecondPhone}
                />
            ) : (
                <div
                    className="add-contact"
                    onClick={(e) => {
                        setAddContact(true);
                    }}
                >
                    <span>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </span>
                    הוספת איש קשר נוסף
                </div>
            )}
            {mainName !== "" && mainPhone !== "" && (
                <StepsButtons onNextSubmit={onFormSubmit} />
            )}
        </div>
    );
};

export default Contact;
