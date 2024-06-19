import { DisplayTrackProps } from "../../utils/Interfaces";
import { useEffect } from "react";

const DisplayTrack: React.FC<DisplayTrackProps> = ({
    currentTrack,
    audioRef,
    setDuration,
    handleNext,
  }) => {
    useEffect(() => {
      if (audioRef.current) {
        const handleLoadedData = () => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        };
  
        audioRef.current.addEventListener('loadeddata', handleLoadedData);
  
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('loadeddata', handleLoadedData);
          }
        };
      }
    }, [audioRef, currentTrack, setDuration]);
  
    return (
      <div className="display-track">
        <img src={currentTrack.image} alt={currentTrack.title} className="track-image" />
        <div className="track-info">
          <h3 className="track-title">{currentTrack.title}</h3>
          <p className="track-description">{currentTrack.description}</p>
        </div>
        <audio ref={audioRef} src={currentTrack.file} onEnded={handleNext} />
      </div>
    );
  };
  
export default DisplayTrack