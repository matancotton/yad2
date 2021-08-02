export const initSearchFilter = {
    area: "",
    property: [],
    minRooms: 0,
    maxRooms: 0,
    minPrice: 0,
    maxPrice: 0,
    features: [],
    minFloor: 0,
    maxFloor: 0,
    minApartment: "",
    maxApartment: "",
    date: "",
    freeText: "",
    entryNow: false,
    villagesOnly: false,
};

const searchFilterReducer = (state, action) => {
    switch (action.type) {
        case "EDIT_PROPERTY":
            return { ...state, property: action.properties };
        case "EDIT_AREA":
            return { ...state, area: action.value };
        case "EDIT_MIN_ROOMS":
            return { ...state, minRooms: action.value };
        case "EDIT_MAX_ROOMS":
            return { ...state, maxRooms: action.value };
        case "EDIT_MIN_PRICE":
            return { ...state, minPrice: action.value };
        case "EDIT_MAX_PRICE":
            return { ...state, maxPrice: action.value };
        case "EDIT_FEATURES_VALUES":
            return { ...state, features: action.values };
        case "EDIT_MIN_FLOOR":
            return { ...state, minFloor: action.value };
        case "EDIT_MAX_FLOOR":
            return { ...state, maxFloor: action.value };
        case "EDIT_MIN_APARTMENT":
            return { ...state, minApartment: action.value };
        case "EDIT_MAX_APARTMENT":
            return { ...state, maxApartment: action.value };
        case "EDIT_DATE":
            return { ...state, date: action.value };
        case "EDIT_FREE_TEXT":
            return { ...state, freeText: action.value };
        case "ENTRY_NOW":
            return { ...state, entryNow: action.value };
        case "VILLAGES_ONLY":
            return { ...state, villagesOnly: action.value };
        case "RESET_SEARCH_BAR":
            return { ...initSearchFilter };
        default:
            return { ...state };
    }
};

export default searchFilterReducer;
