import { useState, useEffect } from "react";
import './Shows.css'
import { ShowProps, Show, Genre } from "../../utils/Interfaces";
import { fetchShowsAndGenres } from "../../utils/apiRequests";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { isErrorWithMessage } from "../../utils/funstionsUtils";
import SortButton from "../../components/SortButton/SortButton";
import SearchQuery from "../../components/SearchQuery/SearchQuery";


export default function Shows({ searchQuery }: ShowProps){

    const[shows, setShows] = useState<Show[]>([])
    const [genres, setGenres] = useState<Genre[]>([]);
    const [sortedShows, setSortedShows] = useState<Show[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState(searchQuery);


    useEffect(() => {
      fetchShows();
    }, []);

    async function fetchShows() {
      try {
        const { shows, genres } = await fetchShowsAndGenres();
        setShows(shows);
        setGenres(genres);
        setLoading(false);
      } catch (error: unknown) {
        if  (isErrorWithMessage(error)) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

      const filteredShows = searchTerm
      ? sortedShows.filter(show => 
        show.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : sortedShows;


      function getGenreTitles(genreIds: number[]): string[] {
        return genreIds.map((id) => 
            genres.find((genre) => 
            genre.id === id)?.title).
            filter(Boolean) as string[];
      }


      if (loading) {
        return (
          <Loading />
        );
      }

      if (error) {
        return <Error message={error} />;
      }


    return (
        <>
        <div className="user-input">
          <SortButton shows={shows} setSortedShows={setSortedShows} />
          <SearchQuery searchQuery={searchTerm} setSearchQuery={setSearchTerm} />
        </div>
         
        <div className="home">

                {filteredShows.map( show => (
                  <Link to={`/show/${show.id}`} key={show.id} >
                      <div className="show-container" 
                        style={{ backgroundImage: `url(${show.image})` }}>
                        <div className="show-content">
                            <h1 className="show-title">{show.title}</h1>
                           
                            
                        </div>
                            <p className="show-seasons">
                            {getGenreTitles(show.genres).join(' • ')} 
                            <br></br>
                            {show.seasons} {show.seasons > 1 ? 'Seasons' : 'Season'}
                            </p>
                      </div> 
                  </Link>
                    
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