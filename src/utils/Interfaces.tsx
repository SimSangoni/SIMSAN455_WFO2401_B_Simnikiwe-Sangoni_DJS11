export interface HeaderProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortOption: string;
  sortMenuOpen: boolean;
  toggleSortMenu: () => void;
  handleSortOption: (option: string) => void;
}

export interface SearchQueryProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}


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

export interface ShowProps {
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
  toggleFavorite: () => void;
  isFavorite: boolean;
}


export interface DisplayTrackProps {
  currentTrack: Episode;
  audioRef: React.RefObject<HTMLAudioElement>;
  setDuration: (duration: number) => void;
  progressBarRef: React.RefObject<HTMLDivElement>;
  handleNext: () => void;
  seasonImage: string | undefined; 
}

export interface ControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  duration: number;
  setTimeProgress: (time: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  isPlaying: boolean;
  handlePlayPause: () => void;
}

export interface ProgressBarProps {
  progressBarRef: React.RefObject<HTMLDivElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
}

export interface ErrorProps {
  message: string;
}

export interface SortButtonProps {
  shows: Show[];
  setSortedShows: (shows: Show[]) => void;
}