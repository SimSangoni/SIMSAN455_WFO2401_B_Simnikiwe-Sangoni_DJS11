import { useEffect, useRef } from 'react';

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
  useEffect(() => {
    if (audioRef.current) {
      const handleTimeUpdate = () => {
        if (audioRef.current && progressBarRef.current) {
          const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          progressBarRef.current.style.width = `${percent}%`;
        }
      };

      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        }
      };
    }
  }, [audioRef, progressBarRef]);

  return (
    <div className="progress-container">
      <div className="progress-bar" ref={progressBarRef} style={{ width: `${(timeProgress / duration) * 100}%` }} />
    </div>
  );
};

export default ProgressBar;
