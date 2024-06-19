import {useRef, useState, useEffect } from 'react';
import { useAudioPlayer } from './AudioPlayerContext';
import DisplayTrack from './DisplayTrack';
import Controls from ',/Controls';
import ProgressBar from './ProgressBar';
import TopBar from './TopBar';
import './AudioPlayer.css';

const AudioPlayer: React.FC = () => {
  const {
    episode,
    episodes,
    playNextEpisode,
    playPrevEpisode,
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
      <TopBar />
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            currentTrack={currentTrack}
            audioRef={audioRef}
            setDuration={setDuration}
            progressBarRef={progressBarRef}
            handleNext={playNextEpisode}
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
