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
};

const publishAdReducer = (state, action) => {
    switch (action.type) {
        case "STAGE_DONE":
            // const newState = { ...state };
            // newState.data[action.index].isEnable = false;
            // newState.data[action.index].isDone = true;
            // newState.data[action.index].form = action.form;
            // newState.data[action.index + 1].isEnable = true;
            // newState.data[action.index + 1].isDone = false;
            const data = [...state.data];
            data[action.index] = { ...data[action.index] };
            data[action.index].isEnable = false;
            data[action.index].isDone = true;
            data[action.index].form = action.form;
            data[action.index + 1] = { ...data[action.index + 1] };
            data[action.index + 1].isEnable = true;
            data[action.index + 1].isDone = false;
            return { data };
        case "UPDATE_STAGE":
            const stages = [...state.data];
            stages[action.index].isEnable = true;
            stages[action.index].isDone = false;
            for (let i = action.index + 1; i < 6; i++) {
                stages[i].isEnable = false;
                stages[i].isDone = false;
            }
            return { ...state, data: stages };
        default:
            return { ...state };
    }
};

export default publishAdReducer;
