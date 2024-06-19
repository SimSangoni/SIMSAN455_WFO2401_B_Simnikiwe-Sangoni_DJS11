import { useEffect, useRef } from 'react';
import { useAudioPlayer } from "./AudioPlayerContext";
import './AudioPlayer.css'

export default function AudioPlayer(){

    const {
        episode,
        playNextEpisode,
        playPrevEpisode,
        toggleShuffle,
        toggleRepeat,
        toggleFavorite,
        isShuffling,
        isRepeating,
        isFavorite

    } = useAudioPlayer();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current && episode) {
          audioRef.current.pause();
          audioRef.current.src = episode.file;
          audioRef.current.load();
          audioRef.current.play();
        }
      }, [episode]);

    const handleFastForward = () => {
    if (audioRef.current) {
        audioRef.current.currentTime += 10;
    }
    };

    const handleRewind = () => {
        if (audioRef.current) {
          audioRef.current.currentTime -= 10;
        }
      };

    if (!episode) return null;

    return (
        <div className="audio-player">
            <div className="audio-player-content">
                <div className="audio-player-info">
                    <h3 className='episode-title'>{episode.title}</h3>
                    {/* <p className='episode-description'>{episode.description}</p> */}
                </div>
                <audio ref={audioRef} controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="controls">
                    <button onClick={playPrevEpisode}>Previous</button>
                    <button onClick={handleRewind}>Rewind 10s</button>
                    <button onClick={handleFastForward}>Fast Forward 10s</button>
                    <button onClick={playNextEpisode}>Next</button>
                    <button onClick={toggleShuffle}>{isShuffling ? 'Disable Shuffle' : 'Enable Shuffle'}</button>
                    <button onClick={toggleRepeat}>{isRepeating ? 'Disable Repeat' : 'Enable Repeat'}</button>
                    <button onClick={toggleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
                </div>
        </div>
    )
}