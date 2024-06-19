export interface Show {
    id: string;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
}

export interface Genre {
    id: number;
    title: string;
    description: string;
    shows: string[];
  }

export interface HomeProps {
    searchQuery: string;
    sortOption: string;
    
  }

export interface GenresProps {
    shows: Show[];
  }


export interface Episode {
  title: string;
  description: string;
  episode: number;
  file: string;
}

export interface Season {
  season: number;
  title: string;
  image: string;
  episodes: Episode[];
}

export interface ShowDetails {
  id: string;
  title: string;
  description: string;
  seasons: Season[];
  image: string;
  genres: string[];
}
  
export interface LocationState {
  season: Season;
}

export interface AudioPlayerContextProps {
  episode: Episode | null;
  playEpisode: (episode: Episode) => void;
}