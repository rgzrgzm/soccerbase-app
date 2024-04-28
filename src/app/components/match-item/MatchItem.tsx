import { League } from "@/app/interfaces";
import MatchCard from "../match-card/MatchCard";

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
            match={match}
            index={i}
          />
        );
      })}
    </div>
  );
};
