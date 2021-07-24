import React, { useState } from "react";

const ContactInfo = ({ name, phone, main, setName, setPhone }) => {
    const [select, setSelect] = useState(phone.substring(0, 3) || "050");
    const [phoneState, setPhoneState] = useState(phone.substring(3, 10));
    const onInputName = (e) => {
        setName(e.target.value);
    };

    const onInputPhone = (e) => {
        const value = e.target.value;
        setPhoneState(value);
        const reg = new RegExp("^[0-9]+$");
        if (value.length === 7 && reg.test(value)) {
            setPhone(select + e.target.value);
            return;
        }
        setPhone("");
    };

    return (
        <div className="stage__contact-info">
            <div className="input__container">
                <div>{!!main && "*"}שם איש קשר</div>
                <input
                    type="text"
                    className="input name"
                    onInput={onInputName}
                    value={name}
                />
            </div>
            <div className="phone__container">
                <div>
                    <div>{!!main && "*"}טלפון</div>
                    <input
                        type="text"
                        className="input"
                        value={phoneState}
                        onInput={onInputPhone}
                    />
                </div>
                <select
                    className="input select"
                    onChange={(e) => {
                        setSelect(e.target.value);
                    }}
                    value={select}
                >
                    <option value={"050"}>050</option>
                    <option value={"051"}>051</option>
                    <option value={"052"}>052</option>
                    <option value={"053"}>053</option>
                    <option value={"054"}>054</option>
                    <option value={"055"}>055</option>
                    <option value={"058"}>058</option>
                </select>
            </div>
        </div>
    );
};

export default ContactInfo;
