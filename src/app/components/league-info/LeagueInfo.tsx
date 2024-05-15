"use client";
import Image from "next/image";
import { useState } from "react";
interface Props {
  leagueName: string;
  leagueLogo: string;
  color: string;
}

export const LeagueInfo = ({ leagueName, leagueLogo, color }: Props) => {
  const [borderColor] = useState(color)
  return (
    <div
      className={`flex items-center gap-2 pl-2 pt-4 pb-4 border-l-[3px]`}
      style={{ background: "#fff", borderLeftColor: borderColor }}
    >
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
