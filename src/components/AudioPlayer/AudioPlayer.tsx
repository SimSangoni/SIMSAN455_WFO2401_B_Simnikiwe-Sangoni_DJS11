import { useAudioPlayer } from "./AudioPlayerContext";

export default function AudioPlayer(){

    const {episode} = useAudioPlayer();

    if (!episode) return null;

    return (
        <div>
            <div className="audio-player-info">
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
            </div>
        </div>
    )
}