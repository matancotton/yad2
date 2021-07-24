import React from "react";
import PostsContextProvider from "../../contexts/PostsContext";
import PostsContainer from "../ads/posts/PostsContainer";
import Header from "../header/Header";
import MainTitle from "./MainTitle";
import SearchBar from "./search/SearchBar";

const Main = () => {
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
                    <SearchBar />
                    <PostsContainer />
                    </PostsContextProvider>
                </div>
            </div>
        </>
    );
};

export default Main;
