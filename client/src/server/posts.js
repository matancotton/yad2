import Axios from "axios";

const serverUrl = "http://localhost:4000/";

export const uploadPost = async (token, post) => {
    try {
        const result = await Axios.post(
            serverUrl + "posts/new",
            { ...post },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return result.data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getPosts = async (filter, skip, limit) => {
    try {
        const result = await Axios.get(serverUrl + "posts/all", {
            params: {
                filter,
                limit,
                skip,
            },
        });
        return result.data;
    } catch (err) {
        console.log(err);
    }
};
