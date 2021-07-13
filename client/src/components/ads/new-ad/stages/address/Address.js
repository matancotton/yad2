import React, { useContext, useState } from "react";
import { moveToNextStageAction } from "../../../../../actions/publishAdAction";
import { PublishContext } from "../../../../../contexts/PublishAdContext";
import {
    propertyChoice,
    propertiesCondition,
} from "../../../../../values/adValues/address";
import CheckBox from "../../../../general/CheckBox";
import StepsButtons from "../StepsButtons";

const Address = () => {
    const { adState, dispatchAd } = useContext(PublishContext);
    const [showFloor, setShowFloor] = useState(true);
    const [inputValues, setInputValues] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [inputErrors, setInputErrors] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [inputCss, setInputCss] = useState([
        "input",
        "input",
        "input",
        "input",
        "input",
        "input",
        "input",
        "input",
        "input",
    ]);
    const [checkBox, setCheckBox] = useState(false);

    const onPropertyChange = (e) => {
        const property = e.target.value;
        switch (property) {
            case propertyChoice[2]:
            case propertyChoice[4]:
            case propertyChoice[8]:
            case propertyChoice[12]:
            case propertyChoice[13]:
            case propertyChoice[14]:
            case propertyChoice[16]:
            case propertyChoice[17]:
            case propertyChoice[18]:
                setShowFloor(false);
                break;
            default:
                setShowFloor(true);
        }
        onInputChange(0, property, "שדה חובה סוג הנכס");
    };

    const onInputChange = (index, field, error) => {
        const values = [...inputValues];
        const errors = [...inputErrors];
        const css = [...inputCss];
        if (field === "" && error !== "") {
            errors[index] = error;
            css[index] = "input input-error";
        } else {
            errors[index] = "";
            css[index] = "input";
            values[index] = field;
        }
        setInputValues(values);
        setInputErrors(errors);
        setInputCss(css);
    };

    const setErrors = (fields) => {
        const errors = [...inputErrors];
        const css = [...inputCss];
        fields.forEach((field, i) => {
            if (!field) {
                errors[i] = "שדה חובה";
                css[i] = "input input-error";
            }
        });
        setInputErrors(errors);
        setInputCss(css);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        let validFields = [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
        ];
        for (let i = 0; i <= 8; i++) {
            if (i !== 3 && i !== 4 && i !== 7 && i !== 8) {
                if (inputValues[i] == "") {
                    if (i === 5 || i === 6) {
                        if (!!showFloor) {
                            validFields[i] = false;
                        }
                    } else {
                        validFields[i] = false;
                    }
                }
            }
        }
        setErrors(validFields);
        if (!validFields.includes(false)) {
            const form = {
                property: inputValues[0],
                condition: inputValues[1],
                city: inputValues[2],
                street: inputValues[3],
                houseNumber: inputValues[4],
                floor: inputValues[5],
                maxFloor: inputValues[6],
                neighborhood: inputValues[7],
                region: inputValues[8],
            };
            dispatchAd(moveToNextStageAction(form, 0));
        }
    };

    return (
        <div className="stage__container">
            <form>
                <h3>סימנו עבורך את שדות החובה. שלא נפספס פרט חשוב</h3>
                <div className="input__container">
                    <div>סוג הנכס*</div>
                    <select
                        defaultValue="דירה או אולי פנטהאוז?"
                        className={inputCss[0]}
                        onChange={onPropertyChange}
                    >
                        <option
                            disabled={true}
                            value="דירה או אולי פנטהאוז?"
                            hidden={true}
                        >
                            דירה או אולי פנטהאוז?
                        </option>
                        {propertyChoice.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="field-error">
                        {!!inputErrors[0].length > 0 && inputErrors[0]}
                    </div>
                </div>
                <div className="input__container">
                    <div>מצב הנכס*</div>
                    <select
                        defaultValue="משופץ? חדש מקבלן?"
                        className={inputCss[1]}
                        onChange={(e) =>
                            onInputChange(
                                1,
                                e.target.value,
                                "שדה חובה מצב הנכס"
                            )
                        }
                    >
                        <option
                            disabled={true}
                            hidden={true}
                            value="משופץ? חדש מקבלן?"
                        >
                            משופץ? חדש מקבלן?
                        </option>
                        {propertiesCondition.map((option) => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div className="field-error">
                        {!!inputErrors[1].length > 0 && inputErrors[1]}
                    </div>
                </div>
                <div className="input__container">
                    <div>יישוב*</div>
                    <input
                        type="text"
                        className={inputCss[2]}
                        placeholder="איפה נמצא הנכס?"
                        onBlur={(e) => {
                            onInputChange(
                                2,
                                e.target.value,
                                "יש לבחור יישוב מתוך הרשימה"
                            );
                        }}
                    />
                    <div className="field-error">
                        {!!inputErrors[2].length > 0 && inputErrors[2]}
                    </div>
                </div>
                <div className="input__container">
                    <div>רחוב</div>
                    <input
                        type="text"
                        className="input"
                        placeholder="הכנסת שם רחוב"
                        onChange={(e) => {
                            onInputChange(3, e.target.value, "");
                        }}
                    />
                </div>
                <div className="input__container">
                    <div>מספר בית</div>
                    <input
                        type="number"
                        className="input"
                        id="house-number"
                        onChange={(e) => {
                            onInputChange(4, e.target.value, "");
                        }}
                    />
                </div>
                {!!showFloor && (
                    <div className="floors__container">
                        <div className="input__container">
                            <div>קומה*</div>
                            <input
                                type="number"
                                className={inputCss[5]}
                                placeholder="הכנסת מספר קומה"
                                onBlur={(e) => {
                                    onInputChange(
                                        5,
                                        e.target.value,
                                        "שדה חובה קומה"
                                    );
                                }}
                            />
                            <div className="field-error">
                                {!!inputErrors[5].length > 0 && inputErrors[5]}
                            </div>
                        </div>
                        <div className="input__container">
                            <div>סה"כ קומות בבניין*</div>
                            <input
                                type="number"
                                className={inputCss[6]}
                                placeholder='הכנסת סה"כ קומות'
                                onBlur={(e) => {
                                    onInputChange(
                                        6,
                                        e.target.value,
                                        'שדה חובה סה"כ קומות בבניין'
                                    );
                                }}
                            />
                            <div className="field-error">
                                {!!inputErrors[6].length > 0 && inputErrors[6]}
                            </div>
                        </div>
                    </div>
                )}
                <div className="input__container">
                    <div>שכונה</div>
                    <input
                        type="text"
                        className="input"
                        onChange={(e) => {
                            onInputChange(7, e.target.value, "");
                        }}
                    />
                </div>
                <div className="input__container">
                    <div>אזור מכירה</div>
                    <input
                        type="text"
                        className="input"
                        placeholder="בחירת אזור מכירה"
                        onChange={(e) => {
                            onInputChange(8, e.target.value, "");
                        }}
                    />
                </div>
                <div
                    className="input__contaienr checkBox__container"
                    onClick={() => setCheckBox(!checkBox)}
                >
                    <CheckBox isChecked={checkBox} />
                    <span>
                        אני רוצה לקבל עדכון חודשי במייל עם הערכת שווי מעודכנת
                        עבור הנכס, עסקאות באזור והצעות מקצועיות מיועצי נדל"ן
                    </span>
                </div>
                <StepsButtons onNextSubmit={onFormSubmit} />
            </form>
        </div>
    );
};

export default Address;
