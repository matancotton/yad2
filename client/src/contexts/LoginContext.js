import React, { createContext, useReducer, useState } from "react";
import { getUserFromCookie } from "../cookies/cookie";
import loginReducer, { initialUserState } from "../reducers/loginReducer";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [userState, userDispatch] = useReducer(
        loginReducer,
        cookieUserData || initialUserState
    );

    return (
        <LoginContext.Provider
            value={{
                userState,
                userDispatch,
                isModalOpen,
                setIsModalOpen,
                isLoginMode,
                setIsLoginMode,
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;
