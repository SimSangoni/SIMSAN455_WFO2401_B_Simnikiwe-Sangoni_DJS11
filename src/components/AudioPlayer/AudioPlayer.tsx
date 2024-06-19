import { useEffect, useRef } from 'react';
import { useAudioPlayer } from "./AudioPlayerContext";
import './AudioPlayer.css'

export default function AudioPlayer(){

    const {episode} = useAudioPlayer();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current && episode) {
          audioRef.current.pause();
          audioRef.current.src = episode.file;
          audioRef.current.load();
          audioRef.current.play();
        }
      }, [episode]);

    if (!episode) return null;

    return (
        <div className="audio-player">
            <div className="audio-player-content">
                <div className="audio-player-info">
                    <h3 className='episode-title'>{episode.title}</h3>
                    {/* <p className='episode-description'>{episode.description}</p> */}
                </div>
                <audio ref={audioRef} controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}