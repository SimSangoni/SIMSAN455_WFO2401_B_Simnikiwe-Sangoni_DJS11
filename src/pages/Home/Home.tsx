import { useState, useEffect } from "react";
import './Home.css'


interface Show {
    id: string;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
}


export default function Home(){

    const[shows, setShows] = useState<Show[]>([])
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchShows();
      }, []);

    async function fetchShows() {
        try {
          const response = await fetch('https://podcast-api.netlify.app/shows');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log(data[0]); 
          setShows(data);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching shows:', error.message);
                setError(error.message);
            } else {
                console.error('Error fetching shows:', error);
                setError('An unexpected error occurred');
            }
          
        }
      };


    return (
            <div className="home">
                {shows.map( show => (
                    <div key={show.id} className="show-container" 
                        style={{ backgroundImage: `url(${show.image})` }}>
                        <div className="show-content">
                            <h1 className="show-title">{show.title}</h1>
                            <p className="show-description">{show.description}</p>
                            
                        </div>
                            <p className="show-seasons">Seasons: {show.seasons}</p>
                    </div> 
                )) }
            </div> 
    )
}


// {
//     "id": "10716",
//     "title": "Something Was Wrong",
//     "description": "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
//     "seasons": 14,
//     "image": "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
//     "genres": [
//         1,
//         2
//     ],
//     "updated": "2022-11-03T07:00:00.000Z"
// }