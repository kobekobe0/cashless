import axios from "axios";
import { apiEndpoints } from "@/api/index";

export const getUrnDetails = async (urn) => {
  try {
    const response = await axios.get(`${apiEndpoints.urn.validate}`, {
      headers: {
        "Unique-Reference-Number": urn,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch URN details");
  }
};
