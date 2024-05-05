"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="flex relative mb-[6px]">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex items-center justify-center w-[50%] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-[13px] truncate font-medium text-gray-700 rounded-r-none rounded-br-none"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        All leagues...
        <IoIosArrowDown className="font-black" />
      </button>
      <div className="relative ml-[-1px]">
        <input
          type="text"
          placeholder="Search..."
          className="block w-full pr-10 py-2 pl-3 border font-medium border-gray-300 rounded-md shadow-sm sm:text-sm rounded-l-none rounded-bl-none outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FaSearch className="text-gray-300" />
        </div>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute xs:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
