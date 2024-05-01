import Image from "next/image";

interface Props {
  leagueName: string;
  leagueLogo: string;
}

export const LeagueInfo = ({ leagueName, leagueLogo }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Image width={25} height={25} src={leagueLogo.toString()} alt={leagueLogo} />
      <span className="text-[17px]">{leagueName}</span>
    </div>
  );
};
