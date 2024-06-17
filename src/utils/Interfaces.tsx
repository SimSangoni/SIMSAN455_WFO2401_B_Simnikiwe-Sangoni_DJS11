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