"use client";
import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { ViewModeController } from "@/app/components/view-mode-controller/ViewModeController";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenViewMode, setIsOpenViewMode] = useState(false);
  const [viewModeListNames, setViewModeListNames] = useState<string[]>([]);

  useEffect(() => {
    setViewModeListNames(["White", "Night", "Dark"]);
  }, []);

  return (
    <div className="navbar z-[999] fixed top-0 w-full h-[4rem] px-[1.3rem] py-[0] flex items-center bg-slate-50 shadow-sm">
      <div className="flex justify-between w-full items-center">
        <span className="font-extrabold text-[22px]">Soccerbase</span>

        <div className="xs:flex flex lg:hidden  gap-[0.50rem] items-center">
          <LuMoonStar
            className="xs:block lg:hidden text-[17.5px]"
            onClick={() => {
              setIsOpenViewMode(!isOpenViewMode);
              setIsMenuOpen(false);
            }}
          />

          <button
            className="lg:hidden ml-auto p-2 focus:outline-none"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsOpenViewMode(false);
            }}
          >
            <MdOutlineMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-[4rem] right-0 w-full bg-white border-t border-gray-300">
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

      {isOpenViewMode && (
        <div className="lg:hidden absolute top-[4rem] right-0 w-full bg-white border-t border-gray-300 shadow-md">
          <div className="px-4 font-bold pt-3 flex justify-between items-center">
            <span className="text-[18px]">Display settings</span>

            <IoMdSettings />
          </div>
          <ul className="py-2 px-4 flex flex-col gap-[30px]">
            <li>
              <div className="block py-2 font-bold">
                <span className="text-[15px]">Color</span>
              </div>
            </li>
            <li>
              <div className="w-full py-2 font-bold flex flex-col gap-2">
                <span className="text-[15px]">Background</span>
                <div className="flex justify-between">
                  {viewModeListNames?.map((item) => (
                    <ViewModeController key={item} name={item} />
                  ))}
                </div>
              </div>
            </li>
            {/* ... */}
          </ul>
        </div>
      )}
    </div>
  );
};
