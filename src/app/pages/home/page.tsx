import { MatchSchedule } from "@/app/components";

const HomePage = () => {
  return (
    <div className="h-screen pt-[80px] bg-[#e5e7eb] font-black text-[19px]">
      <h1>¡Bienvenido a la página de inicio!</h1>

      <MatchSchedule />
    </div>
  );
};

export default HomePage;
