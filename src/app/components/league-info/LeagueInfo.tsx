"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Props {
  leagueName: string;
  leagueLogo: string;
  color: string;
}

export const LeagueInfo = ({ leagueName, leagueLogo, color }: Props) => {
  const [borderColor] = useState(color);
  const [theme, setTheme] = useState("theme-white");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const handleThemeChange = () => {
      const currentTheme = document.documentElement.className;
      setTheme(currentTheme);
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () => window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  let getClassName = () => {
    let backgroundColor =
      theme === "theme-white"
        ? "bg-secondary-white"
        : theme === "theme-dark-blue"
        ? "bg-secondary-dark-blue"
        : "bg-secondary-black";
    let className =
      "flex items-center gap-2 pl-2 pt-4 pb-4 border-l-[3px] " +
      backgroundColor;

    return className;
  };
  return (
    <div className={getClassName()} style={{ borderLeftColor: borderColor }}>
      <Image
        className="max-w-[30px]"
        width={50}
        height={50}
        src={leagueLogo.trim()}
        alt={leagueLogo}
      />
      <span className="xs:text-[14px]">{leagueName}</span>
    </div>
  );
};
