"use client";
import React, { useEffect, useState } from "react";
import { MatchItem } from "@/app/components";
import { useSearchParams } from "next/navigation";
import { League } from "@/app/interfaces";

const MatchItemContainer = ({ matchSchedule }: { matchSchedule: League[] }) => {
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

  useEffect(() => {
    const params = searchParams.get("search");

    const lowerCaseQuery = params?.toLowerCase();

    if (lowerCaseQuery) {
      const filteredData = matchSchedule.reduce(
        (acc: League[], league: League) => {
          const matchesInLeague = league.matches.filter((match: any) => {
            return (
              match.local_team.name.toLowerCase().includes(lowerCaseQuery) ||
              match.away_team.name.toLowerCase().includes(lowerCaseQuery)
            );
          });

          if (league.league_name.toLowerCase().includes(lowerCaseQuery)) {
            acc.push(league);
          } else if (matchesInLeague.length > 0) {
            acc.push({
              ...league,
              matches: matchesInLeague,
            });
          }

          return acc;
        },
        []
      );

      setFilteredMatches(filteredData);
    } else {
      setFilteredMatches(matchSchedule);
    }
  }, [searchParams, matchSchedule]);

  return filteredMatches?.map((item: any, idx: any) => {
    return <MatchItem key={idx} item={item} />;
  });
};

export default MatchItemContainer;
