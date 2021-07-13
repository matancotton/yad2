import React from "react";

const Image = ({ cssClass }) => {
    const onInputImage = (e) => {
        const pic = e.target.files[0];
        console.log(pic);
    };
    return (
        <div className={cssClass}>
            <input
                type="file"
                name="image"
                onInput={onInputImage}
                placeholder="upload"
            />
        </div>
    );
};

export default Image;
