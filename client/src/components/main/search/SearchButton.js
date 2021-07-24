import React, { useContext } from "react";
import { PostsContext } from "../../../contexts/PostsContext";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getPosts } from "../../../server/posts";
import { setPostsAction } from "../../../actions/postsAction";

const SearchButton = () => {
    const { postsDispatch, searchFilterState, setSkip, limit } =
        useContext(PostsContext);

    const onSearchClick = () => {
        setSkip(0);
        getPosts(searchFilterState, 0, limit).then((data) => {
            postsDispatch(setPostsAction(data));
        });
    };

    return (
        <button
            type="button"
            className="button search-button"
            onClick={onSearchClick}
        >
            <FontAwesomeIcon icon={faSearch} />
            <span>חיפוש</span>
        </button>
    );
};

export default SearchButton;
