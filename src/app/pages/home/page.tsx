import { SearchBar, MatchSchedule, Spinner } from "@/app/components";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="h-screen pt-[80px] font-black text-[19px] bg-[#e5e7eb] overflow-auto">
      <div className="flex items-center w-[90%] mx-auto">
        <SearchBar />
      </div>

      <Suspense fallback={<Spinner />}>
        <MatchSchedule />
      </Suspense>
    </div>
  );
};

export default HomePage;
