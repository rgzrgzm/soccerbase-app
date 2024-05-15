"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const LeagueOption = ({
  item,
  setIsOpen,
}: {
  item: {
    league_name: string;
    league_logo: string;
    value: string;
  };
  setIsOpen: (value: boolean) => void;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter_league", value);
    replace(`${pathname}?${params.toString()}`);

    setIsOpen(false);
  };

  return (
    <div
      onClick={() => handleClick(item.value)}
      className="flex flex-col  py-1 border-b-[1px] border-b-slate-100  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    >
      <span className="pl-[8px] block pb-[5px] pt-[3px] items-start w-full text-[13px] font-medium">
        {item.league_name}
      </span>
    </div>
  );
};
