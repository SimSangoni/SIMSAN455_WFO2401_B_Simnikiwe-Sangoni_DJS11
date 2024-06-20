import { useAudioPlayer } from '../../components/AudioPlayer/AudioPlayerContext';
import './Favourites.css';

const Favorites = () => {
  const { favorites, removeFavorite } = useAudioPlayer();

  if (favorites.length === 0) {
    return <div>No favorites added yet.</div>;
  }

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      <div className="favorites-list">
        {favorites.map(fav => (
          <div key={fav.file} className="favorite-item">
            <img src={fav.seasonImage} alt={fav.title} />
            <div>
              <h2>{fav.title}</h2>
              <p>{fav.description}</p>
              <p>Show: {fav.showTitle}</p>
              <p>Season: {fav.seasonTitle}</p>
              <p>Added: {new Date(fav.addedAt).toLocaleString()}</p>
              <button onClick={() => removeFavorite(fav.file)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
