import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../contexts/LoginContext";
import { PublishContext } from "../../../contexts/PublishAdContext";
import LoginModal from "../../login/LoginModal";
import NewAdHeader from "./ad-header/NewAdHeader";
import Stage from "./Stage";

const NewAd = () => {
    const { userState } = useContext(LoginContext);
    const { adState } = useContext(PublishContext);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if (!userState.user) setShowLoginModal(true);
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
                            component={adState.components[i]}
                        />
                    ))}
                </div>
                {!!showLoginModal && (
                    <LoginModal setShowLoginModal={setShowLoginModal} />
                )}
            </div>
        </>
    );
};

export default NewAd;
