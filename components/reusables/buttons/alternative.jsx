"use client";

const AlternativeBtn = ({ text = "Alternative", onClick = () => console.log("clicked"), disabled = false }) => {
  const baseClass =
    "px-8 py-2 transition-all font-semibold min-w-[100px] rounded-full border-2";
  const enabledClass =
    "bg-deepBlue text-white border-deepBlue hover:bg-blueDark";
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

export default AlternativeBtn;
