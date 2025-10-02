const CustomButton = ({ children, onClick, disabled, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center font-serif text-base md:text-lg capitalize rounded-md p-2 transition-all duration-500 ease-in-out
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
            : "bg-red-500 text-white cursor-pointer hover:bg-transparent hover:border hover:border-red-400 hover:scale-105 hover:text-black hover:shadow-md"
        }
        ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
