interface Match {
  local_team: {
    name: string;
    logo?: string;
  };
  away_team: {
    name: string;
    logo?: string;
  };
  match_score: string;
}

export interface League {
  league_name: string;
  league_logo: string;
  matches: Match[];
  color: string;
}

export interface ApiResponse {
  response: League[];
}

export interface MatchScoreData {
  match_time: string;
  score: string;
}
