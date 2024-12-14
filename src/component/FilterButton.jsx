import React from "react";

const FiliterButton = ({ className, isOpen}) => {
  return (
    <button
      className={`relative w-8 h-8 flex flex-col gap-1 items-center justify-center group ${className}`}
    >
      <span
        className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-2/3 bg-black rounded transition-opacity duration-300 ${
          isOpen ? "w-full opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-1 bg-black rounded transition-transform duration-300 ${
          isOpen ? "w-full -rotate-45 -translate-y-2" : "w-1/3"
        }`}
      ></span>
    </button>
  );
};

export default FiliterButton;
