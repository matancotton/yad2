import Reat, { createContext, useReducer } from "react";
import loginModeReducer from "../reducers/loginModeReducer";

export const LoginModeContext = createContext();

const LoginModeContextProvaider = (props) => {
    const [loginModeState, loginModeDispatch] = useReducer(
        loginModeReducer,
        true
    );
    return (
        <LoginModeContext.Provider
            value={{ loginModeState, loginModeDispatch }}
        >
            {props.children}
        </LoginModeContext.Provider>
    );
};

export default LoginModeContextProvaider;
