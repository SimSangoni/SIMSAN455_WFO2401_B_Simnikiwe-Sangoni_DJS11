import { useEffect, useState } from 'react';
import { FavouriteDetail } from '../../utils/Interfaces';
import './Favourites.css';
import { RiDeleteBin2Fill } from 'react-icons/ri';


export default function Favourites() {
    const [favouriteEpisodes, setFavouriteEpisodes] = useState<FavouriteDetail[]>([]);
  
    useEffect(() => {
        try {
          const storedFavourites = JSON.parse(localStorage.getItem('favoriteDetails') || '[]');
          if (Array.isArray(storedFavourites)) {
            setFavouriteEpisodes(storedFavourites);
            console.log('Favourites loaded from localStorage:', storedFavourites);
          } else {
            console.warn('Stored favourites is not an array:', storedFavourites);
          }
        } catch (error) {
          console.error('Error loading favourites from localStorage:', error);
        }
      }, []);

      const handleDelete = (showId: string, season: string, episodeNumber: number) => {
        const updatedFavourites = favouriteEpisodes.filter(fav =>
          !(fav.showId === showId && fav.season === season && fav.episode.episode_number === episodeNumber)
        );
        setFavouriteEpisodes(updatedFavourites);
        console.log(updatedFavourites)
        localStorage.setItem('favoriteDetails', JSON.stringify(updatedFavourites));
      };

    const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
    };
  
    if (favouriteEpisodes.length === 0) {
      return <div className="favourites">No favourite episodes yet.</div>;
    }
  
    return (
        <div className="favourites">
          <h1>Your Favourite Episodes</h1>
          <div className="favourite-list">
            {favouriteEpisodes.map((fav) => (
              <div key={`${fav.showId}-${fav.season}-${fav.episode.episode_number}`} className="favourite-item">
                <div className="favourite-info">
                  <img src={fav.season_image} alt="Show" className="show-image" />
                  <div className="episode-details">
                    <h2>{fav.showTitle}</h2>
                    <h3>{fav.season}</h3>
                    <h4>Episode {fav.episode.episode_number}: {fav.episode.title}</h4>
                    <p>{fav.episode.description || 'No description available.'}</p>
                    <p className="timestamp">Added on: {formatDate(fav.timestamp)}</p>
                  </div>
                  <button onClick={() => handleDelete(fav.showId, fav.season, fav.episode.episode_number)} className="delete-button">
                    <RiDeleteBin2Fill />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
  }