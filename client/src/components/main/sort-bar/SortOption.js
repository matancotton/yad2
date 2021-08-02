import React, { useContext } from "react";
import { PostsContext } from "../../../contexts/PostsContext";
import { getPosts } from "../../../server/posts";

const SortOption = ({ value, name }) => {
    const { postsDispatch, searchFilterState, skip, limit } =
        useContext(PostsContext);
    const onSortClicked = () => {
        getPosts(searchFilterState, 0, limit, { value }).then((data) => {
            postsDispatch(data);
        });
    };

    return (
        <div className="sort-option">
            <input
                type="radio"
                name="sort-option"
                value={value}
                onClick={onSortClicked}
            />
            <span>{name}</span>
        </div>
    );
};

export default SortOption;
