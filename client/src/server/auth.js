import Axios from "axios";

const serverUrl = "http://localhost:4000/";

export const subscribe = async (email, password) => {
    try {
        const result = await Axios.post(serverUrl + "user/add", {
            email,
            password,
        });
        return result;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const login = async (email, password) => {
    try {
        const result = await Axios.post(serverUrl + "user/login", {
            email,
            password,
        });
        return result;
    } catch (err) {
        throw err.response.data;
    }
};

export const logout = async (token) => {
    try {
        await Axios.post(serverUrl + "users/logout", null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return "loged-out";
    } catch (err) {
        throw err.response.data;
    }
};
