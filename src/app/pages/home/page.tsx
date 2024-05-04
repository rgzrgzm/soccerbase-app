import { MatchSchedule } from "@/app/components";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="h-screen pt-[90px] font-black text-[19px] bg-[#e5e7eb] overflow-auto">
      <Suspense fallback={"cargando..."}>
        <MatchSchedule />
      </Suspense>
    </div>
  );
};

export default HomePage;
