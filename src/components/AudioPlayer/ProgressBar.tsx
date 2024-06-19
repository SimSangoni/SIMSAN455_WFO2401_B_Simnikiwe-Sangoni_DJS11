interface ProgressBarProps {
  progressBarRef: React.RefObject<HTMLDivElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}) => {
  const handleProgressClick = (event: React.MouseEvent) => {
    if (progressBarRef.current && audioRef.current) {
      const progressBarWidth = progressBarRef.current.offsetWidth;
      const clickPosition = event.nativeEvent.offsetX;
      const clickTime = (clickPosition / progressBarWidth) * duration;
      audioRef.current.currentTime = clickTime;
    }
  };

  return (
    <div className="progress-container" onClick={handleProgressClick}>
      <div className="progress-bar" ref={progressBarRef} style={{ width: `${(timeProgress / duration) * 100}%` }} />
    </div>
  );
};

export default ProgressBar;
