import { useState, useEffect } from "react";
import {Genre, Show} from '../../utils/Interfaces'
import { fetchShowsAndGenres } from "../../utils/apiRequests";
import './Genres.css'
import {Outlet, useNavigate } from 'react-router-dom';
import Loading from "../../components/Loading/Loading";




export default function Genres(){
    
  const [genres, setGenres] = useState<Genre[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
   
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
    const randomIndex = Math.floor(Math.random() * genre.shows.length);
    const genreShowId = genre.shows[randomIndex];
    const genreShow = shows.find(show => show.id === genreShowId);
    return genreShow ? genreShow.image : '';
  }

  function handleGenreClick(genre: Genre) {
    const genreSlug = genre.title.toLowerCase().replace(/ /g, '-');
    navigate(`/genres/${genreSlug}`);
  }

    return (
      <div className="genres-page">
      {loading ? (
        <Loading />
      ) : (
      <>
        <div className="genres-list">
          {genres.map(genre => (
            <div key={genre.id} 
            className="genre-container" 
            style={{ backgroundImage: `url(${getGenreImage(genre)})` }}
            onClick={() => handleGenreClick(genre)}
            >
              <h2 className="genre-title">{genre.title}</h2>
              <div className="genre-content">
                <p className="genre-description">{genre.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Outlet/>
        </>
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