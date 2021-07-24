import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../../contexts/LoginContext";
import { PublishContext } from "../../../contexts/PublishAdContext";
import adComponentsStages from "../../../values/adValues/adComponentsStages";
import LoginModal from "../../login/LoginModal";
import NewAdHeader from "./ad-header/NewAdHeader";
import Stage from "./Stage";

const NewAd = () => {
    const { userState, isModalOpen, setIsModalOpen } = useContext(LoginContext);
    const { adState } = useContext(PublishContext);

    useEffect(() => {
        console.log(adState);
        if (!userState.user) setIsModalOpen(true);
    }, [userState.user]);

    return (
        <>
            <NewAdHeader />
            <div className="new-ad__container">
                <div className="new-ad">
                    {adState.data.map((stage, i) => (
                        <Stage
                            key={stage.number}
                            stage={stage}
                            component={adComponentsStages[i]}
                            index={i}
                        />
                    ))}
                </div>
                {!!isModalOpen && <LoginModal />}
            </div>
        </>
    );
};

export default NewAd;
