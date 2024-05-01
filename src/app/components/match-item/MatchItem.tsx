import { League } from "@/app/interfaces";
import { MatchCard } from "@/app/components/match-card/MatchCard";

interface Props {
  item: League;
}

export const MatchItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {item.matches.map((match, i) => {
        return (
          <MatchCard
            key={i}
            leagueName={item.league_name}
            leagueLogo={item.league_logo}
            match={match}
            index={i}
          />
        );
      })}
    </div>
  );
};
