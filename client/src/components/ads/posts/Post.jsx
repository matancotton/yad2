import React, { useEffect, useState } from "react";
import PostFiles from "./PostFiles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShekelSign } from "@fortawesome/free-solid-svg-icons";
import PostExtended from "./PostExtended";
import PhoneNumber from "./contact-datils/PhoneNumber";
import MobilePostExtend from "./MobilePostExtend";

const Post = ({ post }) => {
    const [isPostOpen, setIsPostOpen] = useState(false);
    const [isMobileMode, setIsMobileMode] = useState(false);
    const resizedToMobile = () => {
        if (window.innerWidth < 650) setIsMobileMode(true);
        else setIsMobileMode(false);
    };

    useEffect(() => {
        resizedToMobile();
        window.addEventListener("resize", resizedToMobile);

        return () => {
            window.removeEventListener("resize", resizedToMobile);
        };
    }, []);

    return (
        <>
            <div
                className={`post ${isPostOpen ? "large" : ""}`}
                onClick={() => setIsPostOpen(!isPostOpen)}
            >
                <PostFiles isPostOpen={isPostOpen} files={post.files} />
                <div className="address">
                    <div>
                        <h2>{`${post.address.street} ${post.address.houseNumber}`}</h2>
                        <div>{`${post.address.property}, ${post.address.region}, ${post.address.city}`}</div>
                    </div>
                </div>
                <div className="about">
                    <div>
                        <div>{post.about.roomsNumber}</div>
                        <div>חדרים</div>
                    </div>
                    <div>
                        <div>
                            {!!post.address.floor ? post.address.floor : "קרקע"}
                        </div>
                        {!!post.address.floor && <div>קומה</div>}
                    </div>
                    <div>
                        <div>
                            {post.payment.squareFeet
                                ?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </div>
                        <div>מ"ר</div>
                    </div>
                </div>
                <div className="price">
                    <h2>
                        {post.payment.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        <FontAwesomeIcon icon={faShekelSign} />
                    </h2>
                    <div className="details">לחצו לפרטים</div>
                </div>
                {isPostOpen && !isMobileMode && (
                    <PhoneNumber contact={post.contact} />
                )}
            </div>
            {isPostOpen && !isMobileMode && <PostExtended post={post} />}
            {isPostOpen && isMobileMode && (
                <MobilePostExtend post={post} setIsPostOpen={setIsPostOpen} />
            )}
        </>
    );
};

export default Post;
