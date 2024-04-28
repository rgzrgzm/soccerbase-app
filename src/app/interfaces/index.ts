interface Match {
  local_team: {
    name: string;
    logo?: string;
  };
  away_team: {
    name: string;
    logo?: string;
  };
}

export interface League {
  league_name: string;
  matches: Match[];
}

export interface ApiResponse {
  response: League[];
}
