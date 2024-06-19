import {useRef, useState, useEffect } from 'react';
import { useAudioPlayer } from './AudioPlayerContext';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import './AudioPlayer.css';

const AudioPlayer: React.FC = () => {
    const {
      episode,
      playNextEpisode,
      playPrevEpisode,
      seasonImage
    } = useAudioPlayer();
    const [currentTrack, setCurrentTrack] = useState(episode);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
  
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const progressBarRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      setCurrentTrack(episode);
    }, [episode]);

  
    if (!currentTrack) return null;
  
    return (
      <>
        <div className="audio-player">
          <div className="inner">
            <DisplayTrack
              currentTrack={currentTrack}
              audioRef={audioRef}
              setDuration={setDuration}
              progressBarRef={progressBarRef}
              handleNext={playNextEpisode}
              seasonImage={seasonImage}
            />
            <Controls
              audioRef={audioRef}
              progressBarRef={progressBarRef}
              duration={duration}
              setTimeProgress={setTimeProgress}
              handleNext={playNextEpisode}
              handlePrev={playPrevEpisode}
            />
            <ProgressBar
              progressBarRef={progressBarRef}
              audioRef={audioRef}
              timeProgress={timeProgress}
              duration={duration}
            />
      
          </div>
        </div>
      </>
    );
  };
  
  export default AudioPlayer;