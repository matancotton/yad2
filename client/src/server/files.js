import Axios from "axios";
const url = "http://localhost:4000/";

export const uploadFiles = async (formData, id, token) => {
    try {
        const result = await Axios.post(
            url + "upload-file?id=" + id,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
                id,
            }
        );

        return result.data;
    } catch (err) {
        throw new Error(err.message);
    }
};
