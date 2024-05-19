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
  match: Match;
}

export const MatchCard = ({ match }: Props) => {
  let local_logo = match["local_team"].logo?.trim() ?? "";
  let away_logo = match["away_team"].logo?.trim() ?? "";

  return (
    <div className="flex flex-col px-4 py-4">
      <div className="grid grid-cols-3 gap-0 items-center mx-auto px-2">
        <div className="flex items-center gap-[2px] flex-1 w-ful flex-row-reverse">
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

        <div className="flex items-center gap-[2px] flex-1 w-full">
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
