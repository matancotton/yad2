import React, { useContext } from "react";
import AdvanceSearchMiddle from "./AdvanceSearchMiddle";
import AdvanceSearchTop from "./AdvanceSearchTop";
import AdvanceSearchBottom from "./AdvanceSearchBottom";
import { PostsContext } from "../../../../contexts/PostsContext";
import { getPosts } from "../../../../server/posts";
import { setPostsAction } from "../../../../actions/postsAction";

const AdvanceSearchContainer = ({ setIsDropDownOpen }) => {
    const { postsDispatch, searchFilterState, setSkip, limit } =
        useContext(PostsContext);
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
            </div>
        </div>
    );
};

export default AdvanceSearchContainer;
