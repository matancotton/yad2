import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faClone } from "@fortawesome/free-solid-svg-icons";
import FilesGallery from "./FilesGallery";

const PostFiles = ({ files, isPostOpen }) => {
    const [showGallery, setShowGalleryMode] = useState(false);
    const onFilesClick = (e) => {
        if (isPostOpen) {
            e.stopPropagation();
            setShowGalleryMode(true);
        }
    };

    return (
        <div className="post__files" onClick={onFilesClick}>
            <div className="img-container">
                <span className="wish-container">
                    <FontAwesomeIcon className="wish" icon={faHeart} />
                </span>

                <img className="first-image" src={files[0]} alt="" />
                {files.length > 1 && (
                    <span className="extra-files">
                        <FontAwesomeIcon icon={faClone} />
                        <span>+{files.length - 1}</span>
                    </span>
                )}
            </div>
            {showGallery && (
                <FilesGallery
                    files={files}
                    setShowGalleryMode={setShowGalleryMode}
                />
            )}
        </div>
    );
};

export default PostFiles;
