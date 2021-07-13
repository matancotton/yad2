import React, { createContext, useReducer } from "react";
import publishAdReducer, { initialAd } from "../reducers/publishAdReducer";

export const PublishContext = createContext();

const PublishContextProvider = (props) => {
    const [adState, dispatchAd] = useReducer(publishAdReducer, initialAd);
    return (
        <PublishContext.Provider value={{ adState, dispatchAd }}>
            {props.children}
        </PublishContext.Provider>
    );
};

export default PublishContextProvider;
