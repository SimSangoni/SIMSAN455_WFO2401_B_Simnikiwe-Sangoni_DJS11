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
  image: string;
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
  seasonImage: string | undefined;
  episodes: Episode[];
  playEpisode: (episode: Episode, seasonImage: string) => void;
  setEpisodes: (episodes: Episode[]) => void;
  playNextEpisode: () => void;
  playPrevEpisode: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  toggleFavorite: () => void;
  isShuffling: boolean;
  isRepeating: boolean;
  isFavorite: boolean;
}


export interface DisplayTrackProps {
  currentTrack: Episode;
  audioRef: React.RefObject<HTMLAudioElement>;
  setDuration: (duration: number) => void;
  progressBarRef: React.RefObject<HTMLDivElement>;
  handleNext: () => void;
}