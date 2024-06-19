import { createContext, useState } from "react";
import { AudioPlayerContextProps, Episode } from "../../utils/Interfaces";

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined)

export function AudioPlayerProvider(){
    const [episode, setEpisode] = useState<Episode | null>(null);

    const playEpisode = (episode: Episode) => {
        setEpisode(episode);
    }

    return (
        <div>
            This is the AudioPlayerProvider
        </div>
    )
}