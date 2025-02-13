"use client";

const PrimaryBtn = ({ text = "Primary", onClick = () => console.log("clicked"), disabled = false }) => {
  const baseClass =
    "px-8 py-2 transition-all min-w-[100px] rounded-full border-2";
  const enabledClass =
    "bg-yellowAccent text-primaryDark border-yellowAccent hover:border-primaryDark hover:text-blueDark hover:font-semibold";
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
