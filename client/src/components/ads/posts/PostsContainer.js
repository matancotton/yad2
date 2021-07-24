import React, { useContext, useEffect, useRef, useState } from "react";
import { PostsContext } from "../../../contexts/PostsContext";
import SortBar from "../../main/sort-bar/SortBar";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPosts } from "../../../server/posts";
import { addPostsAction, setPostsAction } from "../../../actions/postsAction";
import Loader from "../../general/Loader";
const PostsContainer = () => {
    const {
        postsState,
        postsDispatch,
        skip,
        setSkip,
        limit,
        searchFilterState,
    } = useContext(PostsContext);

    const [hasMorePosts, setHasMorePosts] = useState(true);
    const isLoadingRef = useRef(false);

    const fetchMorePosts = () => {
        if (!isLoadingRef.current) {
            isLoadingRef.current = true;
            getPosts(searchFilterState, skip, limit)
                .then((data) => {
                    if (data.length > 0) postsDispatch(addPostsAction(data));
                    if (data.length < limit) setHasMorePosts(false);
                    isLoadingRef.current = false;
                })
                .catch((err) => {
                    postsDispatch(setPostsAction([]));
                });
        }
    };

    useEffect(() => {
        setSkip(postsState?.length || 0);
    }, [postsState]);

    return (
        <div className="posts__container">
            <SortBar />
            {postsState?.length > 0 ? (
                <div className="posts">
                    <InfiniteScroll
                        dataLength={limit}
                        next={fetchMorePosts}
                        className="scroller"
                        hasMore={hasMorePosts}
                        loader={<Loader />}
                        scrollableTarget="posts"
                        endMessage={<div></div>}
                    >
                        {postsState.map((post) => (
                            <Post key={post._id} post={post} />
                        ))}
                    </InfiniteScroll>
                </div>
            ) : (
                <div className="no-result">אין תוצאות</div>
            )}
        </div>
    );
};

export default PostsContainer;
