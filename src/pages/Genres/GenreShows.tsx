import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GenreShows.css';
import { Show } from '../../utils/Interfaces'
import { fetchShowsAndGenres } from '../../utils/apiRequests';

export default function GenreShows() {
  const { genreSlug } = useParams<{ genreSlug: string }>();
  const [shows, setShows] = useState<Show[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [genreSlug]);

  async function fetchData() {
    try {
      const { shows, genres } = await fetchShowsAndGenres();
      const genre = genres.find(g => g.title.toLowerCase().replace(/ /g, '-') === genreSlug);
      if (genre) {
        const genreShows = shows.filter(show => genre.shows.includes(show.id));
        setShows(genreShows);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <div className="genre-shows-page">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="shows-list">
          {shows.map(show => (
            <div key={show.id} className="show-container" style={{ backgroundImage: `url(${show.image})` }}>
              <div className="show-content">
                <h1 className="show-title">{show.title}</h1>
              </div>
              <p className="show-seasons">
                {show.seasons} {show.seasons > 1 ? 'Seasons' : 'Season'}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

