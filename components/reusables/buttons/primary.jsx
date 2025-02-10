"use client";

const PrimaryBtn = ({ text = "Primary", onClick = () => console.log("clicked"), disabled = false }) => {
  const baseClass =
    "px-8 py-2 transition-all font-semibold min-w-[100px] rounded-full border-2";
  const enabledClass =
    "bg-yellowGold text-royalBlue border-yellowGold hover:border-royalBlue hover:text-darkBlue";
  const disabledClass =
    "bg-lightBlue text-darkBlue border-lightBlue cursor-not-allowed ";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`${baseClass} ${disabled ? disabledClass : enabledClass}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
