export default (state, action) => {
    switch (action.type) {
        case "LOGIN_MODE":
            return true;
        case "SIGHNUP_MODE":
            return false;
        default:
            return state;
    }
};
