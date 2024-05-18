"use client"
import { League } from "@/app/interfaces";
import { LeagueInfo, MatchCard } from "@/app/components";
import { useEffect, useState } from "react";
interface Props {
  item: League;
}

export const MatchItem = ({ item }: Props) => {
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
    let className = "flex flex-col gap-0 rounded shadow-lg " + backgroundColor;

    return className;
  };

  return (
    <div className={getClassName()}>
      <LeagueInfo
        leagueName={item?.league_name}
        leagueLogo={item?.league_logo}
        color={item?.color}
      />

      {item?.matches?.map((match, i) => {
        return <MatchCard key={i} match={match} />;
      })}
    </div>
  );
};
