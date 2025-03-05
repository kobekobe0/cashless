import { useMutation } from "@tanstack/react-query";
import globalApi from "@/api/global.api";
import { apiEndpoints } from "@/api/index";
import { setSession } from "@/lib/sessionHelper";

const fetchUrnDetails = async (urn) => {
  if (!urn) throw new Error("URN is required");
  
  console.log("Fetching URN Details for:", urn); // Debugging

  const response = await globalApi("get", apiEndpoints.urn.checkUrn, {}, null, {
    "Unique-Reference-Number": urn,
  });

  console.log("API Response:", response); // Debugging

  if (response?.error) {
    throw new Error(response.error.message || "Failed to fetch URN details");
  }

  setSession("URN_DETAILS", response);
  return response;
};

export const useGetUrnDetails = () => {
  return useMutation({
    mutationFn: fetchUrnDetails, // Explicitly assigning mutation function
  });
};
