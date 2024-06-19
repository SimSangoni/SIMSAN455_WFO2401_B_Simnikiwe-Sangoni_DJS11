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
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
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

  return (
    <div className="controls">
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleRewind}>-10s</button>
      <button onClick={handlePlayPause}>Play/Pause</button>
      <button onClick={handleFastForward}>+10s</button>
      <button onClick={handleNext}>Next</button>
      <div ref={progressBarRef} className="progress-bar" onTimeUpdate={handleProgress} />
    </div>
  );
};

export default Controls;
