import React from "react";

const Card = ({ children, className = "", styleOverride = {}, ...props }) => {
  // Define base classes that can be overridden
  const baseClasses = "p-6 rounded-lg shadow-md bg-white overflow-hidden transition-all duration-200 hover:shadow-lg text-center";
  
  // Merge the base styles with the styles passed via 'styleOverride'
  const cardClasses = `${baseClasses} ${className}`;

  return (
    <div className={cardClasses} style={styleOverride} {...props}>
      {children}
    </div>
  );
};

export default Card;
