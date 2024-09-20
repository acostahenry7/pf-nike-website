const Button = ({
  label,
  iconURL,
  bgColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        bgColor || "bg-coral-red"
      }  ${textColor || "text-white"} ${
        borderColor || "border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label || "Click Me"}
      {iconURL && (
        <img src={iconURL} alt="Icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
