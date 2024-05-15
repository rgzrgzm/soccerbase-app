"use client";
import React, { useEffect, useState } from "react";
import { MatchItem } from "@/app/components";
import { useSearchParams } from "next/navigation";

const MatchItemContainer = ({ matchSchedule }: any) => {
  const [filteredMatches, setFilteredMatches] = useState(matchSchedule);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = searchParams.get("filter_league");

    if (params && params != "all") {
      let filtered = matchSchedule.filter(
        (item: any) => item.league_name == params
      );
      setFilteredMatches(filtered);
    } else {
      setFilteredMatches(matchSchedule);
    }
  }, [searchParams, matchSchedule]);

  return filteredMatches?.map((item: any, idx: any) => {
    return <MatchItem key={idx} item={item} />;
  });
};

export default MatchItemContainer;
