import React from "react";

const CloseButton = ({ className, onClick }) => {
  return (
    <button
      className={`relative w-8 h-8 flex flex-col justify-between items-center group ${className}`}
      onClick={onClick}
    >
      <span
        className={`block h-1 w-full bg-black rounded rotate-45 translate-y-3.5`}
      ></span>
      <span
        className={`block h-1 w-full bg-black rounded -rotate-45 -translate-y-3.5`}
      ></span>
    </button>
  );
};

export default CloseButton;
