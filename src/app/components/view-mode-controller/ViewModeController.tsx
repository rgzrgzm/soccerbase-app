"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useTheme } from "next-themes";

export const ViewModeController = ({ name }: { name: string }) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  let buttonName = name.toLowerCase();
  let selectedTheme =
    buttonName == "white"
      ? "light"
      : buttonName == "night"
      ? "night-blue"
      : "dark";

  const customClassName = clsx(
    "flex",
    "gap-[15px]",
    "rounded",
    "items-center",
    "border",
    "px-[18px]",
    "py-[10px]",
    "theme-selected",
    "font-black",
    {
      "bg-black": name.toLowerCase() == "dark",
      "bg-[#15202b]": name.toLowerCase() == "night",
      "border-[#000]": buttonName == "dark" || buttonName == "night",

      "bg-white": buttonName == "white",
      "text-black": buttonName == "white",

      "text-white":
        name.toLowerCase() == "dark" || name.toLowerCase() == "night",

      "border-[#1d9bf0]": resolvedTheme == selectedTheme, // border blue "selected"
      "border-2": name.toLowerCase() == "white",
    }
  );

  if (!mounted) return null;

  return (
    <div
      className={customClassName}
      onClick={() => {
        let themeName = name.toLowerCase();

        if (themeName === "white") {
          setTheme("light");
          return;
        }

        if (themeName === "night") {
          setTheme("night-blue");
          return;
        }

        if (themeName === "dark") {
          setTheme("dark");
          return;
        }
      }}
    >
      {resolvedTheme == selectedTheme ? (
        <RiCheckboxCircleFill className="text-[#1d9bf0]" />
      ) : (
        <RiCheckboxBlankCircleLine />
      )}

      <span className="text-[13px]">{name}</span>
    </div>
  );
};
