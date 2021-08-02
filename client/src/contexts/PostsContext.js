import React, { createContext, useEffect, useReducer, useState } from "react";
import { setPostsAction } from "../actions/postsAction";
import postsReducer, { initialPosts } from "../reducers/postsReducer";
import searchFilterReducer, {
    initSearchFilter,
} from "../reducers/searchFilterReducer";
import sortReducer, { initSortState } from "../reducers/sortReducer";
import { getPosts } from "../server/posts";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
    const [postsState, postsDispatch] = useReducer(postsReducer, initialPosts);
    const [skip, setSkip] = useState(postsState?.length || 0);
    const [searchFilterState, searchFilterDispatch] = useReducer(
        searchFilterReducer,
        initSearchFilter
    );
    const limit = 5;
    const { sortState, sortDispatch } = useReducer(sortReducer, initSortState);

    useEffect(() => {
        getPosts(searchFilterState, skip, limit)
            .then((data) => postsDispatch(setPostsAction(data)))
            .catch((err) => {
                postsDispatch(setPostsAction([]));
            });
    }, []);

    return (
        <PostsContext.Provider
            value={{
                postsState,
                postsDispatch,
                searchFilterState,
                searchFilterDispatch,
                skip,
                setSkip,
                limit,
                sortState,
                sortDispatch,
            }}
        >
            {props.children}
        </PostsContext.Provider>
    );
};

export default PostsContextProvider;
