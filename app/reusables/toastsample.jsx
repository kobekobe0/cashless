"use client";

import { ToastContainer, useToast } from "@/components/reusables/validation/toast";

const ToastSample = () => {
  const toast = useToast();
  return (
    <>


      <div className="flex gap-4">
        <button
          onClick={() =>  toast("Hello!", "success")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Show Success
        </button>
        <button
          onClick={() => toast("Hello!", "error")}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Show Error
        </button>
      </div>
    </>
  );
};

export default ToastSample;
