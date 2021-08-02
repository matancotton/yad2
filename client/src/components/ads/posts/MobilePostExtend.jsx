import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PhoneNumber from "./contact-datils/PhoneNumber";
import PostExtended from "./PostExtended";
import ImageGallery from "react-image-gallery";
import PostFiles from "./PostFiles";

const MobilePostExtend = ({ post, setIsPostOpen }) => {
    const galleryFiles = () => {
        return post.files.map((file) => ({
            original: file,
            thumbnail: file,
        }));
    };

    return (
        <div className="mobile-post__extended__container">
            <div className="mobile-post__extended">
                <ImageGallery
                    items={galleryFiles()}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    thumbnailWidth="0"
                />
                <PostExtended post={post} />
                <PhoneNumber contact={post.contact} />
            </div>
            <div
                className="close-post"
                onClick={() => {
                    setIsPostOpen(false);
                }}
            >
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    );
};

export default MobilePostExtend;
