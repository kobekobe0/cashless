// components/Container.jsx
import React from "react";

const Container = ({ children, className = "", variant = "" }) => {
  // Only apply default outer container styles if variant is "outerContainer"
  const outerContainerDefaultStyles =
    variant === "outerContainer"
      ? "min-h-screen grid place-items-center bg-lightBlue p-6 font-poppins"
      : "";
  
  return (
    <div className={`${outerContainerDefaultStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
