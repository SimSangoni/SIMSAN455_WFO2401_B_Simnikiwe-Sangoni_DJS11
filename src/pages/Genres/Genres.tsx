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

    useEffect(() => {
        fetchGenreIDs();
      }, []);
    
      async function fetchGenreIDs() {
        try {
          const genreIDsResponse = await fetch('https://podcast-api.netlify.app/genre/all');
          if (!genreIDsResponse.ok) {
            throw new Error(`HTTP error! status: ${genreIDsResponse.status}`);
          }
          const genreIDs = await genreIDsResponse.json();
          fetchGenres(genreIDs);
        } catch (error) {
          if (error instanceof Error) {
            console.error('Error fetching genre IDs:', error.message);
          } else {
            console.error('Error fetching genre IDs:', error);
          }
          setLoading(false);
        }
      }
    
      async function fetchGenres(genreIDs: number[]) {
        try {
          const genrePromises = genreIDs.map(id =>
            fetch(`https://podcast-api.netlify.app/genre/${id}`).then(res => res.json())
          );
          const genresData = await Promise.all(genrePromises);
          setGenres(genresData);
          setLoading(false);
        } catch (error) {
          if (error instanceof Error) {
            console.error('Error fetching genres:', error.message);
          } else {
            console.error('Error fetching genres:', error);
          }
          setLoading(false);
        }
      }




    return (
        
            <div>
                This is the genres page
            </div> 
    )
}