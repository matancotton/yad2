export const initSortState = { value: "date" };

const sortReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY":
            return { ...state, value: action.value };
        default:
            return { ...state };
    }
};

export default sortReducer;
