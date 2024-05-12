import { League } from "@/app/interfaces";
import MatchItemContainer from "../match-item-container/MatchItemContainer";
interface Props {
  matchSchedule: League[];
}

export const MatchSchedule = async ({ matchSchedule }: Props) => {
  return (
    <div className="w-[90%] mx-auto pb-[100px]">
      <div className="flex flex-col gap-6 pt-2">
        <MatchItemContainer matchSchedule={matchSchedule} />
      </div>
    </div>
  );
};
