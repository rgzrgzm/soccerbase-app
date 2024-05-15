import { MatchSchedule, TapScheduleFilter } from "@/app/components";
import { ApiResponse } from "@/app/interfaces";

const HomePage = ({ response }: any) => {
  const matchSchedule = response;
  const leaguesList = response?.map((item: any) => {
    return {
      league_name: item.league_name,
      league_logo: item.league_logo,
      value: item.league_name,
      color: item.color,
    };
  });
  return (
    <div className="h-screen pt-[80px] font-black text-[19px] bg-[#e5e7eb] overflow-auto pb-150px">
      {/* <TapScheduleFilter
        leaguesList={[{ league_name: "All", value: "all" }, ...leaguesList]}
      /> */}
      {/* <MatchSchedule matchSchedule={matchSchedule} /> */}
    </div>
  );
};

export default HomePage;
