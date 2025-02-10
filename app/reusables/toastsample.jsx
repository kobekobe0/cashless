"use client";

import { ToastContainer, toast } from "@/components/reusables/validation/toast";

const ToastSample = () => {
  return (
    <>


      <div className="flex gap-4">
        <button
          onClick={() => toast.success("Success!")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Show Success
        </button>
        <button
          onClick={() => toast.error("Something went wrong!")}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Show Error
        </button>
      </div>
    </>
  );
};

export default ToastSample;
