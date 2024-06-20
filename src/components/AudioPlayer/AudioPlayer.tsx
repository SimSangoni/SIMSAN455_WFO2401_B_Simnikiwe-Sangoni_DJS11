import { useRef, useState, useEffect } from 'react';
import { useAudioPlayer } from './AudioPlayerContext';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { FaHeart, FaRegHeart, FaTimes } from 'react-icons/fa';
import './AudioPlayer.css';

const AudioPlayer: React.FC = () => {
  const {
    episode,
    playNextEpisode,
    playPrevEpisode,
    seasonImage,
    toggleFavorite,
    isFavorite
  } = useAudioPlayer();
  const [currentTrack, setCurrentTrack] = useState(episode);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  
    useEffect(() => {
      setCurrentTrack(episode);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.load();
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, [episode]);

    const handleClosePlayer = () => {
      setCurrentTrack(null);
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handlePlayPause = () => {
      if (audioRef.current) {
        setIsPlaying(true);
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };


  
    if (!currentTrack) return null;
  
    return (
      <div className='player'>
        <div className="audio-player">
          <div className="inner">
          <button className="close-button" onClick={handleClosePlayer}><FaTimes /></button>
          <div className="track-info-section">
            <DisplayTrack
                currentTrack={currentTrack}
                audioRef={audioRef}
                setDuration={setDuration}
                progressBarRef={progressBarRef}
                handleNext={playNextEpisode}
                seasonImage={seasonImage}
              />
            
              <button className="favorite-button" onClick={toggleFavorite}>
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>
          </div>
            
            <Controls
              audioRef={audioRef}
              progressBarRef={progressBarRef}
              duration={duration}
              setTimeProgress={setTimeProgress}
              handleNext={playNextEpisode}
              handlePrev={playPrevEpisode}
              isPlaying={isPlaying}
              handlePlayPause={handlePlayPause}
            />
            <ProgressBar
              progressBarRef={progressBarRef}
              audioRef={audioRef}
              timeProgress={timeProgress}
              duration={duration}
            />
      
          </div>
        </div>
      </div>
    );
  };
  
  export default AudioPlayer;