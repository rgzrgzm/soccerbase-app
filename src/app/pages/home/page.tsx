import { MatchSchedule, TapScheduleFilter } from "@/app/components";
import { getData } from "@/app/helpers/api-helper";

export default async function HomePage() {
  const data = await getData();

  const matchSchedule = data.response;
  const leaguesList = data.response?.map((item) => {
    return {
      league_name: item.league_name,
      league_logo: item.league_logo,
      value: item.league_name,
      color: item.color,
    };
  });
  // let originalBackgroundSoftWhite = 'bg-[#e5e7eb]'
  return (
    <div className={`pt-[20px] font-black text-[19px] overflow-auto pb-150px background-container mt-[60px]`} 
    >
      <TapScheduleFilter
        leaguesList={[{ league_name: "All", value: "all" }, ...leaguesList]}
      />
      <MatchSchedule matchSchedule={matchSchedule} />
    </div>
  );
};

