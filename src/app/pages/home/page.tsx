import { MatchSchedule } from "@/app/components";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="h-screen pt-[90px] bg-[#e5e7eb] font-black text-[19px]">
      <Suspense fallback={"cargando..."}>
        <MatchSchedule />
      </Suspense>
    </div>
  );
};

export default HomePage;
