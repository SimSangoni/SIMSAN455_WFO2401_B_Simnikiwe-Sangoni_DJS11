import { useState, useEffect } from "react";

interface Show {
    id: string;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
  }

  interface Genre {
    id: number;
    title: string;
    description: string;
    shows: string[];
  }

export default function Genres(){
    const [genres, setGenres] = useState<Genre[]>([]);
    const [shows, setShows] = useState<Show[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [loading, setLoading] = useState(true);

    




    return (
        
            <div>
                This is the genres page
            </div> 
    )
}