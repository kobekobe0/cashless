// components/Card.jsx
import React from "react";

const Card = ({ title, subtitle, children, className = "" }) => {
    return (
        <div className={`bg-white shadow-lg rounded-2xl p-4 ${className}`}>
            {title && <h2 className="text-lg font-bold text-gray-800">{title}</h2>}
            {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            <div className="mt-2">{children}</div>
        </div>
    );
};

export default Card;
