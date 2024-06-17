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


export default function Genres(){
    

   



    return (
        
            <div>
                This is the genres page
            </div> 
    )
}