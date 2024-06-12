import { useState, useEffect } from "react";


interface Show {
    id: number;
    title: string;
    description: string;
    seasons: number;
    image: string;
    genres: number[];
    updated: string;
}


export default function Home(){

    const[shows, setShows] = useState<Show[]>([])

    useEffect(() => {
        fetchShows();
      }, []);

    async function fetchShows() {
        try {
          const response = await fetch('https://podcast-api.netlify.app/');
          const data = await response.json();
        //   console.log(data[0]); 
          setShows(data);
        } catch (error) {
          console.error('Error fetching shows:', error);
        }
      };

      fetchShows()

    return (
        
            <div>
                This is the home page
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