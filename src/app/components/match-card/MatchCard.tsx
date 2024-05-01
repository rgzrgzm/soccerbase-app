import clsx from "clsx";
import { LeagueInfo, MatchScore } from "@/app/components";
import Image from "next/image";

interface Match {
  local_team: {
    name: string;
    logo?: string;
  };
  away_team: {
    name: string;
    logo?: string;
  };
  match_score: any;
}

interface Props {
  leagueName: string;
  leagueLogo: string;
  index: number;
  match: Match;
}

export const MatchCard = ({ leagueName, leagueLogo, match, index }: Props) => {
  const customClassName = clsx(
    "flex",
    "flex-col",
    "border",
    "bg-slate-50",
    "rounded",
    "shadow-lg",
    {
      "px-2": index == 0,
      "py-3": index == 0,
      "px-4": index != 0,
      "py-4": index != 0,
    }
  );

  let local_logo = match["local_team"].logo?.trim() ?? "";
  let away_logo = match["away_team"].logo?.trim() ?? "";

  return (
    <div className={customClassName}>
      {index == 0 && (
        <LeagueInfo leagueName={leagueName} leagueLogo={leagueLogo} />
      )}

      <div className="flex items-center justify-between mx-auto w-[90%] xs:text-[13px]">
        <div className="flex items-center gap-[2px]">
          <Image
            width={25}
            height={25}
            className=""
            src={local_logo}
            alt={match["local_team"].name}
          />
          <span className="text-[14px] font-bold truncate">
            {match["local_team"].name}
          </span>
        </div>

        <MatchScore matchScore={match.match_score} />

        <div className="flex items-center gap-[2px]">
          <Image
            width={25}
            height={25}
            src={away_logo}
            alt={match["away_team"].name}
          />
          <span className="text-[14px] font-bold truncate">
            {match["away_team"].name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
