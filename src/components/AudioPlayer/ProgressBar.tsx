import { useEffect } from 'react';
import { ProgressBarProps } from '../../utils/Interfaces';
import './ProgressBar.css'


const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
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
      <div className="progress-bar" ref={progressBarRef}  />
    </div>
  );
};

export default ProgressBar;
