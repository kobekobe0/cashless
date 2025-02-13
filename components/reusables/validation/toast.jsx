"use client";

import { useState, useEffect, useId, useRef } from "react";

const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "top-4 left-4 items-start";
      case "top-right":
        return "top-4 right-4 items-end";
      case "bottom-left":
        return "bottom-4 left-4 items-start";
      case "bottom-right":
        return "bottom-4 right-4 items-end";
      case "top-center":
        return "top-4 left-1/2 -translate-x-1/2 items-center";
      case "bottom-center":
        return "bottom-4 left-1/2 -translate-x-1/2 items-center";
      default:
        return "top-4 right-4 items-end";
    }
  };

const ToastContainer = ({ position = "top-right" }) => {
    const [toasts, setToasts] = useState([]);
    const toastIdCounter = useRef(0); // Client-side ID counter
    
    const showToast = (message, type, position = "top-right") => {
      const id = toastIdCounter.current++; // Client-side only ID
      setToasts((prev) => [...prev, { id, message, type, position }]);
    
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 3000);
    };
    
    useEffect(() => {
      window.showToast = showToast;
    }, []);
    return (
        <div className={`fixed flex flex-col gap-2 ${getPositionClasses(position)}`}>
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`px-4 py-2 min-w-[250px] rounded-md shadow-lg text-white text-start w-fit text-sm transition-all duration-300 pointer-events-auto ${
                        toast.type === "success" ? "bg-deepBlue" : "bg-redAccent"
                    }`}
                >
                {toast.message}
                </div>
            ))}
        </div>
    );
};

// for this to be able to use globally
const toast = {
  success: (message) => {
    if (window.showToast) {
      window.showToast(message, "success");
    }
  },
  error: (message) => {
    if (window.showToast) {
      window.showToast(message, "error");
    }
  },
};

export { ToastContainer, toast };
