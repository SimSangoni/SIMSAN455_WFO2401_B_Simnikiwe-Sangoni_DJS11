import {useRef, useState, useEffect } from 'react';
import { useAudioPlayer } from './AudioPlayerContext';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import Modal from '../Modal/Modal'

import { FaTimes } from 'react-icons/fa';
import './AudioPlayer.css';

const AudioPlayer: React.FC = () => {
    const {
      episode,
      playNextEpisode,
      playPrevEpisode,
      seasonImage,
    } = useAudioPlayer();

    const [currentTrack, setCurrentTrack] = useState(episode);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
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
  
    const handlePlayPause = () => {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
          setIsPlaying(true);
        } else {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }
    };
  
    const handleClosePlayer = () => {
      if (isPlaying) {
        setIsModalOpen(true);
        console.log('Modal should be open', isModalOpen); // Debug log
      } else {
        closePlayer();
      }
    };
  
    const closePlayer = () => {
      setCurrentTrack(null);
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
      setIsModalOpen(false);
    };
  
    useEffect(() => {
      console.log('isModalOpen:', isModalOpen); // Debug log to check modal state
    }, [isModalOpen]);

  
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
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={closePlayer}
            />
      </div>
    );
  };
  
  export default AudioPlayer;