import React from "react";

const Card = ({ children, disableDefaultStyles, className = "", ...props }) => {
  const baseClasses = disableDefaultStyles 
    ? ""
    : "p-6 rounded-lg shadow-md bg-white overflow-hidden transition-all duration-200 hover:shadow-lg text-center";
  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
