import clsx from "clsx";
import { LeagueInfo } from "@/app/components/league-info/LeagueInfo";
interface Match {
  local_team: {
    name: string;
  };
  away_team: {
    name: string;
  };
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
    "rounded-lg",
    'shadow-lg',
    {
      "px-2": index == 0,
      "py-3": index == 0,
      "px-4": index != 0,
      "py-4": index != 0,
    }
  );

  return (
    <div className={customClassName}>
      {index == 0 && (
        <LeagueInfo leagueName={leagueName} leagueLogo={leagueLogo} />
      )}

      <div className="flex items-center justify-between mx-auto w-[90%] xs:text-[13px]">
        <div>
          <span>{match["local_team"].name}</span>
          {/* <span>{match["local_team"].name}</span> */}
        </div>

        <div>
          <span>{match["away_team"].name}</span>
          {/* <span>{match["local_team"].name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
