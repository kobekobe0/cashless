"use client";

import { useMutation } from "@tanstack/react-query";
import { getUrnDetails } from "@/store/urn/urn.repository";

export default function ValidateUrn({ urn }) {
  // UseMutation with a function that takes an argument
  const mutation = useMutation({
    mutationFn: (urn) => getUrnDetails(urn),
  });

  return (
    <div className="p-3 bg-gray-100 rounded-lg mt-4">
      <button
        onClick={() => mutation.mutate(urn)} // Fetch only on button click
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={!urn || urn.length !== 17} // Disable if URN is empty/invalid
      >
        Validate URN
      </button>

      {mutation.isLoading && <p>Loading...</p>}
      {mutation.error && <p className="text-red-600 font-semibold">Error: {mutation.error.message}</p>}

      {mutation.data?.success ? (
        <>
          <p className="text-green-600 font-semibold">✅ {mutation.data.message}</p>
          <p>System ID: {mutation.data.data.systemID}</p>
        </>
      ) : (
        mutation.data && <p className="text-red-600 font-semibold">❌ Invalid URN</p>
      )}
    </div>
  );
}
