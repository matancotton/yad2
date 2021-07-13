import React from "react";
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
                        src="https://tpc.googlesyndication.com/simgad/9205463189626147643"
                        alt="כונס נדלן"
                    />
                    <SearchBar />
                </div>
            </div>
        </>
    );
};

export default Main;
