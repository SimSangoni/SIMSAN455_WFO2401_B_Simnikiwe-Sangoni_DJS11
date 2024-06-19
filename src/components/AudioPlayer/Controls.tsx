import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaPause, FaPlay } from "react-icons/fa";
import { TbRewindBackward10, TbRewindForward10  } from "react-icons/tb";
import { ControlsProps } from "../../utils/Interfaces";

const Controls: React.FC<ControlsProps> = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  handleNext,
  handlePrev,
  isPlaying,
  handlePlayPause,
}) => {

 

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




  return (
    <div className="controls">
      <button onClick={handlePrev}><MdSkipPrevious /></button>
      <button onClick={handleRewind}><TbRewindBackward10 /></button>
      <button onClick={handlePlayPause}>
        {!isPlaying ? <FaPlay /> : <FaPause />}
      </button>
      <button onClick={handleFastForward}><TbRewindForward10 /></button>
      <button onClick={handleNext}><MdSkipNext /></button>
      <div ref={progressBarRef} className="progress-bar" onTimeUpdate={handleProgress} />
    </div>
  );
};

export default Controls;
