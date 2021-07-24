import Axios from "axios";

const url = "https://data.gov.il/api/3/action/datastore_search";

export const streetsApi = async (value) => {
    try {
        const resource_id = "9ad3862c-8391-4b2f-84a4-2d4c68625f4b";
        const limit = 5;
        const q = value;
        const { data } = await Axios.get(url, {
            params: {
                resource_id,
                limit,
                q,
            },
        });
        return data.result.records.map((street) => ({
            value: `${street.שם_רחוב}, ${street.שם_ישוב}`,
            id: street._id,
        }));
    } catch (err) {
        console.log(err);
    }
};

export const citysApi = async (value) => {
    try {
        const resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
        const limit = 5;
        const q = value;
        const { data } = await Axios.get(url, {
            params: {
                resource_id,
                limit,
                q,
            },
        });
        return data.result.records.map((city) => ({
            value: city.שם_ישוב,
            id: city._id,
        }));
    } catch (err) {
        console.log(err);
    }
};
