import React from "react";
import moment from "moment";

const PostProp = ({ prop, title, date }) => {
    return (
        <div>
            <span className="post__details__category">{title}</span>
            {!!date ? (
                <span className="post__details__prop">
                    {moment(prop).format("DD/MM/YYYY")}
                </span>
            ) : (
                <span className="post__details__prop">{prop}</span>
            )}
        </div>
    );
};

export default PostProp;
