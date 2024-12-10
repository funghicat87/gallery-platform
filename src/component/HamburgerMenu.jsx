import React, { useState } from "react";

const HamburgerMenu = ({ className, isOpen}) => {
  return (
    <button
      className={`relative w-8 h-8 flex flex-col justify-between items-center group ${className}`}
    >
      <span
        className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
          isOpen ? "rotate-45 translate-y-3.5" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-full bg-black rounded transition-opacity duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block h-1 w-full bg-black rounded transition-transform duration-300 ${
          isOpen ? "-rotate-45 -translate-y-3.5" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
