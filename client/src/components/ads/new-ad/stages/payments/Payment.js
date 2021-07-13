import React, { useContext, useState } from "react";
import StepsButtons from "../StepsButtons";
import { moveToNextStageAction } from "../../../../../actions/publishAdAction";
import { PublishContext } from "../../../../../contexts/PublishAdContext";

const Payment = () => {
    const { adState, dispatchAd } = useContext(PublishContext);
    const [squareFeet, setSquareFeet] = useState(0);
    const [totalFeet, setTotalFeet] = useState(0);
    const [sizeError, setSizeError] = useState("");
    const [price, setPrice] = useState(0);
    const [priceError, setPriceError] = useState("");
    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState("");

    const onInputMaxFeet = (e) => {
        const maxFeet = e.target.value;
        setTotalFeet(maxFeet);
        if (sizeError.length > 0) setSizeError("");
    };

    const onInputPrice = (e) => {
        const price = e.target.value;
        setPrice(price);
        if (priceError.length > 0) {
            if (price > 100000) setPriceError("");
        }
    };

    const onInputDate = (e) => {
        const date = e.target.value;
        setDate(date);
        if (dateError.length > 0) setDateError("");
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        let isValidForm = true;
        if (totalFeet === 0) {
            isValidForm = false;
            setSizeError('שדה חובה במ"ר סך הכל');
        }
        if (price < 100000) {
            isValidForm = false;
            setPriceError('סכום מינימלי - 100,000 ש"ח');
        }
        if (date === "") {
            isValidForm = false;
            setDateError("שדה חובה תאריך כניסה");
        }
        if (!isValidForm) return;
        const form = {
            squareFeet,
            totalFeet,
            price,
            date,
        };
        dispatchAd(moveToNextStageAction(form, 2));
    };

    return (
        <div className="stage__container">
            <form>
                <div className="input__container">
                    <div>מ"ר בנוי</div>
                    <input
                        step="0.01"
                        type="number"
                        className="input"
                        placeholder='כמה מ"ר יש בנכס'
                        onInput={(e) => {
                            setSquareFeet(e.target.value);
                        }}
                    />
                </div>
                <div className="input__container">
                    <div>גודל מ"ר סה"כ הכל*</div>
                    <input
                        type="number"
                        step="0.01"
                        onInput={onInputMaxFeet}
                        className="input"
                    />
                </div>
                <div className="input__container">
                    <div>מחיר</div>
                    <input
                        type="number"
                        step="0.01"
                        className="input"
                        placeholder="סכום מינימלי 100,000"
                        onInput={onInputPrice}
                    />
                </div>
                <div className="input__container">
                    <div>תאריך כניסה*</div>
                    <input
                        type="date"
                        onInput={onInputDate}
                        className="input"
                    />
                </div>
                <StepsButtons onNextSubmit={onFormSubmit} />
            </form>
        </div>
    );
};

export default Payment;
