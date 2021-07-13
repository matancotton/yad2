import React, { useState } from "react";
import Image from "./Image";

const Pictures = () => {
    const [images, setImages] = useState([]);
    const [video, setVideo] = useState("");

    const onFormSubmit = (e) => {
        const formData = new formData();
        if (images.length > 0) formData.append("images", images);
        if (video !== "") formData.append("video", video);
    };

    return (
        <div className="stage__container">
            <div>
                ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות? לא להסס
                להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים
                ביותר של הנכס
            </div>
            <div>
                <Image cssClass="" />
            </div>
        </div>
    );
};

export default Pictures;
