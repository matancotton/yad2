import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginContextProvider from "../../contexts/LoginContext";
import Main from "../main/Main";
import NewAd from "../ads/new-ad/NewAd";
import PublishContextProvider from "../../contexts/PublishAdContext";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
                <Switch>
                    <Route path="/" component={Main} exact={true} />
                    <PublishContextProvider>
                        <Route path="/publish" component={NewAd} />
                    </PublishContextProvider>
                </Switch>
            </LoginContextProvider>
        </BrowserRouter>
    );
};

export default AppRouter;
