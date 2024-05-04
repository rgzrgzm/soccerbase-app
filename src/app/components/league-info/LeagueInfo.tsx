import Image from "next/image";

interface Props {
  leagueName: string;
  leagueLogo: string;
}

export const LeagueInfo = ({ leagueName, leagueLogo }: Props) => {
  return (
    <div className="flex items-center gap-2 pl-2 pt-4 pb-4">
      <Image
      className="max-w-[30px]"
      width={50} height={50} src={leagueLogo.trim()} alt={leagueLogo} />
      <span className="xs:text-[14px]">{leagueName}</span>
    </div>
  );
};
