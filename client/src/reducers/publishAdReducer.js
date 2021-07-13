import AboutTheProperty from "../components/ads/new-ad/stages/about/AboutTheProperty";
import Address from "../components/ads/new-ad/stages/address/Address";
import Payment from "../components/ads/new-ad/stages/payments/Payment";
import Pictures from "../components/ads/new-ad/stages/pictures/Pictures";

export const initialAd = {
    data: [
        {
            type: "address",
            isEnable: true,
            title: "כתובת הנכס",
            number: 1,
        },
        {
            type: "about",
            isEnable: false,
            title: "על הנכס",
            number: 2,
        },
        {
            type: "payment",
            isEnable: false,
            title: "תשלומים, תאריכים ועוד",
            number: 3,
        },
        {
            type: "images",
            isEnable: false,
            title: "תמונות וסרטונים",
            number: 4,
        },
        {
            type: "contact",
            isEnable: false,
            title: "פרטים ליצירת קשר",
            number: 5,
        },
        {
            type: "publish",
            isEnable: false,
            title: "סיום פרסום",
            number: 6,
        },
    ],
    components: [<Address />, <AboutTheProperty />, <Payment />, <Pictures />],
};

const publishAdReducer = (state, action) => {
    switch (action.type) {
        case "STAGE_DONE":
            console.log(action.form);
            const newState = { ...state };
            newState.data[action.index].isEnable = false;
            newState.data[action.index].isDone = true;
            newState.data[action.index].form = action.form;
            newState.data[action.index + 1].isEnable = true;
            return newState;
        default:
            return { ...state };
    }
};

export default publishAdReducer;
