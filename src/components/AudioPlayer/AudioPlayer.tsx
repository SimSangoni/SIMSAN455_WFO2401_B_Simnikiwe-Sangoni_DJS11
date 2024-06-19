import { useAudioPlayer } from "./AudioPlayerContext";
import './AudioPlayer.css'

export default function AudioPlayer(){

    const {episode} = useAudioPlayer();

    if (!episode) return null;

    return (
        <div className="audio-player">
            <div className="audio-player-content">
                <div className="audio-player-info">
                    <h3>{episode.title}</h3>
                    <p>{episode.description}</p>
                </div>
                <audio controls autoPlay>
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}