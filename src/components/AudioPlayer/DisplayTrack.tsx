import React, { useEffect } from 'react';
import { DisplayTrackProps } from '../../utils/Interfaces';

const DisplayTrack: React.FC<DisplayTrackProps> = ({
  currentTrack,
  audioRef,
  setDuration,
  handleNext,
  seasonImage,
}) => {
  useEffect(() => {
    if (audioRef.current) {
      const handleLoadedData = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
        }
      };

      audioRef.current.addEventListener('loadeddata', handleLoadedData);
      audioRef.current.src = currentTrack.file;
      audioRef.current.play();

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
  }, [audioRef, currentTrack, setDuration]);

  return (
    <div className="display-track">
      <img src={currentTrack.image || seasonImage || 'default-image.jpg'} alt={currentTrack.title} className="track-image" />
      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        {/* <p className="track-description">{currentTrack.description}</p> */}
      </div>
      <audio ref={audioRef} src={currentTrack.file} onEnded={handleNext} />
    </div>
  );
};

export default DisplayTrack;
