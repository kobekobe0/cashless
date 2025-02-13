"use client";

const SearchField = ({ placeholder = "Search...", value, onChange, onSearch }) => {
  return (
    <div className="flex items-center w-full max-w-lg border-2 border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-gray-700 outline-none"
      />
      <button
        onClick={onSearch}
        className="bg-deepBlue p-3 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
};

export default SearchField;
