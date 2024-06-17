import { useState, useEffect } from "react";
import {Genre, Show} from '../../utils/Interfaces'
import { fetchShowsAndGenres } from "../../utils/apiRequests";
import './Genres.css'




export default function Genres(){
    
  const [genres, setGenres] = useState<Genre[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    fetchData();
  }, []);


  async function fetchData() {
    try {
      const { shows, genres } = await fetchShowsAndGenres();
      setShows(shows);
      setGenres(genres);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  function getGenreImage(genre: Genre): string {
    const genreShowId = genre.shows[0];
    const genreShow = shows.find(show => show.id === genreShowId);
    return genreShow ? genreShow.image : '';
  }

    return (
      <div className="genres-page">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="genres-list">
          {genres.map(genre => (
            <div key={genre.id} className="genre-container" style={{ backgroundImage: `url(${getGenreImage(genre)})` }}>
              <div className="genre-content">
                <h2 className="genre-title">{genre.title}</h2>
                <p className="genre-description">{genre.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    )
}


// {
//   "id": 1,
//   "title": "Personal Growth",
//   "description": "Looking to improve yourself and reach your full potential? Look no further than our collection of personal growth podcasts! Our curated selection features a wide range of experts and thought leaders sharing their insights and strategies on everything from goal setting and productivity to mindfulness and self-care. Whether you're looking to advance your career, improve your relationships, or simply live a happier and more fulfilling life, our podcasts offer practical, actionable advice to help you achieve your goals.",
//   "shows": [
//       "10716",
//       "10276",
//       "6756",
//       "10660"
//   ]
// }