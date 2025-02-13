"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";

// Toast Context
const ToastContext = createContext(null);

// Function to get position classes
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

// Toast Container Component
const ToastContainer = ({ position = "top-right", children }) => {
  const [toasts, setToasts] = useState([]);
  const toastIdCounter = useRef(0);

  const showToast = (message, type) => {
    const id = toastIdCounter.current++;
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
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
    </ToastContext.Provider>
  );
};

// Custom hook to use toast
const useToast = () => {
  return useContext(ToastContext);
};

// Export Toast Components
export { ToastContainer, useToast };
