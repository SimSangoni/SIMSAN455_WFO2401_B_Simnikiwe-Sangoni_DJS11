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

interface Genre {
    id: number;
    title: string;
    description: string;
    shows: string[];
  }

  interface HomeProps {
    searchQuery: string;
    sortOption: string;
    
  }


export default function Home({ searchQuery, sortOption }: HomeProps){

    const[shows, setShows] = useState<Show[]>([])
    const [genres, setGenres] = useState<Genre[]>([]);
    const [sortedShows, setSortedShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetchShows();
    }, []);

    useEffect(() => {
      sortShows(sortOption);
    }, [sortOption, shows]);



    async function fetchShows() {
        try {
            // Fetching shows for preview
          const showsResponse = await fetch('https://podcast-api.netlify.app/shows');
          if (!showsResponse.ok) {
            throw new Error(`HTTP error! status: ${showsResponse.status}`);
          }
        const showsData = await showsResponse.json();

        // Get unique genre IDs from shows
        const uniqueGenreIds = Array.from(new Set(
            showsData.flatMap((show: Show) => show.genres)));
            // console.log(uniqueGenreIds)

            // Fetch genres individually
        const genrePromises = uniqueGenreIds.map((id) =>
            fetch(`https://podcast-api.netlify.app/genre/${id}`).
                then((res) => 
                res.json())
        );

        const genresData = await Promise.all(genrePromises);

          setShows(showsData);
          setGenres(genresData);
          setLoading(false);


        } catch (error) {
            if (error instanceof Error) {
                console.error('Error fetching shows:', error.message);
            } else {
                console.error('Error fetching shows:', error);
            }
          setLoading(false);
        }
      }

      function sortShows(option: string) {
        let sorted = [...shows];
        switch (option) {
          case 'A-Z':
            sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case 'Z-A':
            sorted = sorted.sort((a, b) => b.title.localeCompare(a.title));
            break;
          case 'Newest':
            sorted = sorted.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
            break;
          case 'Oldest':
            sorted = sorted.sort((a, b) => new Date(a.updated).getTime() - new Date(b.updated).getTime());
            break;
          default:
            break;
        }
        setSortedShows(sorted);
      }

      const filteredShows = searchQuery
      ? sortedShows.filter(show => 
        show.title.toLowerCase().includes(searchQuery.toLowerCase()))
      : sortedShows;


      function getGenreTitles(genreIds: number[]): string[] {
        return genreIds.map((id) => 
            genres.find((genre) => 
            genre.id === id)?.title).
            filter(Boolean) as string[];
      }


      if (loading) {
        return (
          <div className="loading-container">
            {/* <img src="" alt="Loading" className="loading-image" /> */}
            Please wait, loading...
          </div>
        );
      }


    return (
        <>
        <div className="home">

                {filteredShows.map( show => (
                    <div key={show.id} className="show-container" 
                        style={{ backgroundImage: `url(${show.image})` }}>
                        <div className="show-content">
                            <h1 className="show-title">{show.title}</h1>
                            {/* <p className="show-description">{show.description}</p> */}
                            
                        </div>
                            <p className="show-seasons">
                            {getGenreTitles(show.genres).join(' • ')} 
                            <br></br>
                            {show.seasons} {show.seasons > 1 ? 'Seasons' : 'Season'}
                            </p>
                    </div> 
                )) }
            </div> 
        </>
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