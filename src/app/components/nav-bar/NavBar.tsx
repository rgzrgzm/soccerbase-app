"use client";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar fixed top-0 w-full h-[4rem] px-[1.3rem] py-[0] flex items-center bg-slate-50">
      <div className="flex justify-between w-full items-center">
        <span className="font-extrabold text-[22px]">Soccerbase</span>

        <div className="xs:flex flex lg:hidden  gap-1 items-center">
          <LuMoonStar className="xs:block lg:hidden text-[17px]" />

          <button
            className="lg:hidden ml-auto p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MdOutlineMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-[4rem] right-0 w-full bg-white border-t border-gray-300">
          {/* Aquí agregarías tus elementos de menú */}
          <ul className="py-2 px-4">
            <li>
              <a href="#" className="block py-2">
                Opción 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Opción 2
              </a>
            </li>
            {/* ... */}
          </ul>
        </div>
      )}
    </div>
  );
};
