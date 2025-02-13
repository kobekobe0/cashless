import React from "react";

const Card = ({ children, className = "", styleOverride = {}, ...props }) => {
  // Remove bg-white from the default class string.
  const baseClasses =
    "p-6 rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg text-center";
  
  // Define a default inline style that sets a white background.
  // If the user passes in a background property via styleOverride,
  // it will override this default.
  const defaultStyle = { backgroundColor: "#fff" };
  const mergedStyle = { ...defaultStyle, ...styleOverride };

  const cardClasses = `${baseClasses} ${className}`;

  return (
    <div className={cardClasses} style={mergedStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
