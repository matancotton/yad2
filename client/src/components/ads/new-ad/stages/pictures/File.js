import React, { useEffect, useState } from "react";
import { faPlus, faVideo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const File = ({ files, setFiles, index }) => {
    const [file, setFile] = useState(files[index] || "");

    const onInputImage = (e) => {
        const filesToAdd = [...files];
        filesToAdd[index] = e.target.files[0];
        setFile(e.target.files[0]);
        setFiles(filesToAdd);
    };

    const onDeleteClick = (e) => {
        e.stopPropagation();
        setFile("");
        const filesToAdd = [...files];
        filesToAdd[index] = null;
        setFiles(filesToAdd);
    };

    useEffect(() => {
        const img = document.getElementById("img-" + index);
        if (file !== "") img.src = URL.createObjectURL(file);
    }, [file, index]);
    return (
        <>
            <div
                className={
                    index === 0
                        ? "image__container first__image"
                        : "image__container"
                }
            >
                {index === 0 && (
                    <div className="first__image__text">תמונה ראשית</div>
                )}
                <input
                    type="file"
                    name="image"
                    onInput={onInputImage}
                    placeholder="upload"
                    accept={index === 1 ? "video/*" : "image/*"}
                />
                {index === 1 ? (
                    <div className="text__container">
                        <FontAwesomeIcon icon={faVideo} />
                        <span>העלאת סרטון</span>
                    </div>
                ) : (
                    <div className="text__container">
                        <FontAwesomeIcon icon={faPlus} />
                        <span>העלאת תמונה</span>
                    </div>
                )}
                {file !== "" && (
                    <div className="show-file__container">
                        <img id={"img-" + index} alt={"img-" + index} />
                        <div className="trash" onClick={onDeleteClick}>
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default File;
