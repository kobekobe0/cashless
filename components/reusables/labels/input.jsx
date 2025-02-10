"use client";

import { useState } from "react";

const InputField = ({
  label = "Label",
  description = "",
  placeholder = "Enter text...",
  type = "text",
  name,
  value,
  onChange,
  required = false,
  min,
  max,
  error = "",
  disabled = false,
}) => {
  const [inputError, setInputError] = useState(error);

  const validateInput = (val) => {
    if (required && !val) {
      setInputError("This field is required.");
    } else if (type === "email" && val && !/\S+@\S+\.\S+/.test(val)) {
      setInputError("Invalid email format.");
    } else if (type === "number") {
      const num = Number(val);
      if (min !== undefined && num < min) {
        setInputError(`Value must be at least ${min}.`);
      } else if (max !== undefined && num > max) {
        setInputError(`Value must be at most ${max}.`);
      } else {
        setInputError("");
      }
    } else {
      setInputError("");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md items-start gap-1">
      <label className="text-gray-800 font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {description && <p className="text-gray-700 text-sm mb-1">{description}</p>}

      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => {
          validateInput(e.target.value);
          onChange(e);
        }}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`w-full p-2 border-2 rounded-md transition-all outline-none
          ${disabled ? "bg-lightBlue border-lightBlue cursor-not-allowed text-secondary" : ""}
          ${inputError ? "border-red-500" : "border-gray-200 focus:border-blue-500"}
        `}
        disabled={disabled}
      />

      {inputError && <p className="text-red-500 text-sm mt-1">{inputError}</p>}
    </div>
  );
};

export default InputField;
