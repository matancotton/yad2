import React, { useContext, useState } from "react";
import StepsButtons from "../StepsButtons";
import { moveToNextStageAction } from "../../../../../actions/publishAdAction";
import { PublishContext } from "../../../../../contexts/PublishAdContext";

const Payment = () => {
    const { adState, dispatchAd } = useContext(PublishContext);
    const [data] = useState(adState.data[2].form);
    const [squareFeet, setSquareFeet] = useState(data?.squareFeet || "");
    const [totalFeet, setTotalFeet] = useState(data?.totalFeet || "");
    const [sizeError, setSizeError] = useState("");
    const [price, setPrice] = useState(
        data?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || ""
    );
    const [priceError, setPriceError] = useState("");
    const [date, setDate] = useState(data?.date || "");
    const [dateError, setDateError] = useState("");

    const onInputMaxFeet = (e) => {
        const maxFeet = e.target.value;
        setTotalFeet(maxFeet);
        if (sizeError.length > 0) setSizeError("");
    };

    const onInputPrice = (e) => {
        const price = parseInt(e.target.value);
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
        e.stopPropagation();
        let isValidForm = true;
        if (totalFeet === 0) {
            isValidForm = false;
            setSizeError('שדה חובה גודל במ"ר סך הכל');
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
                        value={squareFeet}
                    />
                </div>
                <div className="input__container">
                    <div>גודל מ"ר סך הכל*</div>
                    <input
                        type="number"
                        step="0.01"
                        onInput={onInputMaxFeet}
                        className="input"
                        value={totalFeet}
                    />
                    {sizeError !== "" && (
                        <div className="field-error">{sizeError}</div>
                    )}
                </div>
                <div className="input__container">
                    <div>מחיר</div>
                    <input
                        type="number"
                        step="0.01"
                        className="input"
                        placeholder="סכום מינימלי 100,000"
                        onInput={onInputPrice}
                        value={price}
                    />
                    {priceError !== "" && (
                        <div className="field-error">{priceError}</div>
                    )}
                </div>
                <div className="input__container">
                    <div>תאריך כניסה*</div>
                    <input
                        type="date"
                        onInput={onInputDate}
                        className="input"
                        value={date}
                    />
                    {dateError !== "" && (
                        <div className="field-error">{dateError}</div>
                    )}
                </div>
                <StepsButtons onNextSubmit={onFormSubmit} />
            </form>
        </div>
    );
};

export default Payment;
