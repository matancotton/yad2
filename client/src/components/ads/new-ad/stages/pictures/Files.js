import React, { useContext, useState } from "react";
import File from "./File";
import { moveToNextStageAction } from "../../../../../actions/publishAdAction";
import { PublishContext } from "../../../../../contexts/PublishAdContext";
import StepsButtons from "../StepsButtons";

const Files = () => {
    const { adState, dispatchAd } = useContext(PublishContext);
    const [data] = useState(adState.data[3].form);
    const [files, setFiles] = useState(data || []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatchAd(moveToNextStageAction(files, 3));
    };

    return (
        <div className="stage__container">
            <div>
                ידעת שמודעות עם תמונות ברורות מקבלות פי 10 יותר פניות? לא להסס
                להעלות לפה תמונות (אפשר עד 10 + וידאו) ולהבליט את הצדדים הטובים
                ביותר של הנכס
            </div>
            <div className="images__container front-image__container">
                <File files={files} setFiles={setFiles} index={1} />
                <File
                    first={true}
                    files={files}
                    setFiles={setFiles}
                    index={0}
                />
            </div>
            <div className="images__container">
                <File files={files} setFiles={setFiles} index={2} />
                <File files={files} setFiles={setFiles} index={3} />
                <File files={files} setFiles={setFiles} index={4} />
                <File files={files} setFiles={setFiles} index={5} />
                <File files={files} setFiles={setFiles} index={6} />
                <File files={files} setFiles={setFiles} index={7} />
                <File files={files} setFiles={setFiles} index={8} />
                <File files={files} setFiles={setFiles} index={9} />
                <File files={files} setFiles={setFiles} index={10} />
            </div>

            <StepsButtons onNextSubmit={onFormSubmit} />
        </div>
    );
};

export default Files;
