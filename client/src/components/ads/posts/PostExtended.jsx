import React from "react";
import { propertyFeatures } from "../../../values/adValues/aboutValues";
import PostFeature from "./post-details/PostFeature";
import PostProp from "./post-details/PostProp";

const PostExtended = ({ post }) => {
    return (
        <div className="post__extended">
            <div className="details">
                <h3>תיאור הנכס</h3>
                <div className="details-text">
                    {post.about.textArea || "לא קיים תיאור"}
                </div>
            </div>
            <div className="props">
                <PostProp title="מצב הנכס" prop={post.address.condition} />
                <PostProp
                    title="תאריך כניסה"
                    prop={post.payment.date}
                    date={true}
                />
                <PostProp title="קומות בבניין" prop={post.address.maxFloor} />
                <PostProp title="מרפסות" prop={post.about.balcony} />
                <PostProp title="חניות" prop={post.about.parking} />
            </div>
            <h3 className="features-title">מה יש בנכס?</h3>
            <div className="features">
                {propertyFeatures.map((feature) => (
                    <PostFeature
                        key={feature.value}
                        feature={feature}
                        features={post.about.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default PostExtended;
