import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import LoginModal from "../login/LoginModal";

const LoginRoute = ({ component: Component, ...rest }) => {
    const { userState } = useContext(LoginContext);

    return (
        <Route
            {...rest}
            component={(props) => {
                return !userState.user ? (
                    <LoginModal />
                ) : (
                    <Component {...props} {...rest} />
                );
            }}
        />
    );
};

export default LoginRoute;
