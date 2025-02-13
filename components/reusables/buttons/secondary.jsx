"use client";

const SecondaryBtn = ({ text = "Secondary", onClick = () => console.log("clicked"), disabled = false }) => {
  const baseClass =
    "px-8 py-2 transition-all font-semibold min-w-[100px] rounded-full border-2";
  const enabledClass =
    "bg-white text-deepBlue border-deepBlue hover:text-white hover:bg-deepBlue";
    const disabledClass =
    "bg-lightBlue text-blueDark border-lightBlue cursor-not-allowed ";

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

export default SecondaryBtn;
