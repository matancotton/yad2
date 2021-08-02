import React, { useEffect, useState } from "react";
import PostsContextProvider from "../../contexts/PostsContext";
import PostsContainer from "../ads/posts/PostsContainer";
import Header from "../header/Header";
import MainTitle from "./MainTitle";
import SearchBarMobile from "./search/search-bar-mobile/SearchBarMobile";
import SearchBar from "./search/SearchBar";

const Main = () => {
    const [mobileMode, setMobileMode] = useState(false);

    const resizedScreen = () => {
        if (window.innerWidth < 650) setMobileMode(true);
        else setMobileMode(false);
    };

    useEffect(() => {
        resizedScreen();
        window.addEventListener("resize", resizedScreen);

        return () => {
            window.removeEventListener("resize", resizedScreen);
        };
    }, []);
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="main-section">
                    <MainTitle />
                    <img
                        className="commercial"
                        src="https://tpc.googlesyndication.com/simgad/9205463189626147643"
                        alt="כונס נדלן"
                    />
                    <PostsContextProvider>
                        {mobileMode ? <SearchBarMobile /> : <SearchBar />}

                        <PostsContainer />
                    </PostsContextProvider>
                </div>
            </div>
        </>
    );
};

export default Main;
