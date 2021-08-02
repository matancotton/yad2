import React, { useContext, useEffect } from "react";
import AdvanceSearchMiddle from "./AdvanceSearchMiddle";
import AdvanceSearchTop from "./AdvanceSearchTop";
import AdvanceSearchBottom from "./AdvanceSearchBottom";
import { PostsContext } from "../../../../contexts/PostsContext";
import { getPosts } from "../../../../server/posts";
import { setPostsAction } from "../../../../actions/postsAction";
import { resetSearchBarAction } from "../../../../actions/searchFilterAction";

const AdvanceSearchContainer = ({ setIsDropDownOpen }) => {
    const {
        postsDispatch,
        searchFilterState,
        searchFilterDispatch,
        setSkip,
        limit,
    } = useContext(PostsContext);

    const onCleanClicked = () => {
        searchFilterDispatch(resetSearchBarAction());
    };

    const onAdvanceSubmit = () => {
        setSkip(0);
        getPosts(searchFilterState, 0, limit).then((data) => {
            postsDispatch(setPostsAction(data));
            setIsDropDownOpen(false);
        });
    };

    return (
        <div className="advance-search__container">
            <AdvanceSearchTop />
            <AdvanceSearchMiddle />
            <AdvanceSearchBottom />
            <div className="advance-search__submit">
                <button
                    className="button search-button"
                    onClick={onAdvanceSubmit}
                >
                    חיפוש
                </button>
                <div className="clean-search-bar" onClick={onCleanClicked}>
                    נקה
                </div>
            </div>
        </div>
    );
};

export default AdvanceSearchContainer;
