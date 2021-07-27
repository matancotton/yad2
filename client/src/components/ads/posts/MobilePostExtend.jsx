import React from "react";
import PostExtended from "./PostExtended";
import PostFiles from "./PostFiles";

const MobilePostExtend = ({ post }) => {
    return (
        <div className="mobile-post__extended">
            <PostFiles isPostOpen={true} files={post.files} />
            <PostExtended post={post} />
        </div>
    );
};

export default MobilePostExtend;
