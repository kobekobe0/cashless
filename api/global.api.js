//global.api.js
import axios from "axios";
import { API_HOST } from ".";

const allowedMethods = ["get", "post", "put", "delete", "patch"];

const globalApi = async (method, url = "", params = {}, body = null, headers = {}) => {
    if (!allowedMethods.includes(method.toLowerCase())) {
        throw new Error(`Invalid HTTP method: ${method}`);
    }

    try {
        const response = await axios({
            method: method.toLowerCase(),
            url: `${API_HOST}${url}`,
            params,
            data: body,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });

        return response.data;
    } catch (error) {
        console.error("API Error: ", error?.response?.data || error?.message);
        return {
            error: error?.response?.data || error?.message,
        };
    }
};

export default globalApi;
