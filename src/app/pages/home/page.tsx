import { MatchSchedule, Spinner, TapScheduleFilter } from "@/app/components";
import { ApiResponse } from "@/app/interfaces";

const HomePage = ({ response }: ApiResponse) => {
  const matchSchedule = response;
  const leaguesList = response.map((item) => {
    return {
      league_name: item.league_name,
      league_logo: item.league_logo,
    };
  });
  return (
    <div className="h-screen pt-[80px] font-black text-[19px] bg-[#e5e7eb] overflow-auto">
      <TapScheduleFilter
        leaguesList={leaguesList}
        // ....
      />
      <MatchSchedule matchSchedule={matchSchedule} />
    </div>
  );
};

export default HomePage;
