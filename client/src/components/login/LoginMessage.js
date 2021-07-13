import React, { useContext } from "react";
import { LoginModeContext } from "../../contexts/LoginModeContext";

const LoginMessage = () => {
    const { loginModeState } = useContext(LoginModeContext);
    return (
        <div className="login-message">
            <div>
                <img
                    alt="yad2"
                    src="https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/New_logo_negative.svg"
                />
            </div>
            <h2>ברוכים הבאים לאתר יד2</h2>
            <div>
                {loginModeState ? "טוב לראות אותך שוב!" : "הצטרפו לקהילה שלנו!"}
            </div>
            <div className="lamp-icon">
                <img
                    alt="sapa"
                    src="https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/couch_lamp.svg"
                />
            </div>
        </div>
    );
};

export default LoginMessage;
