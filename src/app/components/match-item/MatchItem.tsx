import { League } from "@/app/interfaces";
import { MatchCard } from "@/app/components/match-card/MatchCard";
import { LeagueInfo } from "@/app/components";
interface Props {
  item: League;
}

export const MatchItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-0 bg-slate-50 rounded shadow-lg">
      <LeagueInfo leagueName={item.league_name} leagueLogo={item.league_logo} />

      {item.matches.map((match, i) => {
        return <MatchCard key={i} match={match} />;
      })}
    </div>
  );
};
