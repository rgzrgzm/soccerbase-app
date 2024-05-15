import { League } from "@/app/interfaces";
import { LeagueInfo, MatchCard } from "@/app/components";
interface Props {
  item: League;
}

export const MatchItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-0 rounded shadow-lg bg-slate-50">
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
