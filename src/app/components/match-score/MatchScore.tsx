"use client";
interface Props {
  matchScore: string;
}

export const MatchScore = ({ matchScore }: Props) => {
  console.log(matchScore);

  function processElement(elemento: string) {
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

  console.log("text:", processElement(matchScore));

  return <div>...</div>;
};
