import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

const FilesGallery = ({ files, setShowGalleryMode }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imagesObj = files.map((file) => ({
            original: file,
            thumbnail: file,
        }));
        setImages(imagesObj);
    }, []);

    const onCloseClick = (e) => {
        e.stopPropagation();
        setShowGalleryMode(false);
    };

    return (
        <div className="modal__container gallery__container">
            <div className="files-gallery">
                <ImageGallery items={images} />
                <div className="close-gallery" onClick={onCloseClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
        </div>
    );
};

export default FilesGallery;
