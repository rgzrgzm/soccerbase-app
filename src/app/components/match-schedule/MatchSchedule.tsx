import { getData } from "@/app/helpers/api-helper";
import { MatchItem } from "@/app/components/match-item/MatchItem";

export const MatchSchedule = async () => {
  const data = await getData();

  return (
    <div className="w-[90%] mx-auto">
      {/* <span className="font-black xs:text-[22px]">Today</span> */}

      <div className="flex flex-col gap-6 pt-2">
        {data.response.map((item, i) => {
          return <MatchItem key={i} item={item} />;
        })}
      </div>
    </div>
  );
};
