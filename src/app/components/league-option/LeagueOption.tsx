"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const LeagueOption = ({
  item,
}: {
  item: {
    league_name: string;
    league_logo: string;
  };
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (league_name: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter_by_league_name", league_name);
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div
      onClick={() => handleClick(item.league_name)}
      className="flex flex-col  py-1 border-b-[1px] border-b-slate-100  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      <span className="pl-[5px] block pb-[5px] pt-[3px] items-start w-full text-[13px]">
        {item.league_name}
      </span>
    </div>
  );
};
