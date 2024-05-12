"use client";
import React, { useEffect } from "react";
import { MatchItem } from "@/app/components";
import { useSearchParams } from "next/navigation";

const MatchItemContainer = ({ matchSchedule }: any) => {
 
const searchParams = useSearchParams()
console.log(searchParams.get('filter_by_league_name'))

  return matchSchedule?.map((item: any, idx: any) => {
    return <MatchItem key={idx} item={item} />;
  });
};

export default MatchItemContainer;
