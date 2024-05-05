import { MatchScoreData } from "@/app/interfaces";
interface Props {
  matchScore: string;
}

export const MatchScore = ({ matchScore }: Props) => {
  function getMatchScore(elemento: string): MatchScoreData {
    const partes = elemento.split("<b>");

    let score = partes[0].trim();
    score = score.replace(/<\/?[^>]+(>|$)/g, "");
    let match_time = "";

    if (partes[0].includes("Starts")) {
      match_time = score;
      score = "";
    } else if (partes[1].includes("FT")) {
      match_time = "FT";
    } else if (partes[1].includes("LIVE")) {
      match_time = "LIVE";
    } else if (partes[1].includes("HT")) {
      match_time = "HT";
    }

    return { match_time, score };
  }

  let match_score = getMatchScore(matchScore);

  const MatchScoreItem = ({ match_score }: any) => {
    if (match_score.score == "") {
      return (
        <div className="flex flex-col items-center w-full text-[12px]">
          <span className="text-gray-400 font-medium">
            {match_score.match_time}
          </span>
        </div>
      );
    }

    if (match_score.match_time == "LIVE") {
      return (
        <div className="flex justify-center w-full text-[14px]">
          <span className="animate-pulse text-red-600 duration-400">
            {match_score.match_time}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center w-full text-[12px]">
        <span className="text-gray-300 text-[11px]">
          {match_score.match_time}
        </span>
        <span>{match_score.score}</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full">
      <MatchScoreItem match_score={match_score} />
    </div>
  );
};
