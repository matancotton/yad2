import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import LoginContextProvider from "../../contexts/LoginContext";
import LoginModeContextProvaider from "../../contexts/LoginModeContext";
import Header from "../header/Header";
import Main from "../main/Main";
import NewAd from "../ads/new-ad/NewAd";
import PublishContextProvider from "../../contexts/PublishAdContext";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <LoginModeContextProvaider>
                    <Switch>
                        <Route path="/" component={Main} exact={true} />
                        <PublishContextProvider>
                            <Route path="/publish" component={NewAd} />
                        </PublishContextProvider>
                        <Route path="*" component={Main} />
                    </Switch>
                </LoginModeContextProvaider>
            </LoginContextProvider>
        </BrowserRouter>
    );
};

export default AppRouter;
