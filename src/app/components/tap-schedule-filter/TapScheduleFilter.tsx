import React from "react";
import { SearchBar } from "@/app/components";

export const TapScheduleFilter = ({ leaguesList }: any) => {
  return (
    <div className="flex items-center w-[90%] mx-auto">
      <SearchBar leaguesList={leaguesList} />
    </div>
  );
};
