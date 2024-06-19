import { useLocation } from "react-router-dom";
import { Episode } from "../../utils/Interfaces";

export default function EpisodeDetail(){

const location = useLocation();
  const { episode } = location.state as { episode: Episode };

    return (
        
            <div className="episode-detail">
                <h2>{episode.title}</h2>
                <audio controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div> 
    )
}