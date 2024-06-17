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

interface GenresProps {
  shows: Show[];
}


export default function Genres({ shows }: GenresProps){
    
  const genresMap = new Map<number, Genre>();
   
  shows.forEach(show => {
    show.genres.forEach(genreId => {
      if (!genresMap.has(genreId)) {
        genresMap.set(genreId, {
          id: genreId,
          title: `Genre ${genreId}`, // Placeholder, replace with actual genre titles if available
          description: `Description for genre ${genreId}`, // Placeholder, replace with actual genre descriptions if available
          shows: []
        });
      }
      genresMap.get(genreId)?.shows.push(show.id);
    });
  });



    return (
        
            <div>
                This is the genres page
            </div> 
    )
}