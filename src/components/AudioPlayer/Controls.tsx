import { useState, useEffect } from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10  } from "react-icons/tb";

interface ControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  progressBarRef: React.RefObject<HTMLDivElement>;
  duration: number;
  setTimeProgress: (time: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  handleNext,
  handlePrev,
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

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

  const handleRewind = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10;
    }
  };

  const handleFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10;
    }
  };

  const handleProgress = () => {
    if (audioRef.current && progressBarRef.current) {
      const percent = (audioRef.current.currentTime / duration) * 100;
      progressBarRef.current.style.width = `${percent}%`;
      setTimeProgress(audioRef.current.currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleProgress);
      return () => {
        audioRef.current?.removeEventListener("timeupdate", handleProgress);
      };
    }
  }, [audioRef, handleProgress]);


  return (
    <div className="controls">
      <button onClick={handlePrev}><MdSkipPrevious /></button>
      <button onClick={handleRewind}><TbRewindBackward10 /></button>
      <button onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={handleFastForward}><TbRewindForward10 /></button>
      <button onClick={handleNext}><MdSkipNext /></button>
    </div>
  );
};

export default Controls;
