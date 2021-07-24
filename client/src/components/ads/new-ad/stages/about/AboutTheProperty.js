import React, { useContext, useState } from "react";
import { moveToNextStageAction } from "../../../../../actions/publishAdAction";
import { PublishContext } from "../../../../../contexts/PublishAdContext";
import { propertyFeatures } from "../../../../../values/adValues/aboutValues";
import roomNumber from "../../../../../values/search-bar/roomsNumber";
import Counter from "./Counter";
import Property from "./Property";
import PropertyTextArea from "./PropertyTextArea";
import StepsButtons from "../StepsButtons";

const AboutTheProperty = () => {
    const { adState, dispatchAd } = useContext(PublishContext);
    const [data] = useState(adState.data[1].form);
    const [rooms, setRooms] = useState(data?.roomsNumber || "בחירת מספר חדרים");
    const [roomsError, setRoomsError] = useState(null);
    const [parking, setParking] = useState(data?.parking || 0);
    const [balcony, setBalcony] = useState(data?.balcony || 0);
    const [featuresState, setFeaturesState] = useState(data?.features || []);
    const [textArea, setTextArea] = useState(data?.textArea || "");

    const onSelectChange = (e) => {
        const value = e.target.value;
        setRooms(value);
        setRoomsError(null);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (rooms == null) {
            setRoomsError("שדה חובה מספר חדרים");
            return;
        }

        const form = {
            roomsNumber: rooms,
            parking,
            balcony,
            features: featuresState,
            textArea,
        };
        dispatchAd(moveToNextStageAction(form, 1));
    };
    return (
        <div className="stage__container about__container">
            <form>
                <div className="input__container">
                    <div>מספר חדרים</div>
                    <select
                        defaultValue={rooms}
                        className="input"
                        onChange={onSelectChange}
                    >
                        <option
                            value={"בחירת מספר חדרים"}
                            disabled={true}
                            hidden={true}
                        >
                            בחירת מספר חדרים
                        </option>
                        {roomNumber.map((room, i) => (
                            <option key={room} value={i === 0 ? 0 : room}>
                                {i === 0 ? 0 : room}
                            </option>
                        ))}
                    </select>
                    {!!roomsError && (
                        <div className="field-error">{roomsError}</div>
                    )}
                </div>
                <div className="input__container">
                    <div>חניה</div>
                    <Counter counter={parking} setCounter={setParking} />
                </div>
                <div className="input__container">
                    <div>מרפסת</div>
                    <Counter counter={balcony} setCounter={setBalcony} />
                </div>
                <div className="features__container">
                    <h2 className="title">מאפייני הנכס</h2>
                    <div className="features">
                        {propertyFeatures.map((featur) => (
                            <Property
                                key={featur.value}
                                icon={featur.icon}
                                text={featur.value}
                                featuresState={featuresState}
                                setFeaturesState={setFeaturesState}
                            />
                        ))}
                    </div>
                </div>
                <div className="textarea__container">
                    <div className="title">מה חשוב לך שידעו על הנכס?</div>
                    <PropertyTextArea
                        placeHolder="זה  המקום לתאר את הפרטים הבולטים. למשל, האם נערך שיפוץ במבנה, מה שופץ, כיווני אוויר, האווירה ברחוב וכ'ו"
                        value={textArea}
                        setValue={setTextArea}
                    />
                </div>

                <StepsButtons onNextSubmit={onFormSubmit} />
            </form>
        </div>
    );
};

export default AboutTheProperty;
