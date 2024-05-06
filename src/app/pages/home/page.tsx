import { MatchSchedule, Spinner, TapScheduleFilter } from "@/app/components";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="h-screen pt-[80px] font-black text-[19px] bg-[#e5e7eb] overflow-auto">
      <TapScheduleFilter />
      <Suspense fallback={<Spinner />}>
        <MatchSchedule />
      </Suspense>
    </div>
  );
};

export default HomePage;
